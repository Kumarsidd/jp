const Form = ({ watch, register, setValue, error, handleRegisterSubmit, handleSubmit }) => {
  return (
    <form className="default-form" onSubmit={handleSubmit(handleRegisterSubmit)}>
      <div className="row">
        {/* <!-- Input --> */}
        <div className="form-group col-lg-7 col-md-12">
          <label>Old Password </label>
          <input type="password" placeholder="Old Password" className={`${error?.oldPassword?.message ? 'error' : ''}`} {...register("oldPassword")} required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-7 col-md-12">
          <label>New Password</label>
          <input type="password" placeholder="New Password" className={`${error?.newPassword?.message ? 'error' : ''}`} {...register("newPassword")} required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-7 col-md-12">
          <label>Confirm Password</label>
          <input type="password" placeholder="Compare Password" className={`${error?.comparePassword?.message ? 'error' : ''}`} {...register("comparePassword")} required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            Update
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
