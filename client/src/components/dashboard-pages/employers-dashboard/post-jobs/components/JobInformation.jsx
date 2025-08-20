import { categories } from "@/data/category";
import { cities } from "@/data/cities";
import { skillValues } from "@/data/jobForm";
import { jobTypeList } from "@/utils/jobTypeList";
import Select from "react-select";
import InterviewDetails from "./InterviewDetails";
const JobInformation = ({ watch, register, setValue, error }) => {

  return (
    <div className="default-form">
      <div className="row">
        <div className="form-group col-lg-12 col-md-12">
          <label>Job Title<span className='required-form'>*</span></label>
          <input className={`${error?.title?.message ? 'error' : ''}`} type="text" {...register("title")} placeholder="Title" />
        </div>

        <label style={{ fontSize: "15px", fontWeight: "500", marginBottom: "10px", lineHeight: "20px" }}>Job Location<span className='required-form'>*</span></label>
        <div className="form-group col-lg-6 col-md-12">
          <select className={`${error?.location?.message ? 'error' : ''} chosen-single`} {...register("location")}>
            <option value="" hidden>Select Location</option>
            {cities.map((item, index) => (
              <option value={item} key={item + index}>{item}</option>
            ))}
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <input className={`${error?.place?.message ? 'error' : ''}`} type="text" {...register("place")} placeholder="E.g Dadar" />
        </div>

        <div className="form-group col-lg-12 col-md-12">
          <label>No of Openings<span className='required-form'>*</span></label>
          <input className={`${error?.opening?.message ? 'error' : ''}`} type="number" {...register("opening")} min={1} max={500} placeholder="Number of openings" />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>
          Job Sector <span className="required-form">*</span>
          </label>
          <Select
            isMulti
            name="categories-add"
            className={`basic-multi-select ${error?.categories?.message ? 'error-border' : ''}`}
            classNamePrefix="select"
            options={categories}
            defaultValue={watch("categories") ? watch("categories") : []}
            onChange={(data) => setValue("categories", data)}
          />
        </div>
        <div className="form-group col-lg-6 col-md-12">
        <label>
            Job Type <span className="required-form">*</span>
          </label>
          <select className={`${error?.jobtype?.message ? 'error' : ''} chosen-single`} {...register("jobtype")}>
            <option value="" hidden>Select Job Type</option>
            {jobTypeList.map((item, index) => (
              <option value={item.value} key={index}>{item.name}</option>
            ))}
          </select>
        </div>
      
      </div>
    </div >
  );
};

export default JobInformation;
