import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import useUserInfo from '@/utils/hooks/useUserInfo';
import { post } from '@/services/api';
import DatePicker from '@/components/common/date-picker/DatePicker';
import { yupResolver } from '@hookform/resolvers/yup';
import { meetingSchema } from '@/validations/dashboard/subemployer/meetinglink';

const MeetingSchedule = ({ isOpen, onClose }) => {
    //console.log("isOpen",isOpen)
    const userInfo = useUserInfo();
    const queryClient = useQueryClient();
    
    const { register, handleSubmit, setValue,watch, formState: { errors } } = useForm({
        resolver:yupResolver(meetingSchema),
        defaultValues: {
            date: new Date(),
            time: "",
            timeDuration: "30",
            email:isOpen?.email,
            phone: "",
            message: "",
            meetingLink: "",
            address:"",
            applicationId:isOpen.applicationId
        }
    });

    const createMeetingMutation = useMutation({
        mutationFn: async (data) => {
            const response = await post('sub-employers/meetings', data);
            return response.data;
        },
        onSuccess: () => {
            toast.success('Meeting scheduled successfully');
            queryClient.invalidateQueries(['meetings']);
            onClose();
        },
        onError: (error) => {
            console.error({ error });
            toast.error(error?.response?.data?.error || 'Failed to schedule meeting');
        }
    });

    const generateTimeOptions = () => {
        const times = [];
        for (let hour = 0; hour < 24; hour++) {
            for (let minute = 0; minute < 60; minute += 15) {
                const hourFormatted = hour.toString().padStart(2, '0');
                const minuteFormatted = minute.toString().padStart(2, '0');
                const value = `${hourFormatted}:${minuteFormatted}`;
                const period = hour >= 12 ? 'pm' : 'am';
                const displayHour = hour % 12 || 12;
                const label = `${displayHour}:${minuteFormatted} ${period}`;
                times.push({ value, label });
            }
        }
        return times;
    };

    const onSubmit = (data) => {
        createMeetingMutation.mutate({
            ...data,
            parentEmployerId: userInfo.employerId,
        });
    };

    return (
        <Modal show={isOpen} onHide={onClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Schedule Meeting</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Date</Form.Label>
                        <div>
                            <DatePicker
                                id='meetingDate'
                                {...register('date')}
                                value={watch("date")}
                                isInvalid={!!errors.date}
                                onChange={(date) => setValue('date', date)}
                            />
                        </div>
                        {errors.date && (
                            <Form.Control.Feedback type="invalid" className="d-block">
                                {errors.date.message}
                            </Form.Control.Feedback>
                        )}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Time</Form.Label>
                        <Form.Select
                            {...register('time')}
                            isInvalid={!!errors.time}
                        >
                            <option value="">Select Time</option>
                            {generateTimeOptions().map(({ value, label }) => (
                                <option key={value} value={value}>
                                    {label}
                                </option>
                            ))}
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            {errors.time?.message}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Duration (minutes)</Form.Label>
                        <Form.Control
                            type="number"
                            min="15"
                            step="15"
                            {...register('timeDuration')}
                            isInvalid={!!errors.timeDuration}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.timeDuration?.message}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            {...register('email')}readOnly={false}
                            isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.email?.message}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            type="tel"
                            {...register('phone')}
                            isInvalid={!!errors.phone}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.phone?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Meeting Link</Form.Label>
                        <Form.Control
                            type="url"
                            placeholder="Paste your meeting link here"
                            {...register('meetingLink')}
                            isInvalid={!!errors.meetingLink}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.meetingLink?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            as={"textarea"}
                            placeholder="Complete Adddress"
                            {...register('address')}
                            isInvalid={!!errors.address}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.address?.message}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            {...register('message')}
                            isInvalid={!!errors.message}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.message?.message}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button
                            variant="primary"
                            type="submit"
                            disabled={createMeetingMutation.isLoading}
                        >
                            {createMeetingMutation.isLoading ? 'Scheduling...' : 'Schedule Meeting'}
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default MeetingSchedule;