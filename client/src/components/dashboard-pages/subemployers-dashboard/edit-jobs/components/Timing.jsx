import React from 'react'

const Timing = ({ watch, register, setValue, error }) => {

    return (
        <div className='default-form'>
            <div className='row'>
                <div className='form-group col-lg-6 col-md-12'>
                    <label>Job Timing<span className='required-form'>*</span></label>
                    <input type='text' {...register("timing.job")} placeholder='Mon-Thu | 9-5 am' />
                </div>

                <div className='form-group col-lg-6 col-md-12'>
                    <label>Interview Timing<span className='required-form'>*</span></label>
                    <input type='text' {...register("timing.interview")} placeholder='Mon-Thu | 9-5 am' />
                </div>
            </div>
        </div>
    )
}

export default Timing