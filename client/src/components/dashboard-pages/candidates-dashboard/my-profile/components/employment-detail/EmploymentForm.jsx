import DatePicker from '@/components/common/date-picker/DatePicker'
import { categories } from '@/data/category';
import { departments } from '@/data/department';
import moment from 'moment';
import React, { useState } from 'react'
import Select from "react-select";
const EmploymentForm = ({ watch, register, setValue, error }) => {
    const index = watch("employment").length - 1;
    return (
        <div className='default-form'>
            <h4>Employment Form</h4>
            <div className='row form-group mt-4'>
                <div className="form-group col-lg-6 col-md-12">
                    <label>Company Name <span className="required-form">*</span></label>
                    <input
                        type="text"
                        {...register(`employment.${index}.name`)}
                        onChange={(e) => setValue(`employment.${index}.name`, e.target.value)}
                        placeholder="XYZ"
                        required
                    />
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>Position <span className="required-form">*</span></label>
                    <input
                        type="text"
                        {...register(`employment.${index}.position`)}
                        onChange={(e) => setValue(`employment.${index}.position`, e.target.value)}
                        placeholder="Software Developer"
                        required
                    />
                </div>

                <div className="form-group col-lg-12 col-md-12">
                    <label>Department <span className="required-form">*</span></label>

                    <select
                        type="text"
                        {...register(`employment.${index}.department`)}
                        onChange={(e) => setValue(`employment.${index}.department`, e.target.value)}
                        placeholder="Engineer"
                        required
                    >
                    <option value={""}>Select Department</option>
                    {departments.map((item)=>(
                        <option value={item.label}>{item.label}</option>
                    ))}
                    </select>

                    
                </div>
                <div className="form-group col-lg-12 col-md-12">
                <label>
                    Job Sector <span className="required-form">*</span></label>
                    <Select
                        isMulti
                        name="categories-add"
                        className={`basic-multi-select`}
                        classNamePrefix="select"
                        options={categories}
                        value={watch(`employment.${index}.categories`) ? watch(`employment.${index}.categories`) : []}
                        onChange={(data) => setValue(`employment.${index}.categories`, data)}
                    />
                </div>
                <div className="form-group col-lg-12 col-md-12">
                    <label>Scope to Work <span className="required-form">*</span></label>
                    <input
                        type="text"
                        {...register(`employment.${index}.scope`)}
                        onChange={(e) => setValue(`employment.${index}.scope`, e.target.value)}
                        placeholder="Engineer"
                        required
                    />
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>From Date <span className="required-form">*</span></label>
                    <div>
                        <DatePicker
                            id='employmentFromDate'
                            value={watch(`employment.${index}.from`)}
                            onChange={(date) =>{
                                 setValue(`employment.${index}.from`, date)
                                }}
                        />
                    </div>
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>Till Date <span className="required-form">*</span></label>
                    <div>
                        <DatePicker
                            id='employmentTillDate'
                            value={watch(`employment.${index}.to`)}
                            onChange={(date) => setValue(`employment.${index}.to`, date)}
                            startDate={watch(`employment.${index}.from`)}
                        />
                    </div>
                </div>

                <div className="form-group col-lg-12 col-md-12" style={{ marginBottom: 0 }}>
                    <div role='button' data-bs-dismiss="modal" className="theme-btn btn-style-one">
                        Save
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmploymentForm