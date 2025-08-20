import SubEmployerCreateModal from '@/pages/employers-dashboard/subemployers/SubEmployerCreateModal';
import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

const ForwardCVModal = ({ 
  isOpen, 
  onClose, 
  subEmployers = [], 
  applicationid, 
  onForward ,SubEmployersLoading
}) => {
    
  const [selectedEmployers, setSelectedEmployers] = useState([]);
  const [notes, setNotes] = useState('');
  const [Subemplyer,setSubemployer]=useState(false)
  const handleEmployerSelect = (employerId) => {
    setSelectedEmployers((prev) =>
      prev.includes(employerId)
        ? prev.filter((id) => id !== employerId)
        : [...prev, employerId]
    );
  };

  const handleForward = () => {
    if (selectedEmployers.length === 0) {
      alert('Please select at least one sub-employer');
      return;
    }

    onForward(applicationid, selectedEmployers, notes);
    onClose();
  };

  return (
    <>
    <Modal show={isOpen} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Forward Candidate CV</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <h5>Select Sub-Employers</h5>
          <Row className="mb-3">
            {!SubEmployersLoading && subEmployers?.map((employer) => (
              <Col xs={12} md={6} key={employer._id} className="mb-2">
                <Form.Check
                  type="checkbox"
                  id={`employer-${employer._id}`}
                  label={employer.name}
                  checked={selectedEmployers.includes(employer._id)}
                  onChange={() => handleEmployerSelect(employer._id)}
                />
              </Col>
            ))}
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Additional Notes</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Add any additional notes for the sub-employers (optional)"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary " onClick={()=>setSubemployer(true)}>
          Add 
        </Button>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button 
          variant="primary" 
          onClick={handleForward} 
          disabled={selectedEmployers.length === 0}
        >
          Forward CV
        </Button>
      </Modal.Footer>
    </Modal>
   <SubEmployerCreateModal isOpen={Subemplyer} onClose={()=>setSubemployer(false)}/>
    </>
  );
};

export default ForwardCVModal;
