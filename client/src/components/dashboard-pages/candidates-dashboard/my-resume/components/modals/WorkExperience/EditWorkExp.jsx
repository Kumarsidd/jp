import React from 'react'
import DatePicker from '@/components/common/date-picker/DatePicker';

const EditWorkExp = ({ watch, register, setValue, error, index }) => {
    if (index === null) {
        return;
    }

    return (
        <div className='default-form'>
            <h4>Edit Work Experience</h4>
            <div className='row form-group mt-4'>
                <div className="form-group col-lg-6 col-md-12">
                    <label>Position</label>
                    <input type="text" {...register(`work_experiences.${index}.position`)} placeholder="Software Developer" />
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>Company name</label>
                    <input type="text" {...register(`work_experiences.${index}.company_name`)} placeholder="Spotify INC" />
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>Start Date</label>
                    <div>
                        <DatePicker
                            id='workExpEditStartDate'
                            value={watch?.start_date}
                            onChange={(date) => setValue(`work_experiences.${index}.start_date`, date)}
                        />
                    </div>
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>End Date</label>
                    <div>
                        <DatePicker
                            id='workExpEditEndDate'
                            value={watch?.end_date}
                            onChange={(date) => setValue(`work_experiences.${index}.end_date`, date)}
                        />
                    </div>
                </div>

                <div className="form-group col-lg-12 col-md-12">
                    <label>Description</label>
                    <textarea
                        {...register(`work_experiences.${index}.description`)}
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

export default EditWorkExp;