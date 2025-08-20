import React from "react";
import { Modal, Button } from "react-bootstrap";

const MeetingLinkView = ({ isOpen, onClose, data }) => {
  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Meeting Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {data ? (
          <div>
            <p><strong>Date:</strong> {data.date ?new Date(data.date).toDateString():"N/A"}</p>
            <p><strong>Time:</strong> {data.time || "N/A"}</p>
            <p><strong>Email:</strong> {data.email || "N/A"}</p>
            <p><strong>Phone:</strong> {data.phone || "N/A"}</p>
            <p><strong>Message:</strong> {data.message || "N/A"}</p>
            <p><strong>Candidate Attendance</strong>{data?.intrviewConfirmation?.confirm ?"Yes":"No"}</p>
            <p><strong>Candidate Reply</strong>{data?.intrviewConfirmation?.message || "N/A"}</p>
            {
              data.meetingLink  &&
            <p>
              <strong>Meeting Link:</strong>{" "}
              <a href={data.meetingLink} target="_blank" rel="noopener noreferrer">
                {data.meetingLink}
              </a>
            </p>
            }
          </div>
        ) : (
          <p>No data available.</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MeetingLinkView;
