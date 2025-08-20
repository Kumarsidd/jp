import React from "react";
import { Modal, Button, Table } from "react-bootstrap";

const PreviewOriginalDataModal = ({ previewData, setPreviewData }) => {
  const handleClose = () => setPreviewData(null);

  return (
    <Modal show={!!previewData} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Preview Your Data</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {previewData && (
          <div className="preview-section">
            {/* Personal Details */}
            <h5>Personal Details</h5>
            <Table bordered>
              <tbody>
                <tr>
                  <td>
                    <strong>Full Name:</strong>
                  </td>
                  <td>
                    {`${previewData.myProfile.candidate_name.title} ${previewData.myProfile.candidate_name.first} ${previewData.myProfile.candidate_name.middle} ${previewData.myProfile.candidate_name.last}`}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Gender:</strong>
                  </td>
                  <td>{previewData.myProfile.gender}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Date of Birth:</strong>
                  </td>
                  <td>
                    {new Date(previewData.myProfile.dob).toLocaleDateString()}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Designation:</strong>
                  </td>
                  <td>{previewData.myProfile.designation}</td>
                </tr>
              </tbody>
            </Table>

            {/* Contact Information */}
            <h5>Contact Information</h5>
            <Table bordered>
              <tbody>
                <tr>
                  <td>
                    <strong>Email:</strong>
                  </td>
                  <td>{previewData.contact.email}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Phone:</strong>
                  </td>
                  <td>{previewData.contact.phone}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Permanent Address:</strong>
                  </td>
                  <td>
                    {Object.values(previewData.contact.permanent_address)
                      .filter(Boolean)
                      .join(", ")}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Current Address:</strong>
                  </td>
                  <td>
                    {Object.values(previewData.contact.current_address)
                      .filter(Boolean)
                      .join(", ")}
                  </td>
                </tr>
              </tbody>
            </Table>

            {/* Education */}
            <h5>Education</h5>
            <Table bordered>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name of Institution</th>
                  <th>Qualification</th>
                  <th>Passing Year                  </th>
                </tr>
              </thead>
              <tbody>
                {previewData.education.map((edu, idx) => (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{edu.name}</td>
                    <td>{edu.qualification}</td>
                    <td>{new Date(edu.to).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </Table>

            {/* Employment */}
            <h5>Employment</h5>
            <Table bordered>
              <thead>
                <tr>
                  <th>#</th>
                  <th scope="col">Company Name</th>
                  <th scope="col">Position</th>
                  <th scope="col">Department</th>
                  <th scope="col">Job Sector</th>
                  <th scope="col">Scope To Work</th>
                  <th scope="col">From Date</th>
                  <th scope="col">Till Date</th>
                </tr>
              </thead>
              <tbody>
                {previewData.employment.map((item, idx) => (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.position}</td>
                    <td>{item.department}</td>
                    <td>
                      {item?.categories?.map((item) => item.label).join(",")}
                    </td>
                    <td>{item.scope}</td>
                    <td>{new Date(item.from).toDateString()}</td>
                    <td>{new Date(item.to).toDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </Table>

            {/* References */}
            <h5>References</h5>
            <Table bordered>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Note</th>
                </tr>
              </thead>
              <tbody>
                {previewData.references.map((ref, idx) => (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{ref.name}</td>
                    <td>{ref.email}</td>
                    <td>{ref.phone}</td>
                    <td>{ref.note}</td>
                  </tr>
                ))}
              </tbody>
            </Table>

            {/* Achievements */}
            <h5>Achievements</h5>
            <Table bordered>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Year</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {previewData.achievement.map((ach, idx) => (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{ach.year}</td>
                    <td>{ach.description}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
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

export default PreviewOriginalDataModal;
