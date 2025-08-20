import { Link, useNavigate } from "react-router-dom";
import { API_EMPLOYER_PATH } from "@/lib/config.js";
import { paths } from "@/services/paths.js";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter.js";
import {
  Table,
  Button,
  Modal,
  Alert,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { useState } from "react";
import { InterviewDetails } from "./InterviewDetailsModal";
import { Eye, CalendarClock, MapPin, Building2 } from "lucide-react";
import { toast } from "react-toastify";

const JobListingsTable = ({ data, search, setSearch, handleSerch }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedInterview, setSelectedInterview] = useState(null);

  const handleShowInterview = (interview) => {
    setSelectedInterview(interview);
    setShowModal(true);
  };
  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>My Shortlisted Jobs</h4>

        {/* <div className="chosen-outer">
          <select onChange={(e)=>handleSerch("createdAt",e.target.value)}  className="chosen-single">
          {
            datePost.map((item)=>(
              <option value={item.value}>{item.name}</option>
            ))
          }
          </select>
        </div> */}
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
                  <th>Date Applied</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {data?.length > 0 &&
                  data.map((item) => {
                    return (
                      <tr key={item?._id}>
                        <td>
                          {/* <!-- Job Block --> */}
                          <div className="job-block">
                            <div className="inner-box">
                              <div className="content">
                                <span className="company-logo">
                                  <img
                                    src={
                                      API_EMPLOYER_PATH +
                                      item?.job?.employerId?.logo?.filename
                                    }
                                    alt="logo"
                                  />
                                </span>
                                <h4>
                                  <Link to={`${paths.job}/${item?.job?._id}`}>
                                    {capitalizeFirstLetter(item?.job?.title)}
                                  </Link>
                                </h4>
                                <ul className="job-info">
                                  <li>
                                    <span className="icon flaticon-briefcase"></span>
                                    {item?.job?.employerId?.business_name}{" "}
                                  </li>
                                  <li>
                                    <span className="icon flaticon-map-locator"></span>
                                    {item?.job?.location}
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>{new Date(item?.createdAt).toDateString()}</td>

                        <td className="status">Active</td>
                        <td>
                          <div className="option-box">
                            <ul className="option-list">
                              <li>
                                <button
                                  data-text="View Aplication"
                                  onClick={() =>
                                    navigate(`${paths.job}/${item?.job?._id}`)
                                  }
                                >
                                  <span className="la la-eye"></span>
                                </button>
                              </li>
                              <li>
                                {item?.meeting ? (
                                   <button
                                   data-text="Interview details"
                                   onClick={() => handleShowInterview(item)}
                                 >
                                  <span
                                  
                                     className="la la fa-calendar"     
                                   
                                  />
                                  </button>
                                ) : (
                                  <button
                                  data-text="Interview details"
                                  onClick={() =>toast.info("Meetings Or Interview Not Schaduled yet")}
                                >
                                  <span
                                  className="la la fa-calendar"     

                                    onClick={() =>
                                      toast.info("no interview schaduled")
                                    }
                                  />
                                  </button>
                                )}
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* End table widget content */}
      {/* modal  */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Interview Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InterviewDetails item={selectedInterview} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* end Modal */}
    </div>
  );
};

export default JobListingsTable;
{
  /* <li>
<button data-text="Delete Aplication">
  <span className="la la-trash"></span>
</button>
</li> */
}
