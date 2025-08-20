import React from "react";
import { Modal, Button } from "react-bootstrap";

const BusinessPreviewModal = ({ previewData, setPreviewData }) => {
  const handleClose = () => setPreviewData(null);

  return (
    <Modal show={!!previewData} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Preview Data</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {previewData && (
          <div className="preview-content">
            <p>
              <strong>Business Name:</strong> {previewData.business_name}
            </p>
            <p>
              <strong>Name:</strong> {`${previewData.name.first} ${previewData.name.middle} ${previewData.name.last}`}
            </p>
            <p>
              <strong>Email:</strong> {previewData.email}
            </p>
            <p>
              <strong>GST Number:</strong> {previewData.business_gst}
            </p>
            <p>
              <strong>Job Sector:</strong>{" "}
              {previewData.categories?.map((item) => item?.label).join(", ")}
            </p>
            <p>
              <strong>Phone:</strong> ({previewData.phone_area}) {previewData.phone}
            </p>
            <p>
              <strong>Address:</strong>{" "}
              {`${previewData.address.lane1}, ${previewData.address.lane2}, ${previewData.address.city}, ${previewData.address.state}, ${previewData.address.pin_code}, ${previewData.address.country}`}
            </p>
            <p>
              <strong>Product/Services:</strong> {previewData.product_services}
            </p>
            <p>
              <strong>Website URL:</strong> {previewData.url}
            </p>
            <p>
              <strong>Year Established:</strong> {previewData.year_established}
            </p>
            <p>
              <strong>Keywords:</strong> {previewData.keywords}
            </p>
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

export default BusinessPreviewModal;
