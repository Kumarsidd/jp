import React, { useState, useEffect, useRef } from "react";
import moment from "moment";

import EducationForm from "./education-qualification/EducationForm";
import EditEducationForm from "./education-qualification/EditEducationForm";

const EducationalQualification = ({ watch, register, setValue, error }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const educationModalRef = useRef(null);

  useEffect(() => {
    const currentEducation = watch("education") || [];
    // Keep the initial empty object if it exists
    const cleanedEducation = currentEducation.filter(isEducationEntryFilled).length > 0
      ? currentEducation.filter(isEducationEntryFilled)
      : [{ name: '',  to: new Date(), qualification: '', }];
    setValue("education", cleanedEducation);
  }, []);

  useEffect(() => {
    const handleModalHidden = () => {
      if (isAdding) {
        handleModalClose();
      }
    };

    const modalElement = educationModalRef.current;
    if (modalElement) {
      modalElement.addEventListener('hidden.bs.modal', handleModalHidden);
    }

    return () => {
      if (modalElement) {
        modalElement.removeEventListener('hidden.bs.modal', handleModalHidden);
      }
    };
  }, [isAdding]);

  const handleEducationFormSubmit = () => {
    const currentEducation = watch("education") || [];
    if (currentEducation.length === 0 || isEducationEntryFilled(currentEducation[currentEducation.length - 1])) {
      const newEducationEntry = {
        name: '',
        to: new Date(),
        qualification: '',
      };

      setValue("education", [...currentEducation, newEducationEntry]);
      setIsAdding(true);
    }
  }

  const isEducationEntryFilled = (entry) => {
    return entry.name !== '' && entry.qualification !== '' && entry.to;
  }

  const handleDeleteModal = (index) => {
    const data = [...watch("education")];
    if (data[index]) {
      data.splice(index, 1);
      setValue("education", data);
    }
  }

  const handleModalClose = () => {
    const currentEducation = watch("education") || [];
    const lastEntry = currentEducation[currentEducation.length - 1];
    if (!isEducationEntryFilled(lastEntry)) {
      handleDeleteModal(currentEducation.length - 1);
    }
    setIsAdding(false);
  }

  return (
    <div className="default-form" style={{ paddingBottom: "30px" }}>
      <div className="row">
        <div className="row">
          {watch("education") && watch("education").length > 0 && watch("education").map((item, index) => {
            if (isEducationEntryFilled(item)) {
              return (
                <div key={index} className="row mb-2" >
                  <div className="col-lg-1">
                    <img src="https://static.licdn.com/aero-v1/sc/h/8zzzkhxduv0r11cuxbs48pg03" alt="education" />
                  </div>
                  <div className="col-lg-9">
                    <h5>{item.name}</h5>
                    <p className="mb-0">{item.qualification}</p>
                    <p className="mb-0">{moment(item.to).year()}</p>
                  </div>
                  <div className="col-lg-2 text-end">
                    <span
                      role="button"
                      data-bs-toggle="modal"
                      data-bs-target="#editEducationModal"
                      className="education-edit"
                      onClick={() => setEditIndex(index)}
                    >
                      Edit
                    </span>
                    <span
                      role="button"
                      className="education-delete ps-4"
                      onClick={() => handleDeleteModal(index)}
                    >
                      Delete
                    </span>
                  </div>
                </div>
              )
            }
            return null;
          })}
        </div>

        <div className='form-group col-lg-12 col-md-12'>
          <div
            style={{ width: 'inherit' }}
            className="theme-btn btn-style-three"
            data-bs-toggle="modal"
            data-bs-target="#educationModal"
            onClick={handleEducationFormSubmit}
          >
            Add Details
          </div>
        </div>

        <div className="modal fade" id="educationModal" ref={educationModalRef}>
          <div className="modal-dialog modal-lg modal-dialog-centered educational-modal modal-dialog-scrollable">
            <div className="modal-content">
              <button
                type="button"
                className="closed-modal"
                data-bs-dismiss="modal"
              ></button>

              <div className="modal-body">
                <div id="login-modal">
                  <EducationForm watch={watch} register={register} setValue={setValue} error={error} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="editEducationModal">
          <div className="modal-dialog modal-lg modal-dialog-centered educational-modal modal-dialog-scrollable">
            <div className="modal-content">
              <button
                type="button"
                className="closed-modal"
                data-bs-dismiss="modal"
              ></button>

              <div className="modal-body">
                <div id="login-modal">
                  <EditEducationForm
                    watch={watch("education")[editIndex]}
                    register={register}
                    setValue={setValue}
                    error={error}
                    index={editIndex}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='form-group col-lg-12 col-md-12' style={{ marginBottom: '0px' }}>
          {/* {error?.education?.slice(0, 1).map(item =>
          <span className="error error-border" key={item?.certificate?.message}>
          {`${item?.certificate?.message || ''}, ${item?.name?.message || ''}, ${item?.qualification?.message || ''}!`}
        </span>
        
          )} */}
        </div>
      </div>
    </div>
  );
};

export default EducationalQualification;