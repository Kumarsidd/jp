import React, { useState, useEffect, useRef } from "react";
import EmploymentForm from './employment-detail/EmploymentForm'
import EditEmploymentForm from './employment-detail/EditEmploymentForm';

const EmploymentDetail = ({ watch, register, setValue, error ,control}) => {
    const [editIndex, setEditIndex] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const employmentModalRef = useRef(null);

    useEffect(() => {
        const currentEmployment = watch("employment") || [];
        const cleanedEmployment = currentEmployment.filter(isEmploymentEntryFilled).length > 0
            ? currentEmployment.filter(isEmploymentEntryFilled)
            : [{ 
                name: '',
                position: '',
                department: '',
                categories:[],
                scope:"",
                from: new Date(),
                to: new Date(),
            }];
        setValue("employment", cleanedEmployment);
    }, []);

    useEffect(() => {
        const handleModalHidden = () => {
            if (isAdding) {
                handleModalClose();
            }
        };

        const modalElement = employmentModalRef.current;
        if (modalElement) {
            modalElement.addEventListener('hidden.bs.modal', handleModalHidden);
        }

        return () => {
            if (modalElement) {
                modalElement.removeEventListener('hidden.bs.modal', handleModalHidden);
            }
        };
    }, [isAdding]);

    const handleEmploymentFormSubmit = () => {
        const currentEmployment = watch("employment") || [];
        if (currentEmployment.length === 0 || isEmploymentEntryFilled(currentEmployment[currentEmployment.length - 1])) {
            const newEmploymentEntry = {
                name: '',
                position: '',
                department: '',
                categories:[],
                scope:"",
                from: new Date(),
                to: new Date(),
            };

            setValue("employment", [...currentEmployment, newEmploymentEntry]);
            setIsAdding(true);
        }
    }

    const isEmploymentEntryFilled = (entry) => {
        return entry.name !== '' && entry.position !== ''&& entry.scope !== '' && entry.department !== '';
    }

    const handleDeleteEmployment = (index) => {
        const data = [...watch("employment")];
        if (data[index]) {
            data.splice(index, 1);
            setValue("employment", data);
        }
    }

    const handleModalClose = () => {
        const currentEmployment = watch("employment") || [];
        const lastEntry = currentEmployment[currentEmployment.length - 1];
        if (!isEmploymentEntryFilled(lastEntry)) {
            handleDeleteEmployment(currentEmployment.length - 1);
        }
        setIsAdding(false);
    }

    return (
        <div className='form-group' style={{ paddingBottom: "30px" }}>
            <div className="row">
                <div className='form-group col-lg-12 col-md-12'>

                    {watch("employment") && watch("employment").length > 0 && watch("employment").map((item, index) => {
                        if (isEmploymentEntryFilled(item)) {
                            return (
                                <React.Fragment key={item.name + index}>
                                    <h5 className='mb-2'>Employment History</h5>
                                    <table className="table table-bordered" >
                                        <thead>
                                            <tr>
                                                <th scope="col">No.</th>
                                                <th scope="col">Company Name</th>
                                                <th scope="col">Position</th>
                                                <th scope="col">Department</th>
                                                <th scope="col">Job Sector</th>
                                                <th scope="col">Scope To Work</th>
                                                <th scope="col">From Date</th>
                                                <th scope="col">Till Date</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">{index + 1}</th>
                                                <td>{item.name}</td>
                                                <td>{item.position}</td>
                                                <td>{item.department}</td>
                                                <td>{item?.categories?.map((item=>item.label)).join(",")}</td>
                                                <td>{item.scope}</td>
                                                <td>{new Date(item.from).toDateString()}</td>
                                                <td>{new Date(item.to).toDateString()}</td>
                                                <td>
                                                    <span
                                                        role='button'
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#editEmploymentDetail"
                                                        className="education-edit"
                                                        onClick={() => setEditIndex(index)}
                                                    >
                                                        Edit
                                                    </span>
                                                    <span
                                                        role='button'
                                                        className="education-delete ps-4"
                                                        onClick={() => handleDeleteEmployment(index)}
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
                        className="theme-btn btn-style-three my-4"
                        data-bs-toggle="modal"
                        data-bs-target="#employmentDetail"
                        onClick={handleEmploymentFormSubmit}
                    >
                        Add Employment History
                    </div>
                </div>

                <div className="modal fade" id="employmentDetail" ref={employmentModalRef}>
                    <div className="modal-dialog modal-lg modal-dialog-centered educational-modal modal-dialog-scrollable">
                        <div className="modal-content">
                            <button
                                type="button"
                                className="closed-modal"
                                data-bs-dismiss="modal"
                            ></button>

                            <div className="modal-body">
                                <div id="login-modal">
                                    <EmploymentForm watch={watch} register={register} setValue={setValue} error={error} control={control} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="editEmploymentDetail">
                    <div className="modal-dialog modal-lg modal-dialog-centered educational-modal modal-dialog-scrollable">
                        <div className="modal-content">
                            <button
                                type="button"
                                className="closed-modal"
                                data-bs-dismiss="modal"
                            ></button>

                            <div className="modal-body">
                                <div id="login-modal">
                                    <EditEmploymentForm
                                        watch={watch}
                                        register={register}
                                        setValue={setValue}
                                        error={error}
                                        index={editIndex}
                                        control={control}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='form-group col-lg-12 col-md-12' style={{ marginBottom: '0px' }}>
                    {error?.employment?.slice(0, 1).map(item =>
                        <span className="error error-border" key={item?.position?.message}>
                            {item?.name?.message + ', ' + item?.position?.message + ', ' + item.department?.message + "!"}
                        </span>
                    )}
                </div>
            </div>
        </div>
    )
}

export default EmploymentDetail