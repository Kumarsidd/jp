import React, { useEffect, useRef } from 'react'

const RegistrationCertification = ({ watch, register, setValue, error }) => {

    const uploadRegistrationRef = useRef(null);

    useEffect(() => {
        if (uploadRegistrationRef.current) {
            const labelElement = uploadRegistrationRef.current.querySelector('label');
            if (labelElement) {
                if (error?.myProfile?.upload_cv?.message) {
                    labelElement.tabIndex = -1;
                    labelElement.focus();
                    labelElement.classList.add('error');
                } else {
                    labelElement.tabIndex = 0;
                    labelElement.classList.remove('error');
                }
            }
        }
    }, [uploadRegistrationRef, error])

    return (
        <div className='default-form'>
            <div className='form-group' style={{ paddingBottom: "30px" }}>
                <label>Registration Certificate</label>
                <div className="uploading-outer" ref={uploadRegistrationRef} style={{ border: "none", padding: 0, margin: 0 }}>
                    <div className="uploadButton">
                        <input
                            className="uploadButton-input"
                            type="file"
                            accept="image/*"
                            id={`uploadRegistration`}
                            {...register(`registration_certificate`)}
                            onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                    setValue(`registration_certificate`, file);
                                }
                            }}
                        />
                        <label
                            className="uploadButton-button ripple-effect"
                            htmlFor={`uploadRegistration`}
                        >
                            {(watch("registration_certificate")?.name || watch("registration_certificate")?.originalname) || "Upload File"}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistrationCertification