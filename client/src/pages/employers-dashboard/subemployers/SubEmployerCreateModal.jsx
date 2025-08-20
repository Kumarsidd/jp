import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useForm, Controller } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { SubemployerdashboardResources, AccessLevel } from '@/data/SubEmployerdashboardResources';
import useUserInfo from '@/utils/hooks/useUserInfo';
import { post } from '@/services/api';
import SubEMployerForm from './SubEMployerForm';
import { useState } from 'react';

const SubEmployerCreateModal = ({ isOpen, onClose }) => {
    const userInfo = useUserInfo();
    const queryClient = useQueryClient();
    const { control, handleSubmit, register, watch, formState: { errors } } = useForm({
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            password:"",
            department:"",
            // dashboardPermissions: SubemployerdashboardResources.reduce((acc, resource) => {
            //     acc[resource.resource] = Object.values(AccessLevel).reduce((permAcc, perm) => {
            //         permAcc[perm] = false; // Default all permissions to false
            //         return permAcc;
            //     }, {});
            //     return acc;
            // }, {})
        }
    });

    const createMutation = useMutation({
        mutationFn: async (data) => {
            const response = await post('sub-employers', data);
            return response.data;
        },
        onSuccess: () => {
            toast.success('Sub-employer created successfully');
            queryClient.invalidateQueries(['subEmployers','employer/getSubEmployers']);
            onClose();
        },
        onError: (error) => {
            console.error({ error });
            toast.error(error?.response?.data?.error);
        }
    });

    const onSubmit = (data) => {
        // Transform `dashboardPermissions` into a flat array
     

        createMutation.mutate({
            ...data,
            parentEmployerId: userInfo.employerId,
        });
    };

    return (
        <Modal show={isOpen} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Create Sub Employer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit(onSubmit)} method="post">
                  <SubEMployerForm control={control} register={register} errors={errors}/>

                    <Modal.Footer>
                        <Button variant="secondary"disabled={createMutation.isPending} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button
                            variant="primary"
                            type="submit"
                            disabled={createMutation.isPending}
                        >
                            {createMutation.isPending ? 'Creating...' : 'Create'}
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default SubEmployerCreateModal;
