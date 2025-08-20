import React, { useEffect, useRef } from 'react'
import TestScore from './english-test-score/TestScore';
import DatePicker from '@/components/common/date-picker/DatePicker';

const EnglishCertification = ({ watch, register, setValue, error }) => {

    const uploadScoreRef = useRef(null);

    useEffect(() => {
        if (uploadScoreRef.current) {
            const labelElement = uploadScoreRef.current.querySelector('label');
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
    }, [uploadScoreRef, error])

    return (
        <div className="default-form">
            <div className="row form-group" style={{ marginBottom: '0' }}>
                <div className="form-group col-lg-12 col-md-12">
                    <label>Certifications Attempted</label>
                    <div className="d-flex justify-content-between ms-2" style={{ width: "60%" }}>
                        <div className="d-flex align-items-center">
                            <label className={error?.english_language?.certification_attempted?.message ? 'error' : ''}>
                                <input
                                    type="radio"
                                    {...register("english_language.certification_attempted")}
                                    className="radio-box"
                                    placeholder="IELTS"
                                    value="IELTS"
                                />
                                <span className="ml-3" style={{ padding: '1px' }} > IELTS </span>
                            </label>
                        </div>

                        <div className="d-flex align-items-center">
                            <label className={error?.english_language?.certification_attempted?.message ? 'error' : ''}>
                                <input
                                    type="radio"
                                    {...register("english_language.certification_attempted")}
                                    className="radio-box"
                                    placeholder="OET"
                                    value="OET"
                                />
                                <span className="ml-3" style={{ padding: '1px' }} > OET </span>
                            </label>
                        </div>

                        <div className="d-flex align-items-center">
                            <label className={error?.english_language?.certification_attempted?.message ? 'error' : ''}>
                                <input
                                    type="radio"
                                    {...register("english_language.certification_attempted")}
                                    className="radio-box"
                                    placeholder="None"
                                    value="None"
                                />
                                <span className="ml-3" style={{ padding: '1px' }} > None </span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className='form-group col-lg-12 col-md-12'>
                    <label>Most Recent Test Date</label>
                    <div>

                        <DatePicker
                            id='englishCertificateTestDate'
                            value={watch(`english_language.recent_test`)}
                            onChange={(date) => setValue(`english_language.recent_test`, date)}
                        />
                    </div>
                </div>

                <div className='form-group col-lg-12 col-md-12'>
                    <label>Test Score</label>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Listening</th>
                                <th scope="col">Reading</th>
                                <th scope="col">Writing</th>
                                <th scope="col">Speaking</th>
                                <th scope="col">Overall</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>{watch("english_language.test_score.listening")}</td>
                                <td>{watch("english_language.test_score.reading")}</td>
                                <td>{watch("english_language.test_score.writing")}</td>
                                <td>{watch("english_language.test_score.speaking")}</td>
                                <td>{watch("english_language.test_score.overall")}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="modal fade" id="testScore">
                    <div className="modal-dialog modal-lg modal-dialog-centered educational-modal modal-dialog-scrollable">
                        <div className="modal-content">
                            <button
                                type="button"
                                className="closed-modal"
                                data-bs-dismiss="modal"
                            ></button>

                            <div className="modal-body">
                                <div id="login-modal">
                                    <TestScore watch={watch} register={register} setValue={setValue} error={error} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='form-group col-lg-12 col-md-12'>
                    <label>Test Score Card</label>
                    <div className="uploading-outer" ref={uploadScoreRef} style={{ border: "none", padding: 0, margin: 0 }}>
                        <div className="uploadButton">
                            <input
                                className="uploadButton-input"
                                type="file"
                                accept="image/*"
                                id={`uploadEnglishCertificate`}
                                {...register(`english_language.score_card`)}
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    if (file) {
                                        setValue(`english_language.score_card`, file);
                                    }
                                }}
                            />
                            <label
                                className="uploadButton-button ripple-effect"
                                htmlFor={`uploadEnglishCertificate`}
                            >
                                {(watch(`english_language.score_card`)?.name || watch(`english_language.score_card`)?.originalname) || "Upload File"}
                            </label>
                        </div>
                    </div>
                </div>

                <div className='form-group col-lg-12 col-md-12' >
                    {error?.english_language?.test_score && Object.keys(error?.english_language?.test_score).length > 0 && (
                        <span className="error error-border" >
                            {
                                error?.english_language?.test_score?.listening?.message + ', ' +
                                error?.english_language?.test_score?.reading?.message + ', ' +
                                error?.english_language?.test_score?.speaking?.message + ', ' +
                                error?.english_language?.test_score?.writing?.message + ', ' +
                                error?.english_language?.test_score?.overall?.message + "!"
                            }
                        </span>
                    )}
                </div>

                <div className='form-group col-lg-12 col-md-12'>
                    <div
                        style={{ width: 'inherit' }}
                        className="theme-btn btn-style-three mb-4"
                        data-bs-toggle="modal"
                        data-bs-target="#testScore"
                    >
                        {watch("english_language.test_score.listening") ? 'Edit' : 'Add'} Test Score
                    </div>
                </div>


            </div>
        </div>
    )
}

export default EnglishCertification