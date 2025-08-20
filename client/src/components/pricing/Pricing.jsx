import { RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET } from "@/lib/config";
import { get, post } from "@/services/api";
import { paths } from "@/services/paths";
import usePayment from "@/utils/hooks/usePayment";
import useUserInfo from "@/utils/hooks/useUserInfo";
import { useQuery,useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Pricing = () => {
  const userInfo = useUserInfo();
  const { handlePayment } = usePayment('razorpay'); // You can pass 'stripe', 'paypal', etc.

const {data:pricingContent=[],isLoading}=useQuery({
  queryKey:["plans"],
  queryFn: async () => {
    try {
      let res = (await get('/plan?page=1')).data.data;
      return res;
    } catch (error) {
      //console.log(error)
     return
    }
  },
})


if (isLoading) return <div>Loading...</div>
//console.log({userInfo})
  return (
    <div className="pricing-tabs tabs-box wow fadeInUp">
      {/* <!--Tabs Container--> */}
      <div className="row">
        {pricingContent?.map((item) => (
          <div
            className={`pricing-table col-lg-4 col-md-6 col-sm-12 ${item.tag}`}
            key={item._id}
          >
            <div className="inner-box">
              {item.tag ? (
                <span className="tag">Recommended</span>
              ) : null}

              <div className="title">{item.name}</div>
              <div className="price">
                ${item.price} 
                <span className="duration text-capitalize">/ {item.type}</span>
              </div>
              <div className="table-content">
                <ul>
                  <li>
                    <span>{item.jobPostLimit} job postings</span>
                  </li>
              
                  <li>
                    <span>Job displayed for {item.month > 0 ? item.month * 30 : 15} days</span>
                  </li>
                  <li>
                    <span>Premium Support 24/7</span>
                  </li>
                </ul>
              </div>
              <div className="table-footer">
                <Link onClick={()=>handlePayment(item._id,userInfo)} className="theme-btn btn-style-three">
                 Buy
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
