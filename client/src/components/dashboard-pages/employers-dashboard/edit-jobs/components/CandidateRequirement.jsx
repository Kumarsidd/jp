import { skillValues, specialisms } from "@/data/jobForm";
import React from "react";
import Select from "react-select";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';

const CandidateRequirement = ({ watch, register, setValue, error }) => {
    const handleExperienceClick = (val) => {
        setValue("candidate_requirement.experience", val);
    };

    return (
        <div className="default-form">
            <div className="row">
            <div className="form-group d-flex flex-column">
                    <label>
                        Total Experience of Candidate
                        <span className="required-form">*</span>
                    </label>
                    <div className="d-flex gap-4">
                        {/* error error-border */}
                        <select
                {...register("candidate_requirement.experience")}
                value={watch("candidate_requirement.experience")}
                className={`${error?.candidate_requirement?.experience?.message ? "error error-border" : ""}`}
            >
                {/* Options for Minimum Experience */}
                {[...Array(10).keys()].map((year) => (
                    <option key={year} value={year}>
                        {year} to {year + 1} years
                    </option>
                ))}
            </select>
                        
                    </div>
                </div>

                <div className="form-group col-lg-8 col-md-12">
                    <label>
                        Monthly In-hand Salary<span className="required-form">*</span>
                    </label>
                    <div className="d-flex align-items-center">
                        <input {...register("candidate_requirement.salary_from")} type="number" placeholder="Eg. 10,000" />
                        <p style={{ margin: 0, padding: "16px" }}>to</p>
                        <input {...register("candidate_requirement.salary_to")} type="number" placeholder="Eg. 12,000" />
                    </div>
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>
                        Do you offer bonus in addition to monthly salary?
                        <span className="required-form">*</span>
                    </label>
                    <div className="d-flex justify-content-between ms-2">
                        <div className="d-flex align-items-center">
                            <label className={`${error?.candidate_requirement?.bonus?.message ? 'error' : ''}`}>
                                <input
                                    type="radio"
                                    className="radio-box"
                                    defaultValue={true}
                                    checked={watch("candidate_requirement.bonus") === true}
                                    onChange={() => setValue("candidate_requirement.bonus", true)}
                                />
                                <span className="ml-3" style={{ padding: "1px" }}> Yes </span>
                            </label>
                        </div>
                        <div className="d-flex align-items-center">
                            <label className={`${error?.candidate_requirement?.bonus?.message ? 'error' : ''}`}>
                                <input
                                    type="radio"
                                    className="radio-box"
                                    defaultValue={false}
                                    checked={watch("candidate_requirement.bonus") === false}
                                    onChange={() => setValue("candidate_requirement.bonus", false)}
                                />
                                <span className="ml-3" style={{ padding: "1px" }}> No </span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="form-group col-lg-12 col-md-12">
                    <label>
                     Description<span className="required-form">*</span>
                    </label>
                    <CKEditor
                    editor={ClassicEditor}
                    data={watch("candidate_requirement.job_info")}
                    config={{
                        toolbar: {
                            items: [
                                'heading', '|',
                                'bold', 'italic', 'link', 'bulletedList', 'numberedList', '|',
                                'indent', 'outdent', '|',
                                'blockQuote', '|',
                                'undo', 'redo'
                            ]
                        },
                        placeholder: "Spent several years working on sheep on Wall Street...",
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setValue("candidate_requirement.job_info", data);
                    }}
                    className={`${error?.candidate_requirement?.job_info ? 'error error-border' : ''}`}
                />
                {error?.candidate_requirement?.job_info && <p className="error">{error.candidate_requirement.job_info.message}</p>}
         
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>
                        Skills <span className="required-form">*</span>
                    </label>
                    <Select
                        isMulti
                        name="colors"
                        className={`basic-multi-select ${error?.candidate_requirement?.skills?.message ? 'error-border' : ''}`}
                        classNamePrefix="select"
                        options={skillValues}
                        value={watch("candidate_requirement.skills") ? watch("candidate_requirement.skills") : []}
                        onChange={(data) => setValue("candidate_requirement.skills", data)}
                    />
                </div>
            </div>
        </div>
    );
};

export default CandidateRequirement;
