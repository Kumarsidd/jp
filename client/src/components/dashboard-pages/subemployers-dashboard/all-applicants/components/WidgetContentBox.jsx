import candidatesData from "../../../../../data/candidates";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link, useNavigate } from "react-router-dom";
import { paths } from "@/services/paths";
import { API_CANDIDATE_PATH } from "@/lib/config";
import { useAcceptApplication, useDeleteApplication } from "@/utils/hooks/useApplication";

const WidgetContentBox = ({ data, title }) => {
  //console.log("data????", data);

  const navigate = useNavigate();

  const handleAccept = useAcceptApplication()
  const handleDelete = useDeleteApplication()

  

  // Check if data exists and has candidates, otherwise return loading or error
 

  return (
    <div className="widget-content">
      <div className="tabs-box">
       
        <Tabs>
          <div className="aplicants-upper-bar">
            <h6>{title}</h6>
            <TabList className="aplicantion-status tab-buttons clearfix">
              <Tab className="tab-btn totals">Total(s): {data?.stats?.totals?.total || 0}</Tab>
              <Tab className="tab-btn approved">Approved: {data?.stats?.approved?.total || 0}</Tab>
              <Tab className="tab-btn rejected">Rejected(s): {data?.stats?.rejected?.total || 0}</Tab>
            </TabList>
          </div>
        
          <div className="tabs-content">
            <TabPanel>
              {
                !data ||!data.data || data.data.length === 0?(<p>No candidates found.</p>):(
                  <div className="row">
                  {data?.data.map(({_id, candidate,resume,job }) => (
                    <div
                      className="candidate-block-three col-lg-6 col-md-12 col-sm-12"
                      key={candidate?._id}
                    >
                      <div className="inner-box">
                        <div className="content">
                          <figure className="image">
                            <img
                              src={API_CANDIDATE_PATH + candidate?.profile?.filename}
                              alt="candidates"
                            />
                          </figure>
                          <h4 className="name">
                            <Link to={`${paths.applicationid}/${_id}`}>
                              {candidate?.name}
                            </Link>
                          </h4>
                            <div className="designation mr-5">
                                          <Link to={`${paths.job}/${job?._id}`}>
                                          <span className="la la-briefcase"></span>
                                            {job?.title}
                                          </Link>
                                        </div>
                          <ul className="candidate-info">
                            <li className="designation">
                              {candidate?.designation || "Designation"}
                            </li>
                            <li>
                              <span className="icon flaticon-map-locator"></span>{" "}
                              {candidate?.contact?.current_address?.country}
                            </li>
                            <li>
                              <span className="icon flaticon-money"></span>
                              ₹{candidate?.currentsalary || " "} LPA
                              </li>
                          </ul>
  
                          <ul className="post-tags">
                            {candidate?.education?.map((val, i) => (
                              <li key={i}>
                                <a>{val.qualification}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
  
                        <div className="option-box">
                          <ul className="option-list">
                            <li>
                              <button data-text="View Application" onClick={() => navigate(`${paths.applicationid}/${_id}`)}>
                                <span className="la la-eye"></span>
                              </button>
                            </li>
                            <li>
                              <button data-text="Approve Application" onClick={() => handleAccept(_id,'shortlisted')}>
                                <span className="la la-check"></span>
                              </button>
                            </li>
                            <li>
                              <button data-text="Reject Application" onClick={() => handleAccept(_id,"rejected")}>
                                <span className="la la-times-circle"></span>
                              </button>
                            </li>
                            <li>
                            <button data-text="Delete Application" onClick={() => handleDelete(_id,job)}>
                              <span className="la la-trash"></span>
                            </button>
                          </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                )
              }
             
            </TabPanel>
            {/* Repeat for other TabPanels with similar checks */}
          </div>
        </Tabs>
      </div>
    </div>
  );
};


export default WidgetContentBox;
