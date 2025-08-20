import React from "react";
import { Modal, Button } from "react-bootstrap";

const PreviewModal = ({ previewData, setPreviewData }) => {
  const handleClose = () => setPreviewData(null);

  return (
    <Modal show={!!previewData} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Preview Job Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {previewData && (
          <div className="preview-content">
            <section>
              <h5>Job Information</h5>
              <p><strong>Title:</strong> {previewData?.title}</p>
              <p><strong>Location:</strong> {previewData?.location}</p>
              <p><strong>Place:</strong> {previewData?.place}</p>
              <p><strong>Job Sector:</strong> {previewData?.categories?.map((item=>item.label)).join(", ") || "N/A"}</p>
              <p><strong>Opening:</strong> {previewData?.opening}</p>
              <p><strong>Job Type:</strong> {previewData?.jobtype || "N/A"}</p>
            </section>

            <section>
              <h5>Candidate Requirements</h5>
              <p><strong>Experience:</strong> {previewData?.candidate_requirement?.experience || "N/A"}</p>
              <p><strong>Salary From:</strong> {previewData?.candidate_requirement?.salary_from || "N/A"}</p>
              <p><strong>Salary To:</strong> {previewData?.candidate_requirement?.salary_to || "N/A"}</p>
              <p><strong>Bonus:</strong> {previewData?.candidate_requirement?.bonus ? "Yes" : "No"}</p>
              <p><strong>Job Info:</strong>
              <div dangerouslySetInnerHTML={{__html: previewData?.candidate_requirement?.job_info || ""} }></div>
              </p>
              <p><strong>Skills:</strong> {previewData?.candidate_requirement?.skills?.map((item=>item.label)).join(", ") || "N/A"}</p>
            </section>

            <section>
              <h5>Personal Details</h5>
              {previewData?.personal_info?.length > 0 ? (
                previewData?.personal_info.map((info, index) => (
                  <div key={index} className="personal-info-block mb-3">
                    <p><strong>Info:</strong> {info.info || "N/A"}</p>
                    <p><strong>Assets:</strong> {info.assets?.map((item=>item.label)).join(", ") || "N/A"}</p>
                  </div>
                ))
              ) : (
                <p>No personal details provided.</p>
              )}
            </section>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PreviewModal;
