import React from 'react'
import DatePicker from '@/components/common/date-picker/DatePicker';

const EditEducation = ({ watch, register, setValue, error, index }) => {

    if (index === null) {
        return;
    }

    return (
        <div className='default-form'>
            <h4>Edit Education Form</h4>
            <div className='row form-group mt-4'>
                <div className="form-group col-lg-6 col-md-12">
                    <label>Degree</label>
                    <input type="text" {...register(`educations.${index}.degree`)} placeholder="B.COM / B.Tech" />
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>University</label>
                    <input type="text" {...register(`educations.${index}.university`)} placeholder="Mumbai University" />
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>Start Date</label>
                    <div>
                        <DatePicker
                            id='educationEditStartDate'
                            value={watch?.start_date}
                            onChange={(date) => setValue(`educations.${index}.start_date`, date)}
                        />
                    </div>
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>End Date</label>
                    <div>
                        <DatePicker
                            id='educationEditEndDate'
                            value={watch?.end_date}
                            onChange={(date) => setValue(`educations.${index}.end_date`, date)}
                        />
                    </div>
                </div>

                <div className="form-group col-lg-12 col-md-12">
                    <label>Description</label>
                    <textarea
                        {...register(`educations.${index}.description`)}
                        placeholder="Spent several years working on sheep on Wall Street."
                    />
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

export default EditEducation;