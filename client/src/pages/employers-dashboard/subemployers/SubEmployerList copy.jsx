import React, { useState, Suspense } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import SubEmployerCreateModal from "./SubEmployerCreateModal";
import SubEmployerEditModal from "./SubEmployerEditModal";
import useUserInfo from "@/utils/hooks/useUserInfo";
import { del, get, put } from "@/services/api";
import { Table, Button, Badge } from 'react-bootstrap';
import { Pencil, Trash2, ToggleLeft, ToggleRight, Link2 } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const SubEmployerList = () => {
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [editSubEmployer, setEditSubEmployer] = useState(null);

  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const userInfo = useUserInfo();

  // Fetch sub-employers
  const { data: subEmployers, isLoading } = useQuery({
    queryKey: ["subemployer"],
    queryFn: async () => {
      try {
        const res = await get("sub-employers");
        return res.data.data;
      } catch (error) {
        if (error.response?.data?.error === "Failed to find resume") {
          toast.info("Please fill the information to get going!");
        }
      }
    },
    enabled: Boolean(userInfo?._id),
  });

  // Deactivate sub-employer mutation
  const UpdateMutation = useMutation({
    mutationFn: ({ id, isActive }) => put("sub-employers/activate", id, { isActive }),
    onSuccess: (data) => {
      toast.success(data?.message);
      queryClient.invalidateQueries(["subemployer"]);
    },
    onError: (error) => {
      toast.error(error?.response?.data?.error || "An error occurred");
    },
  });

  // Delete sub-employer mutation
  const DeleteMutation = useMutation({
    mutationFn: (id) => del("sub-employers", id),
    onSuccess: () => {
      toast.success(`Sub-employer Deleted successfully`);
      queryClient.invalidateQueries(["subemployer"]);
    },
    onError: (error) => {
      toast.error(error?.response?.data?.error || "An error occurred");
    },
  });

  // Handlers
  const handleUpdate = ({ id, isActive }) => {
    if (window.confirm("Are you sure you want to change this sub-employer's status?")) {
      UpdateMutation.mutate({ id, isActive });
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this sub-employer?")) {
      DeleteMutation.mutate(id);
    }
  };

  const handleEdit = (subEmployer) => {
    setEditSubEmployer(subEmployer);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="row">
        <div className="col-lg-12">
          <div className="ls-widget">
            <div className="tabs-box">
              <div className="widget-title">
                <div className="chosen-outer">
                  <button
                    onClick={() => setCreateModalOpen(true)}
                    className="btn btn-primary mb-3"
                  >
                    Add Sub Employer
                  </button>
                </div>
              </div>

              <div className="widget-content">
                <div className="table-outer">
                  <Table sclassName=" default-table manage-job-table">
                    <thead className="thead-light">
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {subEmployers?.map((subEmployer) => (
                        <tr key={subEmployer._id}>
                          <td>{subEmployer.name}</td>
                          <td>{subEmployer.email}</td>
                          <td>{subEmployer.phone}</td>
                          <td>
                            <Badge 
                              variant={subEmployer?.userId?.isActive ? "success" : "danger"}
                            >
                              {subEmployer?.userId?.isActive ? "Active" : "Inactive"}
                            </Badge>
                          </td>
                          <td>
                            <div className="d-flex justify-content-center align-items-center">
                              {/* Meeting Links Button */}
                              <Button 
                                variant="outline-primary" 
                                size="sm" 
                                className="me-2"
                                onClick={() => navigate(`/employers-dashboard/meetinglinks/${subEmployer.userId?._id}`)}
                              >
                                <Link2 size={16} />
                              </Button>
                              
                              {/* Edit Button */}
                              <Button 
                                variant="outline-primary" 
                                size="sm" 
                                className="me-2"
                                onClick={() => handleEdit(subEmployer)}
                              >
                                <Pencil size={16} />
                              </Button>
                              
                              {/* Delete Button */}
                              <Button 
                                variant="outline-danger" 
                                size="sm" 
                                className="me-2"
                                onClick={() => handleDelete(subEmployer?._id)}
                              >
                                <Trash2 size={16} />
                              </Button>
                              
                              {/* Activate/Deactivate Button */}
                              <Button 
                                variant={subEmployer?.userId?.isActive ? "outline-danger" : "outline-success"}
                                size="sm"
                                onClick={() => handleUpdate({
                                  id: subEmployer?._id,
                                  isActive: !subEmployer?.userId?.isActive
                                })}
                              >
                                {subEmployer?.userId?.isActive ? (
                                  <ToggleLeft size={16} />
                                ) : (
                                  <ToggleRight size={16} />
                                )}
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {createModalOpen && (
        <SubEmployerCreateModal
          isOpen={createModalOpen}
          onClose={() => setCreateModalOpen(false)}
        />
      )}

      {editSubEmployer && (
        <SubEmployerEditModal
          subEmployer={editSubEmployer}
          isOpen={!!editSubEmployer}
          onClose={() => setEditSubEmployer(null)}
        />
      )}
    </Suspense>
  );
};

export default SubEmployerList;
