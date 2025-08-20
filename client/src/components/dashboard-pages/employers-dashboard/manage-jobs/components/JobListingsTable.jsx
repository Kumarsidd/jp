import { Link, useNavigate } from "react-router-dom";
import jobs from "../../../../../data/job-featured.js";
import { paths } from "@/services/paths.js";
import { API_EMPLOYER_PATH } from "@/lib/config.js";
import { datePost } from "@/utils/datePost.js";
import SearchBox from "./SearchBox.jsx";
import Categories from "./Categories.jsx";
import { jobTypeList } from "@/utils/jobTypeList.js";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { del } from "@/services/api.js";
import { toast } from "react-toastify";
import useUserInfo from "@/utils/hooks/useUserInfo.jsx";
import JobType from "./JobType.jsx";
import { DateFilter } from "./DateFilter.jsx";

const JobListingsTable = ({ data, handleChange, search ,handleClear}) => {
  const queryClient = useQueryClient();
  const userInfo = useUserInfo();

  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (data) => del("job", data._id),
    onSuccess: (res) => {
      if (res.data.success) {
        toast.success(res.data.message);
        queryClient.invalidateQueries(["jobs", userInfo._id]);
      }
    },
    onError: (err) => {
      toast.error(err.response.data.error);
    },
  });

  const handleJobDelete = (data) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      mutation.mutate({ _id: data });
    }
  };
  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>My Job Listings</h4>

        <div className="chosen-outer">
          <SearchBox {...{ handleChange, search }} />
          <Categories {...{ handleChange, search }} />
          <JobType {...{ handleChange, search }} />
          <DateFilter {...{ handleChange, search }} />
           <button
                  className="btn bg-danger chosen-single chosen-container text-white"
                  onClick={handleClear}
                >
                  Clear All
                </button>
        </div>
      </div>
      {/* End filter top bar */}

      {/* Start table widget content */}
      <div className="widget-content">
        <div className="table-outer">
          <table className="default-table manage-job-table">
            <thead>
              <tr>
                <th>Information</th>
                <th>Applications</th>
                <th>Created </th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {data?.length > 0 &&
                data.map((item, index) => (
                  <tr key={item._id}>
                    <td>
                      {/* <!-- Job Block --> */}
                      <div className="job-block">
                        <div className="inner-box">
                          <div className="content">
                            <span className="company-logo">
                              <img
                                src={
                                  API_EMPLOYER_PATH +
                                  item?.employerId?.logo?.filename
                                }
                                alt="logo"
                              />
                            </span>
                            <h4>
                              <Link to={`${paths.job}/${item._id}`}>
                                {item.title}
                              </Link>
                            </h4>
                            <ul className="job-info">
                              <li>
                                <span className="icon flaticon-money"></span>
                                {item?.candidate_requirement?.salary_from && item?.candidate_requirement?.salary_to ?   `₹
                                ${item?.candidate_requirement?.salary_from} - ₹
                                ${item?.candidate_requirement?.salary_to}`:"Not Disclosed" }
                             
                              </li>
                              <li>
                                <span className="icon flaticon-briefcase"></span>
                                {item?.employerId?.business_name}
                              </li>
                              <li>
                                <span className="icon flaticon-map-locator"></span>
                                {item.location} , {item.place}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="applied">
                      <Link
                        to={paths.employer_all_applicants + "?id=" + item._id}
                      >
                        {item?.applications?.length || 0} Applied
                      </Link>
                    </td>
                    <td>
                      {new Intl.DateTimeFormat("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      }).format(new Date(item.createdAt))}{" "}
                      <br />
                    </td>
                    <td className="status">
                      {item.isActive ? "Active" : "Inactive"}
                    </td>
                    <td>
                      <div className="option-box">
                        <ul className="option-list">
                          <li>
                            <button
                              data-text="View"
                              onClick={() =>
                                navigate(`${paths.job}/${item._id}`)
                              }
                            >
                              <span className="la la-eye"></span>
                            </button>
                          </li>
                          <li>
                            <button
                              data-text="Edit"
                              onClick={() =>
                                navigate(`${paths.edit_job}/${item._id}`)
                              }
                            >
                              <span className="la la-pencil"></span>
                            </button>
                          </li>
                          <li>
                            <button
                              data-text="Delete "
                              onClick={() => handleJobDelete(item._id)}
                            >
                              <span className="la la-trash"></span>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* End table widget content */}
    </div>
  );
};

export default JobListingsTable;
