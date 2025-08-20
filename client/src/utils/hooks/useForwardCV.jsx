import { useState } from 'react';
import { toast } from 'react-toastify';
import { post } from '@/services/api';
import { useNavigate } from 'react-router-dom';
import { paths } from '@/services/paths';
import useUserInfo from './useUserInfo';
const useForwardCV = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const userInfo=useUserInfo()
  const handleForwardCV = async (candidateId, subEmployerIds, notes = '') => {
    // Validate inputs
    if (!candidateId) {
      toast.error('Candidate ID is required');
      return false;
    }

    if (!subEmployerIds || subEmployerIds.length === 0) {
      toast.error('Please select at least one sub-employer to forward the CV');
      return false;
    }

    try {
      setIsLoading(true);

      // Prepare payload for forwarding CV
      const payload = {
        applicationid:candidateId,
        subEmployerIds,
        notes
      };
      const userId = userInfo?.userTypeValue?._id;


      // Make API call to forward CV
      if(!userId){
        toast.info("Please Login First")
      }
      const response = await post('/employer/forwardcv', payload);

      // Check API response
      if (response.data.success) {
        toast.success(response.data.message || 'CV forwarded successfully');
        
        // Optional: Navigate to manage jobs page or any other appropriate page
        navigate(paths.shotlistesumes+userId);

        return true;
      } else {
        // Handle any specific error from the backend
        toast.error(response.data.message || 'Failed to forward CV');
        return false;
      }
    } catch (error) {
      // Handle network or unexpected errors
      console.error('CV Forwarding Error:', error);
      toast.error(
        error.response?.data?.error || 
        'An error occurred while forwarding the CV'
      );
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { handleForwardCV, isLoading };
};

export default useForwardCV;