import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import { encrypt } from "@/lib/encrypt";
import { login } from "@/store/reducers/user";
import { registerSchema } from "@/validations/login";
import { paths } from "@/services/paths";
import LoginWithSocial from "./LoginWithSocial";
import FormContent from "./FormContent";
import { get, getById, post } from "@/services/api";
import Spinner from "@/utils/hooks/Spinner";

const Register = () => {
  const [params, setSP] = useSearchParams();
  const [type, setType] = useState(params.get("state") || 'Candidate');
  const [isSendingCode, setIsSendingCode] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      userType: type,
    }
  });

  const handleType = (value) => {
    setType(value);
    setValue("userType", value);
  };

  const { data: types, isLoading } = useQuery({
    queryKey: ['userTypes'],
    queryFn: async () => {
      let res = await get('/userType/type');
      return res.data.data;
    }
  });

  const mutation = useMutation({
    mutationFn: (data) => {
      if (data.userType === 'Candidate' || data.userType === 'Employer') {
        data.userType = types.find(item => item.name.toLowerCase() === data.userType.toLowerCase())._id;
      }
      return post('/user/register', data);
    },
    onSuccess: async (res) => {
      if (res.data.success) {
        toast.success(res.data.message);
        localStorage.setItem("email", res.data.data.email);
        navigate(paths.verify + '?email=' + res.data.data.email);
      }
    },
    onError: (err) => {
      toast.error(err.response.data.error);
    }
  });

  useEffect(() => {
    const sendCode = async () => {
      setIsSendingCode(true);
      const url = new URLSearchParams();

      params.get("state")? url.append("state", params.get("state")):url.append("state",type)
      
      params.get("code") && url.append("code", params.get("code"));

      try {
        let res = await get(`/user/google/callback?${url.toString()}`);
        if (res.data.success) {
          sessionStorage.setItem("session", res.data.token);
          let user;
          if (res.data.data) {
            user = (await getById(`/user`, res.data.data._id)).data.data;
          }

          let enData = encrypt(user);
          sessionStorage.setItem("userInfo", enData);
          dispatch(login(enData));

          window.location.href = user.userType.name === 'Candidate' ? paths.candidate : paths.employer;
        }
      } catch (error) {
        console.error("Failed to send code:", error);
        toast.error("Error authenticating with Google. Please try again.");
      } finally {
        setIsSendingCode(false);
      }
    };

    if (params.get("code")) {
      sendCode();
    }
  }, [params, dispatch]);

  if (isLoading || isSendingCode) {
    return <Spinner/>;
  }

  return (
    <div className="form-inner">
      <h3>Create a Free ChemPharma Jobs Account</h3>

      <Tabs defaultIndex={type === 'Employer' ? 1 : 0}>
        <div className="form-group register-dual">
          <TabList className="btn-box row">
            <Tab className="col-lg-6 col-md-12">
              <button 
                className={`theme-btn btn-style-four ${type === 'Candidate' ? 'active' : ''}`} 
                onClick={() => handleType('Candidate')}
              >
                <i className="la la-user"></i> Candidate
              </button>
            </Tab>

            <Tab className="col-lg-6 col-md-12">
              <button 
                className={`theme-btn btn-style-four ${type === 'Employer' ? 'active' : ''}`} 
                onClick={() => handleType('Employer')}
              >
                <i className="la la-briefcase"></i> Employer
              </button>
            </Tab>
          </TabList>
        </div>

        <TabPanel>
          <FormContent 
            handleSubmit={handleSubmit} 
            register={register} 
            mutation={mutation} 
            errors={errors} 
            disabled={!type}
          />
        </TabPanel>

        <TabPanel>
          <FormContent 
            handleSubmit={handleSubmit} 
            register={register} 
            mutation={mutation} 
            errors={errors} 
            disabled={!type}
          />
        </TabPanel>
      </Tabs>

      <div className="bottom-box">
        <div className="text">
          Already have an account?{" "}
          <Link
            to={paths.login}
            className="call-modal login"
            data-bs-dismiss={location.pathname.toLowerCase() === paths.register.toLowerCase() ? '' : "modal"}
            data-bs-toggle={location.pathname.toLowerCase() === paths.register.toLowerCase() ? '' : "modal"}
            data-bs-target={location.pathname.toLowerCase() === paths.register.toLowerCase() ? '' : "#loginPopupModal"}
          >
            Login
          </Link>
        </div>
        <div className="divider">
          <span>or</span>
        </div>
        <LoginWithSocial type={type} disabled={!type} />
      </div>
    </div>
  );
};

export default Register;