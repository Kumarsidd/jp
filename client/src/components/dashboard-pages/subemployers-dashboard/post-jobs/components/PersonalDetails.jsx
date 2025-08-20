import React from 'react'
import Select from "react-select";

import { assetValues, certificationValues, degreeSpecialisationValues, preferredIndustryValues, preferredLanguageValues } from '@/data/jobForm'

const PersonalDetails = ({ watch, register, setValue, error }) => {

    const info = [
        { value: preferredLanguageValues, label: "Preferred Language" },
        // { value: assetValues, label: "Assets" },
        { value: degreeSpecialisationValues, label: "Degree and Specialisation" },
        // { value: certificationValues, label: "Certification" },
        { value: preferredIndustryValues, label: "Preferred Industry" }
    ];

    return (
        <div className="default-form">
            <div className='row'>

                {/* <div className="form-group col-lg-6 col-md-12">
                    <label>Age<span className='required-form'>*</span> </label>
                    <input type='number' {...register("age")} placeholder='Age' min={10} max={100} />
                </div> */}
                {info.map((item, index) => (
                    <div className="form-group col-lg-6 col-md-12" key={item.label + index}>
                        <label>{item.label}<span className='required-form'>*</span> </label>
                        <Select
                            isMulti
                            name="colors"
                            className={`basic-multi-select ${error?.candidate_requirement?.[index]?.message ? 'error-border' : ''}`}
                            classNamePrefix="select"
                            options={item.value}
                            defaultValue={watch(`personal_info.${index}.assets`) ? watch(`personal_info.${index}.assets`) : []}
                            onChange={(data) => setValue(`personal_info.${index}`, { info: item.label, assets: data })}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PersonalDetails