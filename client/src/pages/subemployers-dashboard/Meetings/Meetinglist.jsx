import React, { useState, Suspense } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import MeetingLinkView from "./MeetingLinkView";
import { del, get } from "@/services/api";
import useUserInfo from "@/utils/hooks/useUserInfo";
import { useParams } from "react-router-dom";
import MeetingSchedule from "./MeetingSchadule";

const MeetingList = () => {
  const [open, setOpen] = useState(false);
  const [selectedMeeting, setSelectedMeeting] = useState(null);
  const { createdBy = "" } = useParams();
      const [createModalOpen, setCreateModalOpen] = useState(false);

  const queryClient = useQueryClient();
  const userInfo = useUserInfo();

  // Fetch meeting links
  const { data: meetings, isLoading } = useQuery({
    queryKey: ["meetinglinks", createdBy, userInfo?._id],
    queryFn: async () => {
      try {
        const res = await get(`sub-employers/meetings?createdBy=${createdBy}`);
        return res.data.data;
      } catch (error) {
        toast.error("Failed to fetch meetings.");
        throw error;
      }
    },
    enabled: Boolean(createdBy),
  });

  // Delete meeting mutation
  const deleteMutation = useMutation({
    mutationFn: (id) => del("sub-employers/meetings", id),
    onSuccess: () => {
      toast.success("Meeting deleted successfully.");
      queryClient.invalidateQueries(["meetinglinks"]);
    },
    onError: (error) => {
      toast.error(error.response?.data?.error || "An error occurred");
    },
  });

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this meeting?")) {
      deleteMutation.mutate(id);
    }
  };

  const handleView = (meeting) => {
    setSelectedMeeting(meeting);
    setOpen(true);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="row">
        <div className="col-lg-12">
          <div className="ls-widget">
            {/* Start table widget content */}
            <div className="widget-content">
              <div className="table-outer">
                <table className="default-table manage-job-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Message</th>
                      <th>Candidate Attendance</th>
                      <th>Candidate Reply</th>
                      <th>Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {meetings?.length > 0 &&
                      meetings.map((item, index) => (
                        <tr key={index}>
                          <td>
                            {item?.meeting?.date ?new Intl.DateTimeFormat("en-US", {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            }).format(new Date(item?.meeting?.date)):"N/A"}{" "}
                            <br />
                          </td>
                          <td>{item?.meeting?.time || "N/A"}</td>
                          <td>{item?.meeting?.email || "N/A"}</td>
                          <td>{item?.meeting?.phone || "N/A"}</td>
                          <td>{item?.meeting?.message || "N/A"}</td>
                          <td>{item?.meeting?.intrviewConfirmation?.confirm ?"Yes":"No"}</td>
                          <td>{item?.meeting?.intrviewConfirmation?.message || "N/A"}</td>
                          <td>
                            <div className="option-box">
                              <ul className="option-list">
                                <li>
                                  <button
                                    data-text="View"
                                    onClick={() => handleView(item.meeting)}
                                  >
                                    <span className="la la-eye"></span>
                                  </button>
                                </li>
                                <li>
                                  <button
                                    data-text="Reschdule Meeting"
                                    onClick={() => setCreateModalOpen({...item.candidate,applicationId:item._id})}
                                  >
                                    <span className="la la fa-calendar"></span>
                                  </button>
                                </li>
                                <li>
                                  <button
                                    data-text="Delete "
                                    onClick={() => handleDelete(item?._id)}
                                  >
                                    <span className="la la-trash"></span>
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* End table widget content */}
          </div>
        </div>
      </div>
      {open && (
        <MeetingLinkView
          isOpen={open}
          onClose={() => setOpen(false)}
          data={selectedMeeting}
        />
      )}
       {createModalOpen && (
                <MeetingSchedule
                    isOpen={createModalOpen}
                    onClose={() => setCreateModalOpen(false)}
                />
            )}
    </Suspense>
  );
};

export default MeetingList;
