import { useEffect, useRef, useState } from "react";
import moment from "moment";

import AddEducation from "./modals/Education/AddEducation";
import EditEducation from "./modals/Education/EditEducation";

const Education = ({ watch, register, setValue, error }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const resumeEducationModalRef = useRef(null);

  const handleEducationFormSubmit = () => {
    const currentEducation = watch("educations") || [];
    if (currentEducation.length === 0 || isEducationEntryFilled(currentEducation[currentEducation.length - 1])) {
      const newEducationEntry = {
        degree: '',
        university: '',
        start_date: new Date(),
        end_date: new Date(),
        description: ''
      };

      setValue("educations", [...currentEducation, newEducationEntry]);
      setIsAdding(true);
    }
  }

  const isEducationEntryFilled = (entry) => {
    return entry.degree !== '' && entry.university !== '' && entry.description !== '' && entry.start_date && entry.end_date;
  }

  const handleDelete = (index) => {
    const data = [...watch("educations")];
    if (data[index]) {
      data.splice(index, 1);
      setValue("educations", data);
    }
  }

  const handleModalClose = () => {
    const currentEducation = watch("educations") || [];
    const lastEntry = currentEducation[currentEducation.length - 1];
    if (!isEducationEntryFilled(lastEntry)) {
      handleDelete(currentEducation.length - 1);
    }
    setIsAdding(false);
  }

  useEffect(() => {
    const currentEducation = watch("educations") || [];
    // Keep the initial empty object if it exists
    const cleanedEducation = currentEducation.filter(isEducationEntryFilled).length > 0
      ? currentEducation.filter(isEducationEntryFilled)
      : [{ degree: '', start_date: new Date(), end_date: new Date(), university: '', description: '' }];
    setValue("educations", cleanedEducation);
  }, []);

  useEffect(() => {
    const handleModalHidden = () => {
      if (isAdding) {
        handleModalClose();
      }
    };

    const modalElement = resumeEducationModalRef.current;
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
    <div className="resume-outer">
      <div className="upper-title">
        <h4 style={{ fontSize: "15px" }}>Education<span className='required-form'>*</span></h4>
        <div
          className="add-info-btn"
          role="button"
          data-bs-toggle="modal"
          data-bs-target="#resumeEducationModal"
          onClick={() => handleEducationFormSubmit()}
        >
          <span className="icon flaticon-plus" />
          Add Education
        </div>
      </div>

      {/* View Educations */}
      <div className="resume-block">
        {watch("educations") && watch("educations").length > 0 && watch("educations").map((item, index) => {
          if (isEducationEntryFilled(item)) {
            return (
              <div className="inner" key={index}>
                <span className="name">{item.university[0].toUpperCase()}</span>
                <div className="title-box">
                  <div className="info-box">
                    <h3>{item.degree}</h3>
                    <span>{item.university}</span>
                  </div>
                  <div className="edit-box">
                    <span className="year">{moment(item.start_date).year()} - {moment(item.end_date).year()}</span>
                    <div className="edit-btns">
                      <div
                        role="button"
                        data-bs-toggle="modal"
                        data-bs-target="#resumeEditEducationModal"
                        onClick={() => setEditIndex(index)}
                      >
                        <span className="la la-pencil" />
                      </div>
                      <div role="button" onClick={() => handleDelete(index)}>
                        <span className="la la-trash" />
                      </div>
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

      {/* Add Education Modal */}
      <div className="modal fade" id="resumeEducationModal" ref={resumeEducationModalRef}>
        <div className="modal-dialog modal-lg modal-dialog-centered educational-modal modal-dialog-scrollable">
          <div className="modal-content">
            <div
              role="button"
              className="closed-modal"
              data-bs-dismiss="modal"
            ></div>

            <div className="modal-body">
              <div id="login-modal">
                <AddEducation watch={watch} register={register} setValue={setValue} error={error} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Education Modal */}
      <div className="modal fade" id="resumeEditEducationModal">
        <div className="modal-dialog modal-lg modal-dialog-centered educational-modal modal-dialog-scrollable">
          <div className="modal-content">
            <button
              type="button"
              className="closed-modal"
              data-bs-dismiss="modal"
            ></button>

            <div className="modal-body">
              <div id="login-modal">
                <EditEducation watch={watch("educations")[editIndex]} register={register} setValue={setValue} error={error} index={editIndex} />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Education;
