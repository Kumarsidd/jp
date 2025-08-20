import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { ChangePasswordSchema } from "@/validations/login";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query"

import { paths } from "@/services/paths";
import { getById, post } from "@/services/api";
import { encrypt } from "@/lib/encrypt";
import { login } from "@/store/reducers/user";
import LoginWithSocial from "../register/LoginWithSocial";

const FormContent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const  token=location.search.split("?token=")[1]
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(ChangePasswordSchema),
    defaultValues: {
      newPassword: '',
      comparePassword: '',
      token:token
    }
  })

  const mutation = useMutation({
    mutationFn: (data) => post('/user/reset', data),
    onSuccess: async (res) => {
      if (!res.data.success) {
        toast.error(res.data.message);
      } else if(res?.data.success) {
      
         sessionStorage.setItem("session", res.data.token)
        let user = (await getById(`/user`, res.data.data._id)).data.data;
        let enData = encrypt(user);
        sessionStorage.setItem("userInfo", enData);
        dispatch(login(enData));
        window.location.href = user.userType.name === 'Candidate' ? paths.candidate_profile : user.userType.name==="Subemployer"?paths.sub_employer_profile:user.userType.name==="Admin"?paths.admin:paths.employer_profile;  
        
      }
    },
    onError: (err) => {
      toast.error(err.response.data.error);
    }
  })

  const handleLoginSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <div className="form-inner">
      <h3>Reset your Password</h3>

      <form onSubmit={handleSubmit(handleLoginSubmit)}>
        <div className="form-group">
          <label>New Password</label>
          <input className={errors.newPassword ? 'error-border' : ''} type="password" placeholder="New Password" required {...register("newPassword")} />
          {errors.newPassword && <p className="error">{errors.newPassword.message}</p>}
        </div>

        <div className="form-group">
          <label> Confirm Password</label>
          <input className={errors.comparePassword ? 'error-border' : ''} type="password" placeholder="Confirm Password" required {...register("comparePassword")} />
          {errors.comparePassword && <p className="error">{errors.comparePassword.message}</p>}
        </div>

        

        <div className="form-group">
          <button className="theme-btn btn-style-one" type="submit" name="log-in">
          Reset Password
          </button>
        </div>
      </form>

      <div className="bottom-box">
        <div className="text">
          Don&apos;t have an account?{" "}
          <Link
            to={paths.register}
            data-bs-toggle={location.pathname.toLowerCase() === paths.login.toLowerCase() ? '' : "modal"}
            data-bs-target={location.pathname.toLowerCase() === paths.login.toLowerCase() ? '' : "#registerModal"}
          >
            Signup
          </Link>
        </div>

      
      </div>
      {/* End bottom-box LoginWithSocial */}
    </div>
  );
};

export default FormContent;
