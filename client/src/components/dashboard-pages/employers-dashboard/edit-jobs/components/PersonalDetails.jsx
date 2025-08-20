import React from 'react'
import Select from "react-select";

import { assetValues, certificationValues, degreeSpecialisationValues, preferredIndustryValues, preferredLanguageValues } from '@/data/jobForm'
import DatePicker from '@/components/common/date-picker/DatePicker';

const PersonalDetails = ({ watch, register, setValue, error }) => {

    const info = [
        { value: preferredLanguageValues, label: "Preferred Language" },
        // { value: assetValues, label: "Assets" },
        { value: degreeSpecialisationValues, label: "Degree and Specialisation" },
        // { value: certificationValues, label: "Certification" },
        { value: preferredIndustryValues, label: "Preferred Industry" }
    ];
    console.log(watch("personal_info"))

    return (
        <div className="default-form">
            <div className='row'>
                {info.map((item, index) => (
                    <div className="form-group col-lg-6 col-md-12" key={item.label + index}>
                        <label>{item.label}<span className='required-form'>*</span> </label>
                        <Select
                               isMulti
                               name="colors"
                               className={`basic-multi-select ${error?.personal_info?.[index]?.message ? 'error-border' : ''}`}
                               classNamePrefix="select"
                               options={item.value}
                               value={watch(`personal_info.${index}.assets`) ? watch(`personal_info.${index}.assets`) : []}
                               onChange={(data) => setValue(`personal_info.${index}`, { info: item.label, assets: data })}
                        />
                    </div>
                ))}
                <div className="form-group col-lg-6 col-md-12" >
                    <label>{"Dead Line"}<span className='required-form'>*</span> </label>
                    <div className={error?.deadline?.message ? 'error error-border' : ''}>
                    <DatePicker
                        id={'deadline'}
                        value={watch("deadline")}
                        onChange={(date) => setValue("deadline", date)}
                    />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalDetails