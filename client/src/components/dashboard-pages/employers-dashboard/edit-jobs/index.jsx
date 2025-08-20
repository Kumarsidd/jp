import { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

import BreadCrumb from "../../BreadCrumb";
import CopyrightFooter from "../../CopyrightFooter";
import MenuToggler from "../../MenuToggler";

import JobInformation from "./components/JobInformation";
import CandidateRequirement from "./components/CandidateRequirement";
import PersonalDetails from "./components/PersonalDetails";
import AboutCompany from "./components/AboutCompany";
import Timing from "./components/Timing";

import { paths } from "@/services/paths";
import { get, getById, post, put } from "@/services/api";
import { jobSchema } from "@/validations/dashboard/employer/job";
import DashboardSidebar from "@/components/header/DashboardSideBar";

const EditJob = () => {
  const params = useParams();
  const navigate = useNavigate()

  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: [`job${params.id}`],
    queryFn: async () => {
      let res = (await getById('job', params.id)).data.data;
      return res;
    }
  })

  const { register, handleSubmit, watch, formState: { errors }, setValue, reset } = useForm({
    resolver: yupResolver(jobSchema),
    defaultValues: {
      title: '',
      location: '',
      place: '',
      deadline:new Date(),

      categories: [],
      opening: 1,
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
      // timing: {
      //   job: '',
      //   interview: ''
      // },
      // company: {
      //   name: '',
      //   contact_person: '',
      //   phone: '',
      //   email: '',
      //   contact_person_profile: '',
      //   size_of_org: 20,
      //   job_address: '',
      //   vacancy: '',
      // }
    }
  });

  const mutation = useMutation({
    mutationFn: (data) => put(`/job`, params.id, data),
    onSuccess: (res) => {
      if (res.data.success) {
        toast.success(res.data.message);
        navigate(paths.manage_jobs);
        queryClient.invalidateQueries([`job${params.id}`]);
      }
    },
    onError: (err) => {
      //console.log(err)
      toast.error(err.response.data.error)
    }
  });

  const handleRegisterSubmit = async (data) => {
    mutation.mutate(data)
  };

  useEffect(() => {
    if (data) {
      reset({
        title: data.title || '',
        location: data.location || '',
        place: data.place || '',
        categories: data.categories || [],
        jobtype: data.jobtype || [],
        opening: data.opening || 1,
        deadline:data.deadline || new Date(),
        // age: data.age || 18,
        candidate_requirement: {
          experience: data.candidate_requirement.experience ,
          salary_from: data.candidate_requirement.salary_from || null,
          salary_to: data.candidate_requirement.salary_to || null,
          bonus: data.candidate_requirement.bonus || false,
          job_info: data.candidate_requirement.job_info || '',
          skills: data.candidate_requirement.skills || [],
        },
        personal_info: data.personal_info || [{ info: '', assets: [] }],
     
      });
    }

    return () => {
      reset();
    }

  }, [data, reset]);
console.log("singlejob",watch())
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const errorArray = Object.entries(errors);
      toast.error(errorArray[0][0].toUpperCase() + ' section needs to be filled!')
    }
  }, [errors]);
  console.log(errors)
  if (isLoading) return <div>Loading...</div>

  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>
      <DashboardSidebar/>
      {/* <!-- End User Sidebar Menu --> */}

      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <form className="dashboard-outer" >
          <div className="dashboard-outer">
            <BreadCrumb title="Edit Job!" />
            {/* breadCrumb */}

            <MenuToggler />
            {/* Collapsible sidebar button */}

            <div className="row">
              <div className="col-lg-12">
                {/* <!-- Ls widget --> */}
                <div className="ls-widget">
                  <div className="tabs-box">
                    <div className="widget-title">
                      <h4>Edit Job</h4>
                    </div>

                    <div className="widget-content">
                      <JobInformation watch={watch} register={register} setValue={setValue} error={errors} />
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-12">
                <div className="ls-widget">
                  <div className="tabs-box">
                    <div className="widget-title">
                      <h4>Edit Interview Details</h4>
                    </div>
                    <div className="widget-content">
                      <InterviewDetails watch={watch} register={register} setValue={setValue} error={errors} />
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="col-lg-12">
                {/* <!-- Ls widget --> */}
                <div className="ls-widget">
                  <div className="tabs-box">
                    <div className="widget-title">
                      <h4>Edit Candidate Requirement</h4>
                    </div>

                    <div className="widget-content">
                      <CandidateRequirement watch={watch} register={register} setValue={setValue} error={errors} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                {/* <!-- Ls widget --> */}
                <div className="ls-widget">
                  <div className="tabs-box">
                    <div className="widget-title">
                      <h4>Edit Personal details, Education, additional info, Dead Line</h4>
                    </div>

                    <div className="widget-content">
                      <PersonalDetails watch={watch} register={register} setValue={setValue} error={errors} />
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="col-lg-12">
                <div className="ls-widget">
                  <div className="tabs-box">
                    <div className="widget-title">
                      <h4>Edit Timing</h4>
                    </div>

                    <div className="widget-content">
                      <Timing watch={watch} register={register} setValue={setValue} error={errors} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="ls-widget">
                  <div className="tabs-box">
                    <div className="widget-title">
                      <h4>Edit About your Company</h4>
                    </div>

                    <div className="widget-content">
                      <AboutCompany watch={watch} register={register} setValue={setValue} error={errors} />
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="d-flex justify-content-end">
                <button
                  onClick={handleSubmit(handleRegisterSubmit)}
                  className="theme-btn btn-style-one"
                >
                  Submit
                </button>
              </div>
            </div>
            {/* End .row */}
          </div>
          {/* End dashboard-outer */}
        </form>
      </section>
      {/* <!-- End Dashboard --> */}

      <CopyrightFooter />
      {/* <!-- End Copyright --> */}
    </div>
    // End page-wrapper
  );
};

export default EditJob;
