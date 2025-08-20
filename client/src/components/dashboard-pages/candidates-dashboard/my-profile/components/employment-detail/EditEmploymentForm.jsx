import DatePicker from "@/components/common/date-picker/DatePicker";
import { categories } from "@/data/category";
import { departments } from "@/data/department";
import React from "react";
import { useState } from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";

const EditEmploymentForm = ({
  watch,
  register,
  setValue,
  error,
  index,
  control,
}) => {
  if (index === null) {
    return;
  }

  // Watch the 'from' date to handle the conditional logic for 'till' date
  const employmentFromDate = watch(`employment.${index}.from`);

  // Disable till date if 'from' date is set
  const isTillDateDisabled = employmentFromDate
    ? (date) => date.isBefore(moment(employmentFromDate), "day")
    : () => false;
    console.log("isTillDateDisabled",isTillDateDisabled)

  return (
    <div className="default-form">
      <h4>Employment Form</h4>
      <div className="row form-group mt-4">
        <div className="form-group col-lg-6 col-md-12">
          <label>Company Name <span className="required-form">*</span></label>
          <input
            type="text"
            {...register(`employment.${index}.name`)}
            placeholder="XYZ"
            required
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Position <span className="required-form">*</span></label>
          <input
            type="text"
            {...register(`employment.${index}.position`)}
            placeholder="Software Developer"
            required
          />
        </div>

        <div className="form-group col-lg-12 col-md-12">
          <label>Department <span className="required-form">*</span></label>
          <select
            type="text"
            {...register(`employment.${index}.department`)}
            onChange={(e) =>
              setValue(`employment.${index}.department`, e.target.value)
            }
            placeholder="Engineer"
            required
          >
            <option value={""}>Select Department</option>
            {departments.map((item) => (
              <option key={item.label} value={item.label}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group col-lg-12 col-md-12">
          <label>
            Job Sector <span className="required-form">*</span>
          </label>
          <Controller
            name={`employment.${index}.categories`}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                {...field}
                isMulti
                options={categories}
                className="basic-multi-select"
                classNamePrefix="select"
              />
            )}
          />
          {error.employment?.[index]?.categories && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <div className="form-group col-lg-12 col-md-12">
          <label>Scope of Work <span className="required-form">*</span></label>
          <input
            type="text"
            className="form-control"
            {...register(`employment.${index}.scope`)}
            placeholder="Scope"
          />
          {error?.employment?.[index]?.scope && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>From Date <span className="required-form">*</span></label>
          <div>
            <DatePicker
              id="employmentFromDate"
              value={watch(`employment.${index}.from`)}
              onChange={(date) =>{
                // setStartDate(date);
                 setValue(`employment.${index}.from`, date)
                }}
            />
          </div>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Till Date <span className="required-form">*</span></label>
          <div>
            <DatePicker
              id="employmentTillDate"
              value={watch(`employment.${index}.to`)}
              onChange={(date) =>{
                // setEndDate(date);
                 setValue(`employment.${index}.to`, date)
                }}
                startDate={watch(`employment.${index}.from`)}  // Pass startDate to restrict the till date
                />
          </div>
        </div>

        <div
          className="form-group col-lg-12 col-md-12"
          style={{ marginBottom: 0 }}
        >
          <div
            role="button"
            data-bs-dismiss="modal"
            className="theme-btn btn-style-one"
          >
            Save
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEmploymentForm;
