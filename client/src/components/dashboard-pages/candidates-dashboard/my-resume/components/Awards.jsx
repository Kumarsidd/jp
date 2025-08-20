import { useEffect, useRef, useState } from "react";
import moment from "moment";

import AddAward from "./modals/Award/AddAward";
import EditAward from "./modals/Award/EditAward";

const Awards = ({ watch, register, setValue, error }) => {

  const [editIndex, setEditIndex] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const resumeAwardRef = useRef(null);

  const handleAwardFormSubmit = () => {
    const currentAward = watch("awards") || [];
    if (currentAward.length === 0 || isAwardEntryFilled(currentAward[currentAward.length - 1])) {
      const newAwardEntry = {
        award_name: '',
        start_date: new Date(),
        end_date: new Date(),
        description: ''
      };

      setValue("awards", [...currentAward, newAwardEntry]);
      setIsAdding(true);
    }
  }

  const isAwardEntryFilled = (entry) => {
    return entry.award_name !== '' && entry.description !== '' && entry.start_date && entry.end_date;
  }

  const handleDelete = (index) => {
    const data = [...watch("awards")];
    if (data[index]) {
      data.splice(index, 1);
      setValue("awards", data);
    }
  }

  const handleModalClose = () => {
    const currentAward = watch("awards") || [];
    const lastEntry = currentAward[currentAward.length - 1];
    if (!isAwardEntryFilled(lastEntry)) {
      handleDelete(currentAward.length - 1);
    }
    setIsAdding(false);
  }

  useEffect(() => {
    const currentAward = watch("awards") || [];
    // Keep the initial empty object if it exists
    const cleanedAward = currentAward.filter(isAwardEntryFilled).length > 0
      ? currentAward.filter(isAwardEntryFilled)
      : [{ award_name: '', start_date: new Date(), end_date: new Date(), description: '' }];
    setValue("awards", cleanedAward);
  }, []);

  useEffect(() => {
    const handleModalHidden = () => {
      if (isAdding) {
        handleModalClose();
      }
    };

    const modalElement = resumeAwardRef.current;
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
    <div className="resume-outer theme-yellow">
      <div className="upper-title">
        <h4 style={{ fontSize: "14px" }}>Awards <span className='required-form'>*</span></h4>
        <button
          className="add-info-btn"
          data-bs-toggle="modal"
          data-bs-target="#resumeAwardModal"
          onClick={() => handleAwardFormSubmit()}
        >
          <span className="icon flaticon-plus" /> Awards
        </button>
      </div>

      {/* View Educations */}
      <div className="resume-block">
        {watch("awards") && watch("awards").length > 0 && watch("awards").map((item, index) => {
          if (isAwardEntryFilled(item)) {
            return (
              <div className="inner" key={index}>
                <span className="name">{item.award_name[0].toUpperCase()}</span>
                <div className="title-box">
                  <div className="info-box">
                    <h3>{item.award_name}</h3>
                    <span></span>
                  </div>
                  <div className="edit-box">
                    <span className="year">{moment(item.start_date).year()} - {moment(item.end_date).year()}</span>
                    <div className="edit-btns">
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#resumeEditAwardModal"
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

      {/* Add Education Modal */}
      <div className="modal fade" id="resumeAwardModal" ref={resumeAwardRef}>
        <div className="modal-dialog modal-lg modal-dialog-centered educational-modal modal-dialog-scrollable">
          <div className="modal-content">
            <button
              type="button"
              className="closed-modal"
              data-bs-dismiss="modal"
            ></button>

            <div className="modal-body">
              <div id="login-modal">
                <AddAward watch={watch} register={register} setValue={setValue} error={error} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Education Modal */}
      <div className="modal fade" id="resumeEditAwardModal">
        <div className="modal-dialog modal-lg modal-dialog-centered educational-modal modal-dialog-scrollable">
          <div className="modal-content">
            <button
              type="button"
              className="closed-modal"
              data-bs-dismiss="modal"
            ></button>

            <div className="modal-body">
              <div id="login-modal">
                <EditAward watch={watch("awards")[editIndex]} register={register} setValue={setValue} error={error} index={editIndex} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Awards;
