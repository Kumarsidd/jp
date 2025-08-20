import React from 'react'
import DatePicker from '@/components/common/date-picker/DatePicker';

const AddAward = ({ watch, register, setValue, error }) => {
    const index = watch("awards").length - 1;

    return (
        <div className='default-form'>
            <h4>Add Award Form</h4>
            <div className='row form-group mt-4'>
                <div className="form-group col-lg-12 col-md-12">
                    <label>Award Name</label>
                    <input type="text" {...register(`awards.${index}.award_name`)} placeholder="Employer of the Year" />
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>Start Date</label>
                    <div>
                        <DatePicker
                            id='awardStartDate'
                            value={watch(`awards.${index}.start_date`)}
                            onChange={(date) => setValue(`awards.${index}.start_date`, date)}
                        />
                    </div>
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>End Date</label>
                    <div>
                        <DatePicker
                            id='awardEndDate'
                            value={watch(`awards.${index}.end_date`)}
                            onChange={(date) => setValue(`awards.${index}.end_date`, date)}
                        />
                    </div>
                </div>

                <div className="form-group col-lg-12 col-md-12">
                    <label>Description</label>
                    <textarea
                        {...register(`awards.${index}.description`)}
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

export default AddAward;