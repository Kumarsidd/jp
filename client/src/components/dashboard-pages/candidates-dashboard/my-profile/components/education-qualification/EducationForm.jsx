import LogoUpload from '@/components/dashboard-pages/candidates-dashboard/my-profile/components/my-profile/LogoUpload'
import DatePicker from '@/components/common/date-picker/DatePicker';
import { degreeSpecialisationValues } from '@/data/jobForm';

const EducationForm = ({ watch, register, setValue, error }) => {
    const index = watch("education").length - 1;

    return (
        <div className='default-form'>
            <h4>Education Form</h4>
            <div className='row form-group mt-4'>
                <div className="form-group col-lg-6 col-md-12">
                    <label>Name of Institution  <span className="required-form">*</span></label>
                    <input type="text" {...register(`education.${index}.name`)} placeholder="Mumbai University" required />
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>Qualification  <span className="required-form">*</span></label>
                    <select  {...register(`education.${index}.qualification`)} required>
                        <option value={""}>Select Qualification</option>
                        {degreeSpecialisationValues.map((item)=><option value={item.label}>{item.label}</option>)}
                    </select>
                </div>

                {/* <div className="form-group col-lg-6 col-md-12">
                    <label>Start Date  <span className="required-form">*</span></label>
                    <div>
                        <DatePicker
                            id='educationFromDate'
                            value={watch(`education.${index}.from`)}
                            onChange={(date) => setValue(`education.${index}.from`, date)}
                        />
                    </div>
                </div> */}

                <div className="form-group col-lg-6 col-md-12">
                    <label>Passing Year  <span className="required-form">*</span></label>
                    <div>
                        <DatePicker
                            id='educationToDate'
                            value={watch(`education.${index}.to`)}
                            onChange={(date) => setValue(`education.${index}.to`, date)}
                        />
                    </div>
                </div>

                {/* <div className="form-group col-lg-12 col-md-12">
                    <label>Certificate  <span className="required-form">*</span></label>
                    <div className="uploading-outer" style={{ border: "none", padding: 0, margin: 0 }}>
                        <div className="uploadButton">
                            <input
                                className="uploadButton-input"
                                type="file"
                                accept="image/*"
                                id={`upload-${index}`}
                                // {...register(`education.${index}.certificate`)}
                                {...register(`education.${index}.certificate`)}
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    if (file) {
                                        setValue(`education.${index}.certificate`, file);
                                    }
                                }}
                            />
                            <label
                                className="uploadButton-button ripple-effect"
                                htmlFor={`upload-${index}`}
                            >
                                {(watch(`education.${index}.certificate`)?.name || watch(`education.${index}.certificate`)?.originalname) || "Upload File"}
                              <span className="required-form">*</span></label>
                        </div>
                    </div>
                </div> */}

                <div className="form-group col-lg-12 col-md-12" style={{ marginBottom: 0 }}>
                    <div role='button' data-bs-dismiss="modal" className="theme-btn btn-style-one">
                        Save
                    </div>
                </div>
            </div>
        </div>

    )
}

export default EducationForm