import { Link, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ForgotPasswordSchema } from "@/validations/login";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { paths } from "@/services/paths";
import { getById, post } from "@/services/api";
import { useState } from "react";
import LoginPopup from "./LoginPopup";

const FormContent = () => {
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(ForgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const mutation = useMutation({
    mutationFn: (data) => post('/user/forgot', data),
    onMutate: () => setIsSubmitting(true),
    onSuccess: async (res) => {
      setIsSubmitting(false);
      if (res.data.success) {
        toast.info(res.data.message);
      } 
    },
    onError: (err) => {
      setIsSubmitting(false);
      console.error(err);
      toast.error(err.response?.data?.error || "An error occurred");
    },
  });

  const handleLoginSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <div className="form-inner">
      <h3>Enter Registered Email Id</h3>

      <form onSubmit={handleSubmit(handleLoginSubmit)}>
        <div className="form-group">
          <label>Email</label>
          <input
            className={errors.email ? 'error-border' : ''}
            type="email"
            placeholder="Email"
            required
            {...register("email")}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div className="form-group">
          <button
            className="theme-btn btn-style-one"
            type="submit"
            name="log-in"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </div>
      </form>

      <div className="bottom-box">
        <div className="text">
          Don&apos;t have an account?{" "}
          <Link
            to={paths.register}
            data-bs-toggle={
              location.pathname.toLowerCase() === paths.login.toLowerCase()
                ? ''
                : "modal"
            }
            data-bs-target={
              location.pathname.toLowerCase() === paths.login.toLowerCase()
                ? ''
                : "#registerModal"
            }
          >
            Signup
          </Link>
        </div>
      </div>
      {/* <LoginPopup/> */}
      {/* End bottom-box LoginWithSocial */}
    </div>
  );
};

export default FormContent;
