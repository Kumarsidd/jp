
import FooterDefault from "@/components/footer/common-footer";
import RelatedJobs from "@/components/job-single-pages/related-jobs/RelatedJobs";
import JobOverView from "@/components/job-single-pages/job-overview/JobOverView";
import JobSkills from "@/components/job-single-pages/shared-components/JobSkills";
import CompnayInfo from "@/components/job-single-pages/shared-components/CompanyInfo";
import SocialTwo from "@/components/job-single-pages/social/SocialTwo";
import JobDetailsDescriptions from "@/components/job-single-pages/shared-components/JobDetailsDescriptions";
import { Link, useParams } from "react-router-dom";

import MetaComponent from "@/components/common/MetaComponent";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { get, getById, put } from "@/services/api";
import { API_EMPLOYER_PATH, API_PROD } from "@/lib/config";
import { paths } from "@/services/paths";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { toast } from "react-toastify";
import useUserInfo from "@/utils/hooks/useUserInfo";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, selectWishlist } from "@/store/reducers/Whishlist";
import DashboardHeader from "@/components/header/DashboardHeader";
import moment from "moment";
const metadata = {
  title: "Job Single Dyanmic V1 ",
  description: "",
};

const JobSingleDynamicV1 = () => {
  const userInfo = useUserInfo();
  const params = useParams();
  const queryClient = useQueryClient();
  const dispatch=useDispatch()
  const SavedJobs = useSelector(selectWishlist);
  const id = params.id;
  //console.log({userInfo})
  const { data, isLoading } = useQuery({
    queryKey: ['job', id],
    queryFn: async () => {
      let res = (await getById('job', id)).data.data;
      return res;
    }
  });

  const { data: jobsData, isLoading: jobsLoader } = useQuery({
    queryKey: ['jobs'],
    queryFn: async () => {
      let res = (await get('job?limit=4&sort=new')).data.data;
      return res;
    }
  });

  const mutation = useMutation({
    mutationFn: (data) => put('application/apply', id),
    onSuccess: async (res) => {
      queryClient.invalidateQueries(["jobs"])
      if (res.data.success) {

        toast.success(res.data.message);
      
      }
    },
    onError: (err) => {
      toast.error(err.response.data.error)
    }
  });

  const handleJobApplySubmit = (data) => {
    if (!userInfo._id) {
      toast.info('Please login as Candidate to Apply Job.');
      return;
    }
    mutation.mutate(data)
  };
  const handleWishist = async (id, operation) => {
    if (!userInfo._id) {
      toast.info('Please login as Candidate to Save Job.');
      return;
    }
    if (id && operation) {
      dispatch(addToWishlist({ id, operation }));
    }
  };
  if (isLoading || jobsLoader) return <div>Loading...</div>;

  return (
    <>
      <MetaComponent meta={metadata} />
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <DashboardHeader />

      {/* <!-- Job Detail Section --> */}
      <section className="job-detail-section">
        <div className="upper-box">
          <div className="auto-container">
            <div className="job-block-seven">
              <div className="inner-box">
                <div className="content">
                  <span className="company-logo">
                    <img src={API_EMPLOYER_PATH + data?.employerId?.logo?.filename} alt="logo"             onError={(e) => e.target.src = "/images/pharma.webp"}
 />
                  </span>
                  <h4>{data?.title ?capitalizeFirstLetter(data?.title):""}</h4>

                  <ul className="job-info">
                    <li>
                      <span className="icon flaticon-briefcase"></span>
                      {data?.employerId?.business_name}
                    </li>
                    {/* compnay info */}
                    <li>
                      <span className="icon flaticon-map-locator"></span>
                      {data?.location}
                    </li>
                    {/* location info */}
                    <li>
                      <span className="icon flaticon-clock-3"></span>{" "}
                      {moment(data?.createdAt).startOf('hour').fromNow()}
                    </li>
                    {/* time info */}
                    <li>
                      <span className="icon flaticon-money"></span>{" "}
                      {data?.candidate_requirement?.salary_from && data?.candidate_requirement?.salary_to?<span>₹{data?.candidate_requirement?.salary_from} - ₹{data?.candidate_requirement?.salary_to} LPA</span>:<span>Not Disclosed</span>}
                    
                    </li>
                    {/* salary info */}
                  </ul>
                  {/* End .job-info */}

                  {/* End .job-other-info */}
                  <ul className="job-other-info">
                    {data?.categories?.map((val, i) => (
                      <li key={i} className={`required`}>
                        {val.label}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* End .content */}

                <div className="btn-box">
                  <button
                    disabled={data?.isApplied ||   mutation.isPending                    } // Check if jobId exists in jobs array
                    className={`theme-btn btn-style-one ${data?.isApplied ? 'disabled' : ''}`}
                    onClick={handleJobApplySubmit}
                  >
                    {data?.isApplied ? 'Applied' : `Apply For Job`}
                  </button>
                  {
                <button className={`bookmark-btn ${SavedJobs.includes(data?._id)?"saved":"" }`}  type="button" onClick={()=>handleWishist(data?._id,SavedJobs.includes(data?._id)?"remove":"add")}>
                  <span className="flaticon-bookmark"></span>
                </button>
                }
                </div>
                {/* End apply for job btn */}

              </div>
            </div>
            {/* <!-- Job Block --> */}
          </div>
        </div>
        {/* <!-- Upper Box --> */}

        <div className="job-detail-outer">
          <div className="auto-container">
            <div className="row">
              <div className="content-column col-lg-8 col-md-12 col-sm-12">
                <JobDetailsDescriptions data={data} />
                {/* End jobdetails content */}

                <div className="other-options">
                  <div className="social-share">
                    <h5>Share this job</h5>
                    <SocialTwo data={data} />
                  </div>
                </div>
                {/* <!-- Other Options --> */}

              </div>
              {/* End .content-column */}

              <div className="sidebar-column col-lg-4 col-md-12 col-sm-12">
                <aside className="sidebar">
                  <div className="sidebar-widget">
                    {/* <!-- Job Overview --> */}
                    <h4 className="widget-title">Job Overview</h4>
                    <JobOverView data={data} />

                    {/* <!-- Map Widget --> */}
                    {/* <h4 className="widget-title mt-5">Job Location</h4>
                    <div className="widget-content">
                      <div className="map-outer">
                        <div style={{ height: "300px", width: "100%" }}>
                          <MapJobFinder />
                        </div>
                      </div>
                    </div> */}
                    {/* <!--  Map Widget --> */}

                    <h4 className="widget-title mt-5">Job Sector</h4>
                    <div className="widget-content">
                      <JobSkills data={data?.categories || []} />
                    </div>
                    <h4 className="widget-title mt-5">Job Skills</h4>
                    <div className="widget-content">
                      <JobSkills data={data?.candidate_requirement?.skills || []} />
                    </div>
                    {/* <!-- Job Skills --> */}
                  </div>
                  {/* End .sidebar-widget */}

                  <div className="sidebar-widget company-widget">
                    <div className="widget-content">
                      <div className="company-title">
                        <div className="company-logo">
                        <img src={API_EMPLOYER_PATH + data?.employerId?.logo?.filename} alt="logo"             onError={(e) => e.target.src = "/images/pharma.webp"}
                        />
                        </div>
                        <h5 className="company-name">{data?.employerId?.business_name}</h5>
                        <Link to={`${paths.publicemployer}/${data?.employerId?._id}`} state={{company:data?.company}} className="profile-link">
                          View company profile
                        </Link>
                      </div>
                      {/* End company title */}

                      <CompnayInfo data={data} />

                      <div className="btn-box">
                        <a
                          href={data?.employerId?.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="theme-btn btn-style-three"
                        >
                          {data?.employerId?.url}
                        </a>
                      </div>
                      {/* End btn-box */}
                    </div>
                  </div>
                  {/* End .company-widget */}
                </aside>
                {/* End .sidebar */}
              </div>
              {/* End .sidebar-column */}
              
              <div className="related-jobs">
                  <div className="title-box">
                    <h3>Related Jobs</h3>
                    <div className="text">
                      {/* 2020 jobs live - 293 added today. */}
                    </div>
                  </div>
                  {/* End title box */}

                  <RelatedJobs  data={jobsData ||[]} handleWishist={handleWishist}/>
                </div>
                {/* <!-- Related Jobs --> */}
            </div>
          </div>
        </div>
        {/* <!-- job-detail-outer--> */}
      </section>
      {/* <!-- End Job Detail Section --> */}

      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default JobSingleDynamicV1;
