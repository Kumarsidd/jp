import { API_CANDIDATE_PATH } from '@/lib/config'
import { paths } from '@/services/paths'
import { useAcceptApplication, useDeleteApplication } from '@/utils/hooks/useApplication';
import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import MeetingSchedule from '@/components/dashboard-pages/forward-resumes/components/MeetingSchadule';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import PermissionWrapper from '@/helpers/PermissionWrapper';
import { Badge } from 'react-bootstrap';

const CandidateCard = ({ item, search }) => {
    const { } = useSelector((state) => state.menu)
    const data = item.candidate ? item.candidate : {}
    const [createModalOpen, setCreateModalOpen] = useState(false);
    const navigate = useNavigate();
    const handlStatus = useAcceptApplication(search);
    const handleDelete = useDeleteApplication(search);
    const handleAccept = (id) => {
        setCreateModalOpen(id);
    };
    const handleDownload = async (fileUrl, filename) => {
        try {
            //console.log("fileurl",fileUrl)
            // Fetch the file data
            const response = await fetch(fileUrl);
            const blob = await response.blob(); // Get the file as a Blob

            // Create a temporary link element
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob); // Create an object URL for the Blob
            link.download = filename; // Set the filename for download

            // Append the link to the body, trigger the click, then remove the link
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            toast.info("Download failed");
        }
    };
    return (
        <>

            <div className="inner-box">
                <div className="content">
                    <figure className="image">
                        <img
                            src={API_CANDIDATE_PATH + item?.candidate?.profile?.filename}
                            alt="candidates"
                            onError={(e) => (e.target.src = "/images/resource/candidate.png")}
                        />
                    </figure>
                    <h4 className="name">
                        <Link to={`${paths.applicationid}/${item?._id}`}>
                            {item?.candidate?.name}
                        </Link>
                    </h4>
                    <div className="designation d-flex align-items-center">
                        <Link
                            to={`${paths.job}/${item?.job?._id}`}
                            className="d-flex align-items-center "
                        >
                            <span
                                className="la la-briefcase me-1"
                            ></span>
                            <span className="fw-semibold">
                                {item?.job?.title}
                            </span>
                        </Link>
                    </div>
                    <ul className="candidate-info">
                        <li className="designation ">
                            {item?.candidate?.designation || "Designation"}
                        </li>
                        <li>
                            <span className="icon flaticon-map-locator"></span>{" "}
                            {item?.candidate?.contact?.current_address?.country || "N/A"}
                        </li>
                        <li>
                            <span className="icon flaticon-money"></span>
                          {item?.candidate?.currentsalary?`₹${item?.candidate?.currentsalary} LPA`:"N/A"} 
                        </li>
                    </ul>
                    <ul className="post-tags">
                        {item?.candidate?.education?.slice(-1).map((val, i) => (
                            <li key={i}>
                                <a>{val.qualification}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="box1">
                    <ul className="option-list">
                        <PermissionWrapper key={"applications"} permission="view">
                            <li>
                                <button
                                    data-text="View Application"
                                    onClick={() => navigate(`${paths.applicationid}/${item?._id}`)}
                                >
                                    <span className="la la-eye"></span>
                                </button>
                            </li>
                        </PermissionWrapper>
                        <PermissionWrapper key={"applications"} permission="approve">
                            <li>
                                <button
                                    data-text="Approve Application"
                                    onClick={() => handlStatus(item?._id, "shortlisted")}
                                >
                                    <span className="la la-check"></span>
                                </button>
                            </li>
                        </PermissionWrapper>
                        <PermissionWrapper key={"applications"} permission="reject">
                            <li>
                                <button
                                    data-text="Reject Application"
                                    onClick={() => handlStatus(item?._id, "rejected")}
                                >
                                    <span className="la la-times-circle"></span>
                                </button>
                            </li>
                        </PermissionWrapper>
                        <PermissionWrapper key={"applications"} permission="download">
                            <li>
                                <button
                                    data-text="Download Cv"
                                    onClick={() =>
                                        handleDownload(
                                            API_CANDIDATE_PATH + item?.candidate?.cv?.filename,
                                            item?.candidate?.cv?.originalname
                                        )
                                    }
                                >
                                    <span className="la la-download"></span>
                                </button>
                            </li>
                        </PermissionWrapper>
                        <PermissionWrapper key={"applications"} permission="meeting">
                            <li>
                                <button
                                    data-text="Create Meeting "
                                    onClick={() => handleAccept({ ...data, applicationId: item?._id })}
                                >
                                    <span className="la la-plus"></span>
                                </button>
                            </li>
                        </PermissionWrapper>
                        <PermissionWrapper key={"applications"} permission="delete">
                            <li>
                                <button
                                    data-text="Delete Application"
                                    onClick={() => handleDelete(item?._id, item?.job?._id || item?.job)}
                                >
                                    <span className="la la-trash"></span>
                                </button>
                            </li>
                        </PermissionWrapper>
                    </ul>
                    {item?.selectedBy && (
                        <div style={{ paddingTop: "26px" }}>
                            <span className="text-capitalize badge bg-success by">
                                {item?.selectedBy}
                            </span>
                        </div>
                    )}
                </div>
                <br />
            </div>


            {createModalOpen && (
                <MeetingSchedule
                    isOpen={createModalOpen}
                    onClose={() => setCreateModalOpen(false)}
                />
            )}
        </>
    )
}

export default CandidateCard