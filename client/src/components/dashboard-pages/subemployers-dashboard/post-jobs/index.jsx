import { useEffect, useState } from "react";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import MobileMenu from "../../../header/MobileMenu";
import DashboardHeader from "../../../header/DashboardHeader";
import LoginPopup from "../../../common/form/login/LoginPopup";

import BreadCrumb from "../../BreadCrumb";
import CopyrightFooter from "../../CopyrightFooter";
import MenuToggler from "../../MenuToggler";
import JobInformation from "./components/JobInformation";
import CandidateRequirement from "./components/CandidateRequirement";
import PersonalDetails from "./components/PersonalDetails";
import { paths } from "@/services/paths";
import { post } from "@/services/api";
import { jobSchema } from "@/validations/dashboard/employer/job";
import useUserInfo from "@/utils/hooks/useUserInfo";
import PreviewModal from "./components/PreviewModal";

const Index = () => {
  const userInfo = useUserInfo();
  const navigate = useNavigate();
  const queryClient = new QueryClient();
  const [previewData, setPreviewData] = useState(null); // State for preview

  const { register, handleSubmit, watch, formState: { errors }, setValue, reset } = useForm({
    resolver: yupResolver(jobSchema),
    defaultValues: {
      title: '',
      location: '',
      place: '',
      categories: [],
      opening: 1,
      jobtype: "",
      candidate_requirement: {
        experience: '',
        salary_from: null,
        salary_to: null,
        bonus: false,
        job_info: '',
        skills: [],
      },
      personal_info: [
        {
          info: '',
          assets: []
        }
      ],
    }
  });

  const mutation = useMutation({
    mutationFn: (data) => post(`/job`, data),
    onSuccess: (res) => {
      if (res.data.success) {
        toast.success(res.data.message);
        navigate(paths.manage_jobs);
        queryClient.invalidateQueries([`jobs${userInfo._id}`])
      }
    },
    onError: (err) => {
      toast.error(err.response.data.error);
    }
  });

  const handleRegisterSubmit = async (data) => {
    mutation.mutate(data);
  };

  const handlePreview = () => {
    const data = watch(); // Get current form values
    setPreviewData(data); // Set data for preview
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const errorArray = Object.entries(errors);
      toast.error(errorArray[0][0].toUpperCase() + ' section needs to be filled!');
    }
  }, [errors]);

  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>
      <LoginPopup />
      <DashboardHeader />
      <MobileMenu />
      <DashboardSidebar />

      <section className="user-dashboard">
        <form className="dashboard-outer">
          <div className="dashboard-outer">
            <BreadCrumb title="Post a New Job!" />
            <MenuToggler />

            <div className="row">
              <div className="col-lg-12">
                <div className="ls-widget">
                  <div className="tabs-box">
                    <div className="widget-title">
                      <h4>Post Job</h4>
                    </div>
                    <div className="widget-content">
                      <JobInformation watch={watch} register={register} setValue={setValue} error={errors} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="ls-widget">
                  <div className="tabs-box">
                    <div className="widget-title">
                      <h4>Candidate Requirement</h4>
                    </div>
                    <div className="widget-content">
                      <CandidateRequirement watch={watch} register={register} setValue={setValue} error={errors} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="ls-widget">
                  <div className="tabs-box">
                    <div className="widget-title">
                      <h4>Personal Details, Education, Additional Info</h4>
                    </div>
                    <div className="widget-content">
                      <PersonalDetails watch={watch} register={register} setValue={setValue} error={errors} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-end">
                <button
                  type="button"
                  onClick={handlePreview}
                  className="theme-btn btn-style-two"
                >
                  Preview
                </button>

                <button
                  type="button"
                  onClick={handleSubmit(handleRegisterSubmit)}
                  className="theme-btn btn-style-one"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>

        <PreviewModal previewData={previewData} setPreviewData={setPreviewData}/>
      <CopyrightFooter />
    </div>
  );
};

export default Index;
