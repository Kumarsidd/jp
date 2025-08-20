import React, { useState, useEffect, useRef } from 'react'
import ReferenceList from './reference/ReferenceList'
import EditReferenceList from './reference/EditReferenceList';

const Reference = ({ watch, register, setValue, error }) => {
    const [editIndex, setEditIndex] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const referenceModalRef = useRef(null);

    useEffect(() => {
        const currentReferences = watch("references") || [];
        const cleanedReferences = currentReferences.filter(isReferenceEntryFilled).length > 0
            ? currentReferences.filter(isReferenceEntryFilled)
            : [{ name: '', email: '', phone: '', note: '' }];
        setValue("references", cleanedReferences);
    }, []);

    useEffect(() => {
        const handleModalHidden = () => {
            if (isAdding) {
                handleModalClose();
            }
        };

        const modalElement = referenceModalRef.current;
        if (modalElement) {
            modalElement.addEventListener('hidden.bs.modal', handleModalHidden);
        }

        return () => {
            if (modalElement) {
                modalElement.removeEventListener('hidden.bs.modal', handleModalHidden);
            }
        };
    }, [isAdding]);

    const handleReferenceFormSubmit = () => {
        const currentReferences = watch("references") || [];
        if (currentReferences.length === 0 || isReferenceEntryFilled(currentReferences[currentReferences.length - 1])) {
            const newReferenceEntry = {
                name: '',
                email: '',
                phone: '',
                note: ''
            };

            setValue("references", [...currentReferences, newReferenceEntry]);
            setIsAdding(true);
        }
    }

    const isReferenceEntryFilled = (entry) => {
        return entry.name !== '' && entry.email !== '' && entry.phone !== '' && entry.note !== '';
    }

    const handleDeleteReference = (index) => {
        const data = [...watch("references")];
        if (data[index]) {
            data.splice(index, 1);
            setValue("references", data);
        }
    }

    const handleModalClose = () => {
        const currentReferences = watch("references") || [];
        const lastEntry = currentReferences[currentReferences.length - 1];
        if (!isReferenceEntryFilled(lastEntry)) {
            handleDeleteReference(currentReferences.length - 1);
        }
        setIsAdding(false);
    }

    return (
        <div className="default-form" style={{ paddingBottom: "30px" }}>
            <div className="row">
                <div className='form-group col-lg-12 col-md-12 mt-2'>

                    {watch("references") && watch("references").length > 0 && watch("references").map((item, index) => {
                        if (isReferenceEntryFilled(item)) {
                            return (

                                <React.Fragment key={item.name + index}>
                                    <h5 className='mb-2'>Please List your references</h5>
                                    <table className="table table-bordered" >
                                        <thead>
                                            <tr>
                                                <th scope="col">No.</th>
                                                <th scope="col">Reference Name</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Phone Number</th>
                                                <th scope="col">Notes</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">{index + 1}</th>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.note}</td>
                                                <td>
                                                    <span
                                                        role='button'
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#editReferenceList"
                                                        className="education-edit"
                                                        onClick={() => setEditIndex(index)}
                                                    >
                                                        Edit
                                                    </span>
                                                    <span
                                                        role='button'
                                                        className="education-delete ps-4"
                                                        onClick={() => handleDeleteReference(index)}
                                                    >
                                                        Delete
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </React.Fragment>
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
                        data-bs-target="#referenceList"
                        onClick={handleReferenceFormSubmit}
                    >
                        Add Reference
                    </div>
                </div>
            </div>
            <div className="modal fade" id="referenceList" ref={referenceModalRef}>
                <div className="modal-dialog modal-lg modal-dialog-centered educational-modal modal-dialog-scrollable">
                    <div className="modal-content">
                        <button
                            type="button"
                            className="closed-modal"
                            data-bs-dismiss="modal"
                        ></button>

                        <div className="modal-body">
                            <div id="login-modal">
                                <ReferenceList watch={watch} register={register} setValue={setValue} error={error} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="editReferenceList">
                <div className="modal-dialog modal-lg modal-dialog-centered educational-modal modal-dialog-scrollable">
                    <div className="modal-content">
                        <button
                            type="button"
                            className="closed-modal"
                            data-bs-dismiss="modal"
                        ></button>

                        <div className="modal-body">
                            <div id="login-modal">
                                <EditReferenceList
                                    watch={watch("references")[editIndex]}
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
                {error?.references?.slice(0, 1).map(item =>
                    <span className="error error-border" key={item?.email?.message}>
                        {item?.name?.message + ', ' + item?.email?.message + ', ' + item?.phone?.message + ', ' + item?.note?.message + "!"}
                    </span>
                )}
            </div>
        </div>
    )
}

export default Reference