import React from 'react';
import { Button, Modal, Form, Table, Card, Row,Badge, Col, Alert } from 'react-bootstrap';
import { useForm, Controller } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { subEmployerService } from '@/services/subemployerservice';
import SubEMployerForm from './SubEMployerForm';
import { put } from '@/services/api';
import { useEffect } from 'react';

const SubEmployerEditModal = ({ subEmployer, isOpen, onClose }) => {
    console.log("subemployer",subEmployer)
    const queryClient = useQueryClient();
    const { control, handleSubmit, register,reset, formState: { errors } } = useForm({
        defaultValues: {
            name: subEmployer?.name | "",
            email: subEmployer?.email | "",
            phone: subEmployer?.phone | "",
            department:subEmployer?.department || ""
            // dashboardPermissions: subEmployer.dashboardPermissions.map(p => p.resource)
        }
    });
     // Update form values when subEmployer changes
     React.useEffect(() => {
        if (subEmployer) {
            reset({
                name: subEmployer.name || "",
                email: subEmployer.email || "",
                phone: subEmployer.phone || "",
                department: subEmployer.department || ""
            });
        }
    }, [subEmployer, reset]);
    // Update sub-employer mutation
    const updateMutation = useMutation({
        mutationFn: (data) => put("sub-employers",subEmployer._id, data),
        onSuccess: () => {
            toast.success('Sub-employer updated successfully');
            queryClient.invalidateQueries(['sub-employers']);
            onClose();
        },
        onError: (error) => {
            // toast.error('Failed to update sub-employer');
            console.error(error);
            toast.error(error?.response?.data?.error);

        }
    });

    const onSubmit = (data) => {
        updateMutation.mutate(data);
    };

    return (
        <Modal show={isOpen} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Sub Employer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                <SubEMployerForm control={control} register={register} errors={errors} isEdit={true}/>
                    <Modal.Footer>
                        <Button variant="secondary"  disabled={updateMutation.isPending} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button
                         disabled={updateMutation.isPending}
                        variant="primary" type="submit">
                     {updateMutation.isPending ? 'Updaing...' : 'Update'}
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default SubEmployerEditModal;