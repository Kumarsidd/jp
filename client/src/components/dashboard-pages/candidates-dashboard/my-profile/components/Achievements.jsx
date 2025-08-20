import React, { useState } from 'react';
import { useFieldArray, Controller } from 'react-hook-form';
import { Modal, Button } from 'react-bootstrap';
import "./achievements.css";

const yearsArray = Array.from({ length: new Date().getFullYear() - 1901 + 1 }, (_, i) => 1901 + i);

const Achievements = ({ watch, register, setValue, error, control }) => {
    const [showModal, setShowModal] = useState(false);  // Modal state to control visibility
    const [editIndex, setEditIndex] = useState(null);  // Store the index of the item to be edited
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'achievement', // The name must match your form structure
    });

    const handleModalClose = () => setShowModal(false);
    const handleModalShow = (index) => {
        setEditIndex(index);  // Set the index to edit
        setShowModal(true);
    };

    const handleAddOrEditAchievement = (data) => {
        if (editIndex !== null) {
            // Editing existing achievement
            setValue(`achievement.${editIndex}.year`, data.year);
            setValue(`achievement.${editIndex}.description`, data.description);
        } else {
            // Adding new achievement
            append({ year: data.year, description: data.description });
        }
        handleModalClose();  // Close modal after add or edit
    };

    return (
        <div className="achievements-container">
            {/* Display the list of achievements */}
            <div className="default-form" style={{ paddingBottom: "30px" }}>
                <div className="row">
                    {watch("achievement") && watch("achievement").length > 0 && watch("achievement").map((item, index) => {
                        return (
                            <div key={index} className="row mb-2">
                                <div className="col-lg-1">
                                    <img src="https://static.licdn.com/aero-v1/sc/h/8zzzkhxduv0r11cuxbs48pg03" alt="achievement" />
                                </div>
                                <div className="col-lg-9">
                                    <h5>{item.year}</h5>
                                    <p className="mb-0">{item.description}</p>
                                </div>
                                <div className="col-lg-2 text-end">
                                    <span
                                        role="button"
                                        className="education-edit"
                                        onClick={() => handleModalShow(index)}  // Show the modal with the achievement data for editing
                                    >
                                        Edit
                                    </span>
                                    <span
                                        role="button"
                                        className="education-delete ps-4"
                                        onClick={() => remove(index)}  // Remove achievement from the list
                                    >
                                        Delete
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Button to add a new achievement */}
            <div
                className="theme-btn btn-style-three"
                onClick={() => handleModalShow(null)}  // Show modal for adding new achievement
            >
                Add Achievement
            </div>

            {/* Modal for adding and editing achievement */}
            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{editIndex !== null ? 'Edit Achievement' : 'Add Achievement'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        const data = {
                            year: e.target.year.value,
                            description: e.target.description.value
                        };
                        handleAddOrEditAchievement(data);
                    }}>
                        <div className="form-group">
                            <label>Year of Achievement</label>
                            <select
                                className="form-control"
                                defaultValue={editIndex !== null ? watch(`achievement.${editIndex}.year`) : ''}
                                {...register('year')}
                            >
                                <option hidden>Select Year of Achievement</option>
                                {yearsArray.map((year) => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <textarea
                                className="form-control"
                                rows="4"
                                defaultValue={editIndex !== null ? watch(`achievement.${editIndex}.description`) : ''}
                                {...register('description')}
                                placeholder="Enter achievement description"
                            />
                        </div>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleModalClose}>Close</Button>
                            <Button variant="primary" type="submit">{editIndex !== null ? 'Save Changes' : 'Add Achievement'}</Button>
                        </Modal.Footer>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Achievements;
