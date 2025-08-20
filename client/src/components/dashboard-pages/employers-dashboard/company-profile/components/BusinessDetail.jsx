import React, { useEffect, useRef, useState } from "react";
import DatePicker from "@/components/common/date-picker/DatePicker";
import { categories } from "@/data/category";
import Select from "react-select";
import { CitiesByStates, StatesByCountry } from "@/data/citydatabase";
const BusinessDetail = ({ watch, register, setValue, error }) => {
  const logoRef = useRef(null);
  const picturesRef = useRef(null);
  const videosRef = useRef(null);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const selectedCountry = watch("address.country");
  const selectedState = watch("address.state");
  const getStates = (country) => {
    if (country) {
      let availableStates = StatesByCountry(country)
        .map((i) => ({ state: i.state })) // Map to an array of state objects
        .filter(
          (value, index, self) =>
            index === self.findIndex((t) => t.state === value.state) // Remove duplicates
        );
      setStates(availableStates);
    }
  };

  const getCities = (state) => {
    if (state) {
      const availableStates = CitiesByStates(state);
      setCities(availableStates);
    }
  };
  /** Populate States when Country Changes */
  useEffect(() => {
    selectedCountry && getStates(selectedCountry);
    selectedState && getCities([selectedState]);
  }, [selectedCountry, selectedState]);
  useEffect(() => {
    if (logoRef.current) {
      const labelElement = logoRef.current.querySelector("label");
      if (labelElement) {
        if (error?.myProfile?.upload_cv?.message) {
          labelElement.tabIndex = -1;
          labelElement.focus();
          labelElement.classList.add("error");
        } else {
          labelElement.tabIndex = 0;
          labelElement.classList.remove("error");
        }
      }
    }

    if (picturesRef.current) {
      const labelElement = picturesRef.current.querySelector("label");
      if (labelElement) {
        if (error?.myProfile?.upload_cv?.message) {
          labelElement.tabIndex = -1;
          labelElement.focus();
          labelElement.classList.add("error");
        } else {
          labelElement.tabIndex = 0;
          labelElement.classList.remove("error");
        }
      }
    }

    if (videosRef.current) {
      const labelElement = videosRef.current.querySelector("label");
      if (labelElement) {
        if (error?.myProfile?.upload_cv?.message) {
          labelElement.tabIndex = -1;
          labelElement.focus();
          labelElement.classList.add("error");
        } else {
          labelElement.tabIndex = 0;
          labelElement.classList.remove("error");
        }
      }
    }
  }, [logoRef, picturesRef, videosRef, error]);

  //console.log("categories????",watch("categories"))
  return (
    <div className="default-form">
      <div className="row">
        <div className="form-group col-lg-12 col-md-12">
          <label>
            Business name <span className="required-form">*</span>
          </label>
          <input
            type="text"
            className={`${error?.business_name?.message ? "error" : ""}`}
            {...register("business_name")}
            placeholder="creativelayers"
            required
          />
        </div>
        <div className="form-group col-lg-12 col-md-12">
          <label>
            Job Sector <span className="required-form">*</span>
          </label>
          <Select
            isMulti
            name="categories-add"
            className={`basic-multi-select ${error?.categories?.message ? "error-border" : ""}`}
            classNamePrefix="select"
            options={categories}
            value={watch("categories") ? watch("categories") : []}
            onChange={(data) => setValue("categories", data)}
          />
          {/* <label>PAN Card No. <span className='required-form'>*</span></label>
                    <input type="text" className={`${error?.categories?.message ? 'error' : ''}`} {...register("categories")} placeholder="0 123 456 7890" required />
                 */}
        </div>
        <div className="form-group col-lg-12 col-md-12">
          <label>
            Business GST No. <span className="required-form">*</span>
          </label>
          <input
            type="text"
            className={`${error?.business_gst?.message ? "error" : ""}`}
            {...register("business_gst")}
            placeholder="C2DF24F2DWEFW"
            required
          />
        </div>

        <label
          style={{
            fontWeight: "500",
            marginBottom: "10px",
            lineHeight: "20px",
          }}
        >
          Contact Name <span className="required-form">*</span>
        </label>
        <div className="form-group col-lg-4 col-md-12">
          <input
            type="text"
            className={`${error?.name?.first?.message ? "error" : ""}`}
            {...register("name.first")}
            placeholder="First name"
            required
          />
        </div>
        <div className="form-group col-lg-4 col-md-12">
          <input
            type="text"
            className={`${error?.name?.middle?.message ? "error" : ""}`}
            {...register("name.middle")}
            placeholder="Middle name"
            required
          />
        </div>
        <div className="form-group col-lg-4 col-md-12">
          <input
            type="text"
            className={`${error?.name?.last?.message ? "error" : ""}`}
            {...register("name.last")}
            placeholder="Last name"
            required
          />
        </div>

        <div className="form-group col-lg-12 col-md-12">
          <label>
            Email <span className="required-form">*</span>
          </label>
          <input
            type="text"
            className={`${error?.email?.message ? "error" : ""}`}
            {...register("email")}
            placeholder="creativelayers"
            required
          />
        </div>

        <div className="form-group col-lg-12 col-md-12">
          <label>
            Phone Number <span className="required-form">*</span>
          </label>
          <div className="d-flex gap-3 align-items-center">
            <input
              type="text"
              className={`${error?.phone_area?.message ? "error" : ""}`}
              {...register("phone_area")}
              placeholder="Area Code"
              required
            />{" "}
            -
            <input
              type="text"
              className={`${error?.phone?.message ? "error" : ""}`}
              {...register("phone")}
              placeholder="Phone Number"
              required
            />
          </div>
        </div>

        <div className="form-group col-lg-12 col-md-12 mt-2">
          <label>
            Address <span className="required-form">*</span>
          </label>
          <div>
            <input
              type="text"
              className={`${error?.address?.lane1?.message ? "error" : ""}`}
              {...register("address.lane1")}
              placeholder="Door No./ Flat No. / Address 1"
              required
            />
            <input
              type="text"
              className={`${error?.address?.lane2?.message ? "error" : ""} mt-4`}
              {...register("address.lane2")}
              placeholder="Apartment Name / S treet Name / Address 2"
              required
            />
            <div
              className="d-flex justify-content-between col-lg-6 col-md-12"
              style={{ width: "inherit", gap: "24px" }}
            >
                  {/* Country Dropdown */}
              <select
                {...register("address.country")}
                value={selectedCountry}
                className={`${error?.address?.country?.message ? "error" : ""} mt-4`}

                onChange={(e)=>{
                  setValue("address.country",e.target.value)
                  getStates(e.target.value)
                  setValue("address.state","")
                  setValue("address.city","")
                }}
                required
              >
                <option value="" hidden>Select Country</option>
                <option value="India">India</option>
                <option value="Japan">Japan</option>
              </select>
              <select
                {...register("address.state")}
                value={selectedState}
                className={`${error?.address?.state?.message ? "error" : ""} mt-4`}
                onChange={(e)=>{
                  setValue("address.state",e.target.value)
                  getCities(e.target.value)
                  setValue("address.city","")
                }}
                required
              >
                <option value="" hidden>Select State</option>
                {states.map((state) => (
                  <option key={state.state} value={state.state}>
                    {state.state}
                  </option>
                ))}
              </select>
              {/* City Dropdown */}
              <select
                {...register("address.city")}
                value={watch("address.city")}
                className={`${error?.address?.city?.message ? "error" : ""} mt-4`}

                onChange={(e)=>{
                  setValue("address.city",e.target.value)
                }}
                required
              >
                <option value="" hidden>Select City</option>
                {cities.map((city) => (
                  <option key={city.city} value={city.city}>
                    {city.city}
                  </option>
                ))}
              </select>
            </div>

            <div
              className="d-flex justify-content-between col-lg-6 col-md-12"
              style={{ width: "inherit", gap: "24px" }}
            >
              <input
                type="number"
                className={`${error?.address?.pin_code?.message ? "error" : ""} mt-4`}
                {...register("address.pin_code")}
                placeholder="Pin Code"
                required
              />
              
            </div>
          </div>
        </div>

        <div className="form-group col-lg-12 col-md-12">
          <label>
            Products And Services <span className="required-form">*</span>
          </label>

          <div className="form-group col-lg-12 col-md-12">
            <textarea
              className={`${error?.product_services ? "error error-border" : ""}`}
              {...register("product_services")}
              style={{
                height: "120px",
                minHeight: "120px",
                padding: "15px 20px",
              }}
              placeholder="Write Here..."
              rows={4} // Adjust the number of visible rows
            />

            {error?.product_services && (
              <p className="error">{error.product_services.message}</p>
            )}
          </div>
        </div>

        <div className="form-group col-lg-12 col-md-12">
          <label>
            Website URL <span className="required-form">*</span>
          </label>
          <input
            type="text"
            className={`${error?.url?.message ? "error" : ""}`}
            {...register("url")}
            placeholder="http://google.com/"
            required
          />
        </div>

        <div className="form-group col-lg-12 col-md-12">
          <label>
            Year Established <span className="required-form">*</span>
          </label>
          <div
            className={
              error?.year_established?.message ? "error error-border" : ""
            }
          >
            <DatePicker
              id="yearEstablished"
              value={watch(`year_established`)}
              onChange={(date) => setValue(`year_established`, date)}
            />
          </div>
        </div>

        <div className="form-group col-lg-12 col-md-12">
          <label>
            Target Keywords <span className="required-form">*</span>
          </label>
          <input
            type="text"
            className={`${error?.keywords?.message ? "error" : ""}`}
            {...register("keywords")}
            placeholder="Please keyword."
            required
          />
        </div>
        {/* Logo upload component */}
        <div className="form-group">
          <label>
            Business / Company Logo <span className="required-form">*</span>
          </label>
          <div
            className="uploading-outer"
            ref={logoRef}
            style={{ border: "none", padding: 0, margin: 0 }}
          >
            <div className="uploadButton">
              <input
                className="uploadButton-input"
                type="file"
                accept="image/*"
                id="upload-logo"
                {...register("logo")}
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setValue("logo", file);
                  }
                }}
              />
              <label
                className="uploadButton-button ripple-effect"
                htmlFor="upload-logo"
              >
                {watch("logo")?.name ||
                  watch("logo")?.originalname ||
                  "Upload Logo"}
              </label>
            </div>
          </div>
        </div>

        {/* Video upload component */}
        <div className="form-group">
          <label>Video</label>
          <div
            className="uploading-outer"
            ref={videosRef}
            style={{ border: "none", padding: 0, margin: 0 }}
          >
            <div className="uploadButton">
              <input
                className="uploadButton-input"
                type="file"
                accept="video/*" // Changed to accept video files
                id="upload-video"
                {...register("videos")}
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setValue("videos", file);
                  }
                }}
              />
              <label
                className="uploadButton-button ripple-effect"
                htmlFor="upload-video"
              >
                {watch("videos")?.name ||
                  watch("videos")?.originalname ||
                  "Upload Video"}
              </label>
            </div>
          </div>
        </div>

        {/* Picture upload component */}
        <div className="form-group">
          <label>Picture</label>
          <div
            className="uploading-outer"
            ref={picturesRef}
            style={{ border: "none", padding: 0, margin: 0 }}
          >
            <div className="uploadButton">
              <input
                className="uploadButton-input"
                type="file"
                accept="image/*"
                id="upload-picture"
                {...register("pictures")}
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setValue("pictures", file);
                  }
                }}
              />
              <label
                className="uploadButton-button ripple-effect"
                htmlFor="upload-picture"
              >
                {watch("pictures")?.name ||
                  watch("pictures")?.originalname ||
                  "Upload Picture"}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetail;
