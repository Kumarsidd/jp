import { Link, useNavigate } from "react-router-dom";
import { API_EMPLOYER_PATH } from "@/lib/config.js";
import { paths } from "@/services/paths.js";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter.js";
import { datePost } from "@/utils/datePost";
import { addToWishlist } from "@/store/reducers/Whishlist";
import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { useAddToWishlist } from "@/utils/hooks/useAddToWishlist";

const JobListingsTable = ({ data ,search, setSearch,handleSerch}) => {
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const { mutate: handleAddToWishlist } = useAddToWishlist();

  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>My Saved Jobs</h4>

        <div className="chosen-outer">
          {/* <select onChange={(e)=>handleSerch("createdAt",e.target.value)}  className="chosen-single">
          {
            datePost.map((item)=>(
              <option value={item.value}>{item.name}</option>
            ))
          }
          </select> */}
        </div>
      </div>
      {/* End filter top bar */}

      {/* Start table widget content */}
      <div className="widget-content">
        <div className="table-outer">
          <div className="table-outer">
            <table className="default-table manage-job-table">
              <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {data?.length > 0 && data.map((item) => {
                  return (
                    <tr key={item?._id}>
                      <td>
                        {/* <!-- Job Block --> */}
                        <div className="job-block">
                          <div className="inner-box">
                            <div className="content">
                              <span className="company-logo">
                                <img
                                  src={API_EMPLOYER_PATH + item?.employerId?.logo?.filename}
                                  alt="logo"
                                />
                              </span>
                              <h4>
                                <Link to={`${paths.job}/${item?._id}`}>{capitalizeFirstLetter(item?.title)}</Link>
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
                              </ul>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="status">Active</td>
                      <td>
                        <div className="option-box">
                          <ul className="option-list">
                            <li>
                              <button data-text="View Aplication" onClick={() => navigate(`${paths.job}/${item?._id}`)}>
                                <span className="la la-eye"></span>
                              </button>
                            </li>
                            <li>
                            <button  onClick={()=> handleAddToWishlist({ id:item?._id, operation:"remove" })} data-text="Delete Aplication">
                              <span className="la la-trash"></span>
                            </button>
                          </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* End table widget content */}
    </div>
  );
};

export default JobListingsTable;
