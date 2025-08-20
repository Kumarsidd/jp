import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { get, post } from "@/services/api";
import { toast } from "react-toastify";
import { useState } from "react";
import useUserInfo from "./useUserInfo";

// Fetch and manage wishlist
function useWhishlist() {
  const userInfo = useUserInfo();
  const [SavedJobs, setSavedJobs] = useState([]);

  // Fetch wishlist data
  const { isLoading, refetch } = useQuery({
    queryKey: ['whishlist'],  // Ensure consistent spelling 'whishlist'
    queryFn: async () => {
      try {
        const res = (await get('/whishlist')).data.data;
        //console.log({ res });
        if (Array.isArray(res)) {
          setSavedJobs(res);
        }
        return res;
      } catch (error) {
        //console.log(error);
        if (error.response?.data?.error === 'Failed to find cv!') {
          toast.info('Please fill the information to get going!');
        }
        setSavedJobs([]);
        return [];
      }
    },
    enabled: !!userInfo._id, // Only fetch if the user is logged in
  });

  // Mutation to add to wishlist
  const mutation = useMutation({
    mutationFn: (data) => post('/whishlist', data),
    onSuccess: (res) => {
      if (res.data.success) {
        toast.success(res.data.message);
        // Manually refetch after successful mutation
        refetch();
      }
    },
    onError: (err) => {
      toast.error(err.response?.data?.error || 'Error adding to wishlist');
    }
  });

  // Function to handle adding to wishlist
  const handleWishist = async (id, operation) => {
    if (!userInfo._id) {
      toast.info('Please login as Candidate to Save Job.');
      return;
    }
    if (id && operation) {
      await mutation.mutate({ id, operation });
    }
  };

  return { SavedJobs, handleWishist, isLoading };
}

export { useWhishlist };
