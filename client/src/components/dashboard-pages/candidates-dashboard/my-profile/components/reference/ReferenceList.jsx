import React from 'react'

const ReferenceList = ({ watch, register, setValue, error }) => {
    const index = watch("references").length - 1;
    return (
        <div className='default-form'>
            <h4>Reference Form</h4>
            <div className='row form-group mt-4'>
                <div className="form-group col-lg-6 col-md-12">
                    <label>Name <span className="required-form">*</span></label>
                    <input
                        type="text"
                        placeholder="XYZ"
                        {...register(`references.${index}.name`)}
                        onChange={(e) => setValue(`references.${index}.name`, e.target.value)}
                        required
                    />
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>Phone <span className="required-form">*</span></label>
                    <input
                        type="text"
                        placeholder="0 123 456 7890"
                        {...register(`references.${index}.phone`)}
                        onChange={(e) => setValue(`references.${index}.phone`, e.target.value)}
                        required
                    />
                </div>

                <div className="form-group col-lg-12 col-md-12">
                    <label>Email address <span className="required-form">*</span></label>
                    <input
                        type="email"
                        placeholder="creativelayers"
                        {...register(`references.${index}.email`)}
                        onChange={(e) => setValue(`references.${index}.email`, e.target.value)}
                        required
                    />
                </div>

                <div className="form-group col-lg-12 col-md-12">
                    <label>Notes <span className="required-form">*</span></label>
                    <textarea
                        placeholder="Please write some notes"
                        {...register(`references.${index}.note`)}
                        onChange={(e) => setValue(`references.${index}.note`, e.target.value)}
                    ></textarea>
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

export default ReferenceList