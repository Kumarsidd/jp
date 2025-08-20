import { useMutation, useQueryClient } from "@tanstack/react-query";
import { post } from "@/services/api";
import { toast } from "react-toastify";
import { fetchWishlist } from "@/store/reducers/Whishlist";
import { useDispatch } from "react-redux";

export const useAddToWishlist = () => {
  const queryClient = useQueryClient();
  const dispatch=useDispatch()
  return useMutation({
    mutationFn: async ({ id, operation }) => {
      const res = await post('/whishlist', { id, operation });
      if (res.data.success) {
        return res.data;
      } else {
        throw new Error(res.data.error || 'Error adding to wishlist');
      }
    },
    onSuccess: (data) => {
      dispatch(fetchWishlist())
      toast.success(data.message || 'Wishlist updated successfully');
      queryClient.invalidateQueries({
        queryKey: ['whishlist/all', 'whishlist'], // Adjust as needed
        exact: false, // Invalidate all queries starting with this key
      })    },
    onError: (error) => {
      toast.error(error.response?.data?.error || 'Error adding to wishlist');
    },
  });
};
