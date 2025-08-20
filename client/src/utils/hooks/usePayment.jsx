import { RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET } from '@/lib/config';
import { post } from '@/services/api';
import { paths } from '@/services/paths';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// Utility to load external scripts
const loadScript = (src) =>
  new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });

// Payment Gateway Handlers
const paymentGateways = {
  razorpay: async (options) => {
    const rzp = new window.Razorpay(options);
    rzp.open();
  },
  // Add more gateways here (e.g., stripe, paypal)
  // stripe: async (options) => { /* Stripe integration */ },
  // paypal: async (options) => { /* PayPal integration */ },
};

const usePayment = (gateway = 'razorpay') => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (id) => post(`payment/createOrder/${id}`),
    onSuccess: async (res) => {
      try {
        if (res.data.success) {
          const { plan } = res.data;
          const { id, amount, currency } = res.data.data;

          if (!id || !amount || !currency) {
            toast.info('Invalid order data');
            return;
          }

          // Define options based on the selected gateway
          let options = {};

          switch (gateway) {
            case 'razorpay':
              options = {
                key: RAZORPAY_KEY_ID, // Ensure these are defined in your environment variables
                key_secret: RAZORPAY_KEY_SECRET,
                amount: amount,
                currency: currency,
                name: 'testorg',
                description: `Plan Subscription<br>${plan.name}`,
                order_id: id,
                handler: async function (response) {
                  const paymentId = response.razorpay_payment_id;

                  const serverData = {
                    plan,
                    paymentId,
                    orderId: response.razorpay_order_id,
                    signature: response.razorpay_signature,
                  };

                  try {
                    const serverResponse = await post(`payment/subscription`, serverData);
                    toast.success(serverResponse?.data?.message);
                    navigate(paths.packages); // Adjust the path as needed
                  } catch (error) {
                    console.error('Payment Verification Error:', error);
                    toast.error(error?.response?.data?.message || 'Payment verification failed');
                  }
                },
                notes: {
                  address: 'Your address',
                },
                theme: {
                  color: '#F37254',
                },
              };
              break;

            // Add cases for other gateways
            /*
            case 'stripe':
              options = {
                // Stripe-specific options
              };
              break;
            case 'paypal':
              options = {
                // PayPal-specific options
              };
              break;
            */
            default:
              toast.error('Unsupported payment gateway');
              return;
          }

          // Load gateway-specific scripts if necessary
          if (gateway === 'razorpay') {
            const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
            if (!res) {
              toast.error('Razorpay failed to load!');
              return;
            }
          }

          // Initialize and open the payment gateway
          await paymentGateways[gateway](options);
        } else {
          toast.error(res.data.message || 'Payment creation failed');
        }
      } catch (error) {
        console.error('Payment Handling Error:', error);
        toast.error(error?.message || 'An error occurred during payment processing');
      }
    },
    onError: (err) => {
      console.error('Mutation Error:', err);
      toast.error(err?.response?.data?.error || 'Payment request failed');
    },
  });

  const handlePayment = async (data, userInfo) => {
    if (
      (!userInfo._id || userInfo?.userType?.name?.toLowerCase() !== 'employer')
    ) {
      toast.info('Please login as Employer to Buy Plans.');
      return;
    }

    // For Razorpay, the script is loaded within onSuccess
    // For other gateways, load scripts as needed here

    mutation.mutate(data);
  };

  return { handlePayment, isLoading: mutation.isLoading };
};

export default usePayment;
