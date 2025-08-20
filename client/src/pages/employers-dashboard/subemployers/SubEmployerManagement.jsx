import React, { useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { subEmployerService } from '@/services/subemployerservice';
import { Button, Modal, Form, Table, Card, Row,Badge, Col, Alert } from 'react-bootstrap';
import { get, post, put } from '@/services/api';
import useUserInfo from '@/utils/hooks/useUserInfo';
import { SubemployerdashboardResources } from '@/data/SubEmployerdashboardResources';

const SubEmployerManagement = () => {
   const userInfo= useUserInfo()
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showPermissionsModal, setShowPermissionsModal] = useState(false);
    const [selectedSubEmployer, setSelectedSubEmployer] = useState(null);
    const [permissionsForm, setPermissionsForm] = useState({});
    const [error, setError] = useState(null);

    // Dashboard resources with detailed permissions
  

    // Fetch sub-employers query
    const { 
        data: subEmployers, 
        refetch, 
        isLoading, 
        isError 
    } = useQuery({
        queryKey: ['subEmployers'],
        queryFn: async()=>{
       try {
        let res=await get('sub-employers')
        return res?.data?.data;
       } catch (error) {
        //console.log(error)
       }
        },
        onError: (error) => setError(error?.message),
        enabled: !!userInfo?._id
    });

    // Create sub-employer mutation
    const createMutation = useMutation({
        mutationFn:async(data)=> {
            try {
              await  post('sub-employers', data)
            } catch (error) {
                //console.log(error)
            }
        },
        onSuccess: () => {
            refetch();
            setShowCreateModal(false);
            setError(null);
        },
        onError: (error) => setError(error?.message)
    });

    // Permission update mutation
    const updatePermissionsMutation = useMutation({
        mutationFn: async(id,data)=>{
            try {
                await put('sub-employers',id, data)
            } catch (error) {
                //console.log(error)
            }
        },
        onSuccess: () => {
            refetch();
            setShowPermissionsModal(false);
            setError(null);
        },
        onError: (error) => setError(error?.message)
    });

    const handleCreateSubEmployer = (formData) => {
        createMutation.mutate({
            ...formData,
            registrationType: 'employer',
            activationRequired: true
        });
    };

    const handleUpdatePermissions = (e) => {
        e.preventDefault();
        if (selectedSubEmployer) {
            updatePermissionsMutation.mutate({
                subEmployerId: selectedSubEmployer.id,
                permissions: permissionsForm
            });
        }
    };

    const renderCreateModal = () => (
        <Modal show={showCreateModal} onHide={() => setShowCreateModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Create Employer Account</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={(e) => {
                    e.preventDefault();
                    const formData = {
                        name: e.target.name.value,
                        email: e.target.email.value,
                        department: e.target.department.value
                    };
                    handleCreateSubEmployer(formData);
                }}>
                    <Form.Group className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" name="name" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Department</Form.Label>
                        <Form.Select name="department">
                            <option>HR</option>
                            <option>Technical</option>
                            <option>Sales</option>
                            <option>Marketing</option>
                        </Form.Select>
                    </Form.Group>
                    <Button type="submit" variant="primary" disabled={createMutation.isLoading}>
                        {createMutation.isLoading ? 'Creating...' : 'Create Employer Account'}
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );

    const renderPermissionsModal = () => (
        <Modal 
            show={showPermissionsModal} 
            onHide={() => setShowPermissionsModal(false)}
            size="xl"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Detailed Permissions for {selectedSubEmployer?.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleUpdatePermissions}>
                    {SubemployerdashboardResources.map((resource) => (
                        <Card key={resource.name} className="mb-4">
                            <Card.Header>
                                <h5 className="m-0">{resource.name}</h5>
                                <small className="text-muted">{resource.description}</small>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    {resource.permissions.map((perm) => (
                                        <Col key={`${resource.name}-${perm.key}`} md={6} lg={4} className="mb-3">
                                            <div className="d-flex align-items-center">
                                                <Form.Check 
                                                    type="checkbox"
                                                    id={`${resource.name}-${perm.key}`}
                                                    className="me-2"
                                                    checked={
                                                        permissionsForm[resource.name]?.[perm.key] || false
                                                    }
                                                    onChange={(e) => {
                                                        setPermissionsForm(prev => ({
                                                            ...prev,
                                                            [resource.name]: {
                                                                ...prev[resource.name],
                                                                [perm.key]: e.target.checked
                                                            }
                                                        }));
                                                    }}
                                                />
                                                <div>
                                                    <strong>{perm.label}</strong>
                                                    <br />
                                                    <small className="text-muted">{perm.description}</small>
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </Card.Body>
                        </Card>
                    ))}
                    <Button 
                        type="submit" 
                        variant="primary"
                        disabled={updatePermissionsMutation.isLoading}
                    >
                        {updatePermissionsMutation.isLoading 
                            ? 'Updating Permissions...' 
                            : 'Save Permissions'
                        }
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );

    if (isLoading) return <div>Loading employers...</div>;
    if (isError) return <div>Error loading employers</div>;

    return (
        <div>
            <Button 
                variant="primary" 
                onClick={() => setShowCreateModal(true)}
                className="mb-3"
            >
                Create Employer Account
            </Button>

            {error && <Alert variant="danger">{error}</Alert>}

            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {subEmployers?.map(employer => (
                        <tr key={employer.id}>
                            <td>{employer.name}</td>
                            <td>{employer.email}</td>
                            <td>{employer.department}</td>
                            <td>
                                {employer.isActivated 
                                    ? <Badge bg="success">Active</Badge>
                                    : <Badge bg="warning">Pending Activation</Badge>
                                }
                            </td>
                            <td>
                                <Button 
                                    variant="secondary"
                                    size="sm"
                                    onClick={() => {
                                        setSelectedSubEmployer(employer);
                                        setShowPermissionsModal(true);
                                    }}
                                    className="me-2"
                                >
                                    Manage Permissions
                                </Button>
                                {!employer.isActivated && (
                                    <Button 
                                        variant="outline-primary"
                                        size="sm"
                                        onClick={() => {
                                            // Trigger resend activation email
                                            subEmployerService.resendActivationEmail(employer.id);
                                        }}
                                    >
                                        Resend Activation
                                    </Button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {renderCreateModal()}
            {renderPermissionsModal()}
        </div>
    );
};

export default SubEmployerManagement;