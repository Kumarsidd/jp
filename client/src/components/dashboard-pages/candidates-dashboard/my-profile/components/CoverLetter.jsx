// CoverLetter.js
import React from "react";

const CoverLetter = ({ watch, register, setValue, error }) => {
  return (
    <div>
      <label htmlFor="coverLetter">Cover Letter</label>
      <textarea
        id="coverletter"
        {...register("coverletter")}
        rows="6"
        placeholder="Write your cover letter coverletter..."
        className={`form-control ${error.coverletter ? "is-invalid" : ""}`}
      ></textarea>
      {error.coverletter && (
        <span className="text-danger">{error.coverletter.message}</span>
      )}
    </div>
  );
};

export default CoverLetter;
