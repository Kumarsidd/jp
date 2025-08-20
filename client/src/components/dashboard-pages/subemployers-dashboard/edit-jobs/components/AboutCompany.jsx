import React from 'react'

const AboutCompany = ({ watch, register, setValue, error }) => {

    return (
        <div className='default-form'>
            <div className='row'>
                <div className='form-group col-lg-6 col-md-12'>
                    <label>Company name<span className='required-form'>*</span></label>
                    <input className={`${error?.company?.name?.message ? 'error' : ''}`} {...register("company.name")} type='text' placeholder='XYZ Technology' />
                </div>
                <div className='form-group col-lg-6 col-md-12'>
                    <label>Contact Person name<span className='required-form'>*</span></label>
                    <input className={`${error?.company?.contact_person?.message ? 'error' : ''}`} {...register("company.contact_person")} type='text' placeholder='XYZ' />
                </div>
                <div className='form-group col-lg-6 col-md-12'>
                    <label>Phone Number<span className='required-form'>*</span></label>
                    <input className={`${error?.company?.phone?.message ? 'error' : ''}`} {...register("company.phone")} type='text' placeholder='1234567890' />
                </div>
                <div className='form-group col-lg-6 col-md-12'>
                    <label>Email Id<span className='required-form'>*</span></label>
                    <input className={`${error?.company?.email?.message ? 'error' : ''}`} {...register("company.email")} type='text' placeholder='xyz@xyz.com' />
                </div>
                <div className='form-group col-lg-6 col-md-12'>
                    <label>Contact Person Profile<span className='required-form'>*</span></label>
                    <select className={`${error?.company?.contact_person_profile?.message ? 'error' : ''}`} {...register("company.contact_person_profile")}>
                        <option value={""} hidden> HR / Owner</option>
                        <option value={"HR"}>HR</option>
                        <option value={"Owner"}>Owner</option>
                        <option value={"Manager"}>Manager</option>
                    </select>
                </div>
                <div className='form-group col-lg-6 col-md-12'>
                    <label>Size of Organization<span className='required-form'>*</span></label>
                    <input className={`${error?.company?.size_of_org?.message ? 'error' : ''}`} {...register("company.size_of_org")} type='number' min={1} placeholder='200-400' />
                </div>
                <div className='form-group col-lg-6 col-md-12'>
                    <label>Job address<span className='required-form'>*</span></label>
                    <textarea className={`${error?.company?.job_address?.message ? 'error' : ''}`} {...register("company.job_address")} style={{ height: '120px', minHeight: 0, padding: '15px 20px' }} placeholder='Somewhere in netherlands' />
                </div>
                <div className='form-group col-lg-6 col-md-12'>
                    <label>How often do you have a job vacancy?<span className='required-form'>*</span></label>
                    <input className={`${error?.company?.vacancy?.message ? 'error' : ''}`} {...register("company.vacancy")} type='text' placeholder='Occasionally' />
                </div>
            </div>
        </div>
    )
}

export default AboutCompany