import { useState } from "react";

const FormContent = (props) => {
  const { handleSubmit, register, mutation, errors } = props;

  const [showPassword, setShowPassword] = useState(false);

  const handleRegisterSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(handleRegisterSubmit)}>
      <div className="form-group">
        <label>Email Address</label>
        <input 
          className={errors.email ? 'error-border' : ''} 
          type="email" 
          placeholder="Email" 
          required 
          {...register("email")} 
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>
      {/* name */}

      <div className="form-group">
        <label>Password</label>
        <div className="password-wrapper">
          <input
            className={errors.password ? 'error-border' : ''}
            id="password-field"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
            {...register("password")}
          />
        <span
              className={`toggle-password la la-eye${showPassword ? "" : "-slash"}`}
              onClick={() => setShowPassword(!showPassword)}
            ></span>
        </div>
        {errors.password && <p className="error">{errors.password.message}</p>}
      </div>
      {/* password */}

      <div className="form-group">
        <button className="theme-btn btn-style-one" type="submit">
          Register
        </button>
      </div>
      {/* login */}
    </form>
  );
};

export default FormContent;
