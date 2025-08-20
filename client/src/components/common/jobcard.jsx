import { API_EMPLOYER_PATH } from "@/lib/config";
import { put } from "@/services/api";
import { paths } from "@/services/paths";
import {
  addToWishlist,
  fetchWishlist,
  selectWishlist,
  selectWishlistLoading,
} from "@/store/reducers/Whishlist";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import useUserInfo from "@/utils/hooks/useUserInfo";
import { useWhishlist } from "@/utils/hooks/useWhishlist";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export const JobCard = ({ item }) => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const userInfo = useUserInfo();
  const SavedJobs = useSelector(selectWishlist);
  const isLoading = useSelector(selectWishlistLoading);

  const handleWishist = async (id, operation) => {
    if (!userInfo._id) {
      toast.info("Please login as Candidate to Save Job.");
      return;
    }
    if (id && operation) {
      dispatch(addToWishlist({ id, operation }));
    }
  };

  // Handle Job Apply Logic
  const mutation = useMutation({
    mutationFn: () => put(`application/apply`, item?._id),
    onSuccess: (res) => {
      queryClient.invalidateQueries(["jobs"]);

      if (res.data.success) {
        toast.success(res.data.message);
      }
    },
    onError: (err) => {
      console.log(err)
      toast.error(err.response?.data?.error || "Failed to apply for the job.");
    },
  });

  const handleJobApply = () => {
    if (!userInfo._id) {
      toast.info("Please login as Candidate to Apply for Job.");
      return;
    }
    mutation.mutate();
  };

  return (
    <div className="inner-box">
      <div className="content">
        <span className="company-logo">
          <img
            src={API_EMPLOYER_PATH + item?.employerId?.logo?.filename}
            alt="item brand"
            onError={(e) => e.target.src = "/images/pharma.webp"}

          />
        </span>
        <h4>
          <Link to={`${paths.job}/${item?._id}`}>
            {capitalizeFirstLetter(item?.title)}
          </Link>
        </h4>

        <ul className="job-info">
          <li>
            <span className="icon flaticon-briefcase"></span>
            {item?.employerId?.business_name}
          </li>
          <li>
            <span className="icon flaticon-map-locator"></span>
            {item?.location}
          </li>
          {/* <li>
              <span className="icon flaticon-clock-3"></span>
              {item?.timing?.job}
            </li> */}
          <li>
            <span className="icon flaticon-money"></span>₹
            {item?.candidate_requirement?.salary_from} - ₹
            {item?.candidate_requirement?.salary_to}
          </li>
        </ul>

        <ul className="job-other-info">
          {item?.candidate_requirement?.skills?.map((val, i) => (
            <li key={i} className={`required`}>
              {val.label}
            </li>
          ))}
        </ul>
        {!isLoading && (
          <button
            className={`bookmark-btn ${SavedJobs.includes(item?._id) ? "disable" : ""}`}
            type="button"
            onClick={() =>
              handleWishist(
                item?._id,
                SavedJobs.includes(item?._id) ? "remove" : "add"
              )
            }
          >
            <span className="flaticon-bookmark"></span>
          </button>
        )}
        <button
          className={`theme-btn apply-btn ${item?.isApplied ? "disabled" : ""}`}
          disabled={item?.isApplied}
          onClick={handleJobApply}
        >
          {item?.isApplied ? "Applied" : "Apply"}
        </button>
      </div>
    </div>
  );
};
