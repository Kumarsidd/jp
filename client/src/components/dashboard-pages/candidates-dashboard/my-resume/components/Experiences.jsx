import { useEffect, useRef, useState } from "react";
import moment from "moment";

import AddWorkExp from "./modals/WorkExperience/AddWorkExp";
import EditWorkExp from "./modals/WorkExperience/EditWorkExp";

const Experiences = ({ watch, register, setValue, error }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const resumeWorkExpRef = useRef(null);

  const handleWorkExpFormSubmit = () => {
    const currentWorkExp = watch("work_experiences") || [];
    if (currentWorkExp.length === 0 || isWorkExpEntryFilled(currentWorkExp[currentWorkExp.length - 1])) {
      const newWorkExpEntry = {
        position: '',
        company_name: '',
        start_date: new Date(),
        end_date: new Date(),
        description: ''
      };

      setValue("work_experiences", [...currentWorkExp, newWorkExpEntry]);
      setIsAdding(true);
    }
  }

  const isWorkExpEntryFilled = (entry) => {
    return entry.position !== '' && entry.company_name !== '' && entry.description !== '' && entry.start_date && entry.end_date;
  }

  const handleDelete = (index) => {
    const data = [...watch("work_experiences")];
    if (data[index]) {
      data.splice(index, 1);
      setValue("work_experiences", data);
    }
  }

  const handleModalClose = () => {
    const currentWorkExp = watch("work_experiences") || [];
    const lastEntry = currentWorkExp[currentWorkExp.length - 1];
    if (!isWorkExpEntryFilled(lastEntry)) {
      handleDelete(currentWorkExp.length - 1);
    }
    setIsAdding(false);
  }

  useEffect(() => {
    const currentWorkExp = watch("work_experiences") || [];
    // Keep the initial empty object if it exists
    const cleanedWorkExp = currentWorkExp.filter(isWorkExpEntryFilled).length > 0
      ? currentWorkExp.filter(isWorkExpEntryFilled)
      : [{ position: '', company_name: '', start_date: new Date(), end_date: new Date(), description: '' }];
    setValue("work_experiences", cleanedWorkExp);
  }, []);

  useEffect(() => {
    const handleModalHidden = () => {
      if (isAdding) {
        handleModalClose();
      }
    };

    const modalElement = resumeWorkExpRef.current;
    if (modalElement) {
      modalElement.addEventListener('hidden.bs.modal', handleModalHidden);
    }

    return () => {
      if (modalElement) {
        modalElement.removeEventListener('hidden.bs.modal', handleModalHidden);
      }
    };
  }, [isAdding]);

  return (
    <div className="resume-outer theme-blue">
      <div className="upper-title">
        <h4 style={{ fontSize: "15px" }}>Work & Experience <span className='required-form'>*</span></h4>
        <button
          className="add-info-btn"
          data-bs-toggle="modal"
            type="button"
          data-bs-target="#resumeWorkExpModal"
          onClick={() => handleWorkExpFormSubmit()}
        >
          <span className="icon flaticon-plus" /> Add Work
        </button>
      </div>

      {/* View WorkExp */}
      <div className="resume-block">
        {watch("work_experiences") && watch("work_experiences").length > 0 && watch("work_experiences").map((item, index) => {
          if (isWorkExpEntryFilled(item)) {
            return (
              <div className="inner" key={index}>
                <span className="name">{item.company_name[0].toUpperCase()}</span>
                <div className="title-box">
                  <div className="info-box">
                    <h3>{item.position}</h3>
                    <span>{item.company_name}</span>
                  </div>
                  <div className="edit-box">
                    <span className="year">{moment(item.start_date).year()} - {moment(item.end_date).year()}</span>
                    <div className="edit-btns">
                      <button
                        data-bs-toggle="modal"
                        type="button"
                        data-bs-target="#resumeEditWorkExpModal"
                        onClick={() => setEditIndex(index)}
                      >
                        <span className="la la-pencil" />
                      </button>
                      <button onClick={() => handleDelete(index)}>
                        <span className="la la-trash" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text">
                  {item.description}
                </div>
              </div>
            )
          }
          return null;
        })}
      </div>

      {/* Add WorkExp Modal */}
      <div className="modal fade" id="resumeWorkExpModal" ref={resumeWorkExpRef}>
        <div className="modal-dialog modal-lg modal-dialog-centered educational-modal modal-dialog-scrollable">
          <div className="modal-content">
            <button
              type="button"
              className="closed-modal"
              data-bs-dismiss="modal"
            ></button>

            <div className="modal-body">
              <div id="login-modal">
                <AddWorkExp watch={watch} register={register} setValue={setValue} error={error} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit WorkExp Modal */}
      <div className="modal fade" id="resumeEditWorkExpModal">
        <div className="modal-dialog modal-lg modal-dialog-centered educational-modal modal-dialog-scrollable">
          <div className="modal-content">
            <button
              type="button"
              className="closed-modal"
              data-bs-dismiss="modal"
            ></button>

            <div className="modal-body">
              <div id="login-modal">
                <EditWorkExp watch={watch("work_experiences")[editIndex]} register={register} setValue={setValue} error={error} index={editIndex} />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Experiences;
