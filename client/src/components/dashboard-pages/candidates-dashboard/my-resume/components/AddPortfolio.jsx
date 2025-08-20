import { useEffect, useRef } from "react";

const AddPortfolio = ({ watch, register, setValue, error }) => {
  const portfolioRef = useRef(null);

  useEffect(() => {
    if (portfolioRef.current) {
      const labelElement = portfolioRef.current.querySelector('label');
      if (labelElement) {
        if (error?.portfolio?.message) {
          labelElement.tabIndex = -1;
          labelElement.focus();
          labelElement.classList.add('error');
        } else {
          labelElement.tabIndex = 0;
          labelElement.classList.remove('error');
        }
      }
    }

  }, [portfolioRef, error])

  return (
    <>
      <div className="resume-outer" style={{ margin: 0 }}>
        <div className="upper-title">
          <h4 style={{ fontSize: "15px" }}>Portfolio <span className='required-form'>*</span></h4>
        </div>
      </div>

      <div className="uploading-outer" style={{ border: "none", padding: 0, margin: 0 }}>
        <div className="uploadButton">
          <input
            className="uploadButton-input"
            type="file"
            accept="image/*"
            id={`upload-portfolio`}
            {...register(`portfolio`)}
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) setValue(`portfolio`, file);
            }}
          />
          <label className="uploadButton-button ripple-effect" htmlFor="upload-portfolio">
            {(watch(`portfolio`)?.name || watch(`portfolio`)?.originalname) || "Upload Portfolio"}
          </label>
        </div>
      </div>
    </>
  );
};

export default AddPortfolio;
