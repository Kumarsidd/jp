import DatePicker from '@/components/common/date-picker/DatePicker'
import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'

const InterviewDetails = ({ watch, register, setValue, error }) => {
  return (
    <>
     <div className="default-form">
           <div className='row'>

      <div className='form-group col-lg-6 col-md-6'>
        <Form.Group>
          <Form.Label>Interview Date<span className="required-form">*</span></Form.Label>
          <DatePicker
        id={'interview_details_date'}
        className={`${error?.interview_details?.date?.message ? 'error' : ''}`}

        value={watch("interview_details.date")}
        onChange={(date) => setValue("interview_details.date", date)}
      />
        </Form.Group>
      </div>
      <div className='form-group col-lg-6 col-md-6'>
        <Form.Group>
          <Form.Label>Interview Time<span className="required-form">*</span></Form.Label>
          <Form.Control 
            type="time" 
            className={`${error?.interview_details?.time?.message ? 'error' : ''}`}
            {...register("interview_details.time")}
          />
        </Form.Group>
      </div>
  
      <div className='form-group col-lg-6 col-md-6'>
        <Form.Group>
          <Form.Label>Interview Location<span className="required-form">*</span></Form.Label>
          <Form.Control 
            type="text" 
            className={`${error?.interview_details?.location?.message ? 'error' : ''}`}
            {...register("interview_details.location")}
            placeholder="Enter interview location or meeting link"
          />
        </Form.Group>
      </div>
    

      <div className='form-group col-lg-6 col-md-6'>
        <Form.Group>
          <Form.Label>Interview Type<span className="required-form">*</span></Form.Label>
          <Form.Select 
            className={`${error?.interview_details?.type?.message ? 'error' : ''}`}
            {...register("interview_details.type")}
          >
            <option value="" hidden>Select Interview Type</option>
            <option value="in_person">In Person</option>
            <option value="online">Online/Virtual</option>
            <option value="phone">Phone Interview</option>
          </Form.Select>
        </Form.Group>
      </div>
    

      <div className='form-group col-lg-12 col-md-12'>
        <Form.Group>
          <Form.Label>Additional Notes</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3}
            className={`${error?.interview_details?.notes?.message ? 'error' : ''}`}
            {...register("interview_details.notes")}
            placeholder="Enter any additional information for candidates (dress code, documents required, etc.)"
          />
        </Form.Group>
      </div>
           </div>
        </div>
  </>
  )
}

export default InterviewDetails