import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import BreadCrumb from "../../BreadCrumb";
import CopyrightFooter from "../../CopyrightFooter";
import MenuToggler from "../../MenuToggler";
import ContactInformation from "./components/ContactInformation";
import EducationalQualification from "./components/EducationalQualification";
import EmploymentDetail from "./components/EmploymentDetail";
import Reference from "./components/Reference";
import Conclusion from "./components/Conclusion";
import Profile from "./components/Profile";


import { candidateSchema } from "@/validations/dashboard/candidate";
import { getById, post, put, putMultiForm } from "@/services/api";
import { decrypt, encrypt } from "@/lib/encrypt";
import useUserInfo from "@/utils/hooks/useUserInfo";
import Achievements from "./components/Achievements";
import PreviewOriginalDataModal from "./components/PreviewOrginalData";
import DashboardSidebar from "@/components/header/DashboardSideBar";
import CurrentCompany from "./components/CurrentCompany";


const index = () => {
  const userInfo = useUserInfo();
  
  const [previewData, setPreviewData] = useState(null);
  const [Submitting, setSubmitting] = useState(false);
  const { data, isLoading } = useQuery({
    queryKey: [`candidate${userInfo._id}`],
    queryFn: async () => {
      try {
        const res = await getById('/candidate', userInfo._id);
        return res.data.data;
      } catch (error) {
        if (error.response.data.error === 'Failed to find candidate') {
          toast.info('Please fill the information to get going!')
        }
      }
    },
    enabled: !!userInfo._id,
  });

  const { register,control, handleSubmit, watch, formState: { errors }, setValue, reset } = useForm({
    resolver: yupResolver(candidateSchema),
    defaultValues: {
      myProfile: {
        candidate_name: {
          title: '',
          first: '',
          middle: '',
          last: '',
        },
        designation:"",
        experience:"",

        gender: '',
        dob: new Date(),
        marital_status: '',
        currentsalary:0,
        expectedsalary:0,
        upload_cv: {},
        profile: {}
      },
      contact: {
        email: '',
        phone: '',
        permanent_address: {
          lane1: '',
          lane2: '',
          city: '',
          state: '',
          pin_code: '',
          country: ''
        },
        current_address: {
          lane1: '',
          lane2: '',
          city: '',
          state: '',
          pin_code: '',
          country: ''
        },
      },
     
      education: [
        {
          name: '',
          to: new Date(),
          qualification: '',
        }
      ],
      "achievement": [],
      employment: [
        {
          name: '',
          position: '',
          department: '',
          categories:[],
          scope:"",
          from: new Date(),
          to: new Date(),
        }
      ],
      references: [
        {
          name: '',
          email: '',
          phone: '',
          note: ''
        }
      ],
    
      hear_about_us: '',
      current_company:[]
    }
  });

  const mutation = useMutation({
    mutationFn: (data) => put(`/candidate`, userInfo._id, data),
    onSuccess: async (res) => {
      if (res.data.success) {
        toast.success(res.data.message);
        // sessionStorage.setItem("session", res.data.token)
        let user = (await getById(`/user`, res.data.data.userId)).data.data;
        let enData = encrypt(user);
        sessionStorage.setItem("userInfo", enData);
        setSubmitting(false)
        window.location.reload()
      }
      setSubmitting(false)
    },
    onError: (err) => {
      setSubmitting(false)
      toast.error(err.response.data.error)
    }
  });

  const handleRegisterSubmit = async (data) => {

    const formData = new FormData();
    const name = `${data.myProfile.candidate_name.title} ${data.myProfile.candidate_name.first} ${data.myProfile.candidate_name.middle} ${data.myProfile.candidate_name.last}`;
    const formattedData = {
      name,coverletter:data.coverletter,
      gender: data.myProfile.gender,
      expectedsalary: data.myProfile.expectedsalary,
      currentsalary: data.myProfile.currentsalary,
      designation:data.myProfile.designation,
      email: data.contact.email,
      dob: data.myProfile.dob,
      marital_status: data.myProfile.marital_status,
      contact: data.contact,
      education: data.education,
      employment: data.employment,
      references: data.references,
      hear_about_us: watch("hear_about_us").split(","),
      cv: data.myProfile.upload_cv,
      experience: data.myProfile.experience,
      profile: data.myProfile.profile,
      "achievement": data.achievement,
      current_company:data.current_company || []
    }

    formData.append("parse", JSON.stringify(formattedData))

    formData.append("upload_cv", watch("myProfile.upload_cv"));
    formData.append("profile", watch("myProfile.profile"));
    setSubmitting(true)
    mutation.mutate(formData);
  };

  useEffect(() => {
    if (data) {
      reset({
        myProfile: {
          candidate_name: {
            title: data.name.split(" ")[0],
            first: data.name.split(" ")[1],
            middle: data.name.split(" ")[2],
            last: data.name.split(" ")[3],
          },
          designation:data.designation,
          experience:data.experience,
          gender: data.gender,
          dob: new Date(data.dob),
          marital_status: data.marital_status,
          currentsalary: data.currentsalary || 0,
          expectedsalary: data.expectedsalary || 0,
          upload_cv: data.cv,
          profile: data.profile,
        },
        contact: {
          email: data.contact.email,
          phone: data.contact.phone,
          permanent_address: data.contact.permanent_address,
          current_address: data.contact.current_address,
        },
        education: data.education.map(edu => ({
          ...edu,
          to: new Date(edu.to),
        })),
        achievement:data.achievement || [],
        employment: data.employment.map(emp => ({
          ...emp,
          from: new Date(emp.from),
          to: new Date(emp.to),
        })),
        references: data.references,
        current_company: data.current_company || [],
        hear_about_us: data.hear_about_us.join(","),
      });
    }

    return () => {
      reset();
    }

  }, [data, reset]);

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      console.log({errors})
      const errorArray = Object.entries(errors);
      toast.error(errorArray[0][0].toUpperCase() + ' section needs to be filled!')
    }
  }, [errors])
//console.log("data",data)
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>
      {/* <!-- Header Span for hight --> */}
     <DashboardSidebar/>
      {/* <!-- End Candidates Sidebar Menu --> */}

      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <form className="dashboard-outer" >
          <BreadCrumb title="My Profile!" />
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

          <div className="row">
            <div className="col-lg-12">
              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>My Profile</h4>
                  </div>
                  <div className="widget-content">
                    <Profile watch={watch} register={register} setValue={setValue} error={errors} />
                  </div>
                </div>
              </div>
              {/* <!-- My Profile --> */}

              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Contact Information</h4>
                  </div>
                  {/* End widget-title */}

                  <div className="widget-content">
                    <ContactInformation watch={watch} register={register} setValue={setValue} error={errors} />
                  </div>
                </div>
              </div>
              {/* <!-- Contact Information --> */}

              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Educational Qualification</h4>
                  </div>
                  {/* End widget-title */}
                  <div className="widget-content">
                    <EducationalQualification watch={watch} register={register} setValue={setValue} error={errors} />
                  </div>
                </div>
              </div>
             

              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Achievement </h4>
                  </div>
                  {/* End widget-title */}
                  <div className="widget-content">
                    <Achievements watch={watch} register={register} setValue={setValue} error={errors} control={control}/>
                  </div>
                </div>
              </div>
              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Employment History</h4>
                  </div>
                  {/* End widget-title */}
                  <div className="widget-content">
                    <EmploymentDetail watch={watch} register={register} setValue={setValue} error={errors} control={control}/>
                  </div>
                </div>
              </div>
              {/* <!-- Employment History --> */}

              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title flex-column align-items-start">
                    <h4>References</h4>
                    <p>Work / Personal references.</p>
                  </div>
                  {/* End widget-title */}
                  <div className="widget-content">
                    <Reference watch={watch} register={register} setValue={setValue} error={errors} />
                  </div>
                </div>
              </div>
            
              {/* <!-- Conclusion --> */}
              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Current Company</h4>
                  </div>
                  {/* End widget-title */}
                  <div className="widget-content">
                    <CurrentCompany watch={watch} register={register} setValue={setValue} error={errors}  control={control} />
                  </div>
                </div>
              </div>
              {/* <!-- Conclusion --> */}
              {/* <!-- Conclusion --> */}
              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Conclusion</h4>
                  </div>
                  {/* End widget-title */}
                  <div className="widget-content">
                    <Conclusion watch={watch} register={register} setValue={setValue} error={errors} />
                  </div>
                </div>
              </div>
              {/* <!-- Conclusion --> */}
            </div>
          <PreviewOriginalDataModal previewData={previewData} setPreviewData={setPreviewData}/>
            <div className="d-flex justify-content-end">
              
              <button
                onClick={()=>setPreviewData(watch())}
                className="theme-btn btn-style-two me-2"
              >
                Preview
              </button>
              <button
               disabled={Submitting}
                onClick={handleSubmit(handleRegisterSubmit)}
                className="theme-btn btn-style-one "
              >
                {Submitting?"Submitting":"Submit"}
              </button>
            </div>
          </div>
          {/* End .row */}
        </form>
        {/* End dashboard-outer */}
      </section>
      {/* <!-- End Dashboard --> */}

      <CopyrightFooter />
      {/* <!-- End Copyright --> */}
    </div>
    // End page-wrapper
  );
};

export default index;
