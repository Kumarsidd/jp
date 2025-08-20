import React, { useState } from 'react';
import { Eye, CalendarClock, MapPin, Building2 } from "lucide-react";
import { Table, Button, Modal, Alert, Container, Row, Col, Form } from 'react-bootstrap';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { put } from '@/services/api';
import { paths } from '@/services/paths';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

export const InterviewDetails = ({ item }) => {
  const queryClient = useQueryClient();
  const [showModal, setShowModal] = useState(false); // Modal state

  const { register, handleSubmit, watch, formState: { errors }, setValue, reset } = useForm({
    defaultValues: {
      intrviewConfirmation: {
        message:item?.meeting?.intrviewConfirmation?.message || "",
        confirm: Boolean(item?.meeting?.intrviewConfirmation?.confirm) || false
      }
    }
  });

  const mutation = useMutation({
    mutationFn: (data) => put(`/application/interviewconfirmation`, item?._id, data),
    onSuccess: (res) => {
      if (res.data.success) {
        toast.success(res.data.message);
        queryClient.invalidateQueries([`appliedJobs`]);
        setShowModal(false);
        reset(); // Clear form after success
      }
    },
    onError: (err) => {
      console.log(err)
      toast.error(err.response?.data?.error || "An error occurred");
    }
    
  });
   
  const handleRegisterSubmit = async (data) => {
    if (!data.intrviewConfirmation.confirm) {
      toast.warn("Please confirm your attendance before submitting.");
      return;
    }
    setShowModal(true); // Show confirmation modal
  };

  const handleModalSubmit = () => {
    try {
      const data = {
        intrviewConfirmation: {
          message: watch('intrviewConfirmation.message'),
          confirm: watch('intrviewConfirmation.confirm')
        }
      };
      mutation.mutate(data);
    } catch (error) {
      console.log(error)
    }
  };

  if (!item) return null;

  return (
    <Container>
      {/* Interview Details */}
      <Row className="mb-3">
        <Col className="d-flex align-items-center">
          <CalendarClock className="me-2" size={16} />
          <span>Date: {new Date(item?.meeting?.date).toLocaleString()}</span>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col className="d-flex align-items-center">
          <MapPin className="me-2" size={16} />
          <span>Time: {item?.meeting?.time}</span>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col className="d-flex align-items-center">
          <MapPin className="me-2" size={16} />
          <span>Duration: {item?.meeting?.timeDuration}</span>
        </Col>
      </Row>
        <Row className="mt-3">
          <Col>
            <h6>Additional Notes:</h6>
            <p className="text-muted">{item?.meeting?.message}</p>
          </Col>
        </Row>
    

      {/* Confirmation and Message Form */}
      <Form onSubmit={handleSubmit(handleRegisterSubmit)} className="mt-4">
        <Form.Group className="mb-3">
          <Form.Check 
            type="checkbox" 
            label="I confirm my attendance for this job." 
            {...register("intrviewConfirmation.confirm")}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Additional Message</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            placeholder="Add any additional message here..."
            {...register("intrviewConfirmation.message")}
          />
        </Form.Group>

        <Button type="submit" variant="primary" disabled={mutation.isLoading}>
          {mutation.isLoading ? "Submitting..." : "Submit Confirmation"}
        </Button>
      </Form>

      {/* Confirmation Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Submission</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to confirm your attendance with the provided message?</p>
          <p><strong>Message:</strong> {watch('intrviewConfirmation.message')}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={handleModalSubmit} disabled={mutation.isLoading}>
            {mutation.isLoading ? "Submitting..." : "Confirm"}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};
