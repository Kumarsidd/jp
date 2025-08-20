import employersInfo from "@/data/topCompany";
import FooterDefault from "@/components/footer/common-footer";
import JobDetailsDescriptions from "@/components/employer-single-pages/shared-components/JobDetailsDescriptions";
import RelatedJobs from "@/components/job-single-pages/related-jobs/RelatedJobs";
import MapJobFinder from "@/components/job-listing-pages/components/MapJobFinder";
import Social from "@/components/employer-single-pages/social/Social";
import PrivateMessageBox from "@/components/employer-single-pages/shared-components/PrivateMessageBox";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import MetaComponent from "@/components/common/MetaComponent";
import { get, getById } from "@/services/api";
import { API_EMPLOYER_PATH } from "@/lib/config";
import { useLocation } from "react-router-dom";
import DashboardHeader from "@/components/header/DashboardHeader";

const metadata = {
  title:
    "Employers Single Dyanmic V1 ",
  description: "",
};

const EmployersSingleV1 = () => {
  let params = useParams();
  const id = params.id;

  const { data, isLoading } = useQuery({
    queryKey: ['company', id],
    queryFn: async () => {
      let res = (await getById('company', id)).data.data;
      return res;
    }
  });
  const { data: jobsData, isLoading: jobsLoader } = useQuery({
    queryKey: ['job'], // Remove employer ID dependency
    queryFn: async () => {
      let res = (await get('job?limit=4&sort=new')).data.data;
      return res;
    }
  });
  if (jobsLoader) return <div>Loading...</div>;

  return (
    <>
      <MetaComponent meta={metadata} />
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <DashboardHeader />

      {/* <!-- Job Detail Section --> */}
      <section className="job-detail-section">
        {/* <!-- Upper Box --> */}
        <div className="upper-box">
          <div className="auto-container">
            <div className="job-block-seven">
              <div className="inner-box">
                <div className="content">
                  <span className="company-logo">
                    <img src={API_EMPLOYER_PATH + data?.employerDetails?.logo?.filename} alt="logo"              onError={(e) => e.target.src = "/images/pharma.webp"}
                    />
                  </span>
                  <h4>{data?.employerDetails?.business_name}</h4>

                  <ul className="job-info">
                    <li>
                      <span className="icon flaticon-map-locator"></span>
                      {data?.employerDetails?.address?.city + ", "+data?.employerDetails?.address?.state}
                    </li>
                    {/* compnay info */}
                    <li>
                      <span className="icon flaticon-briefcase"></span>
                      {data?.employerDetails?.categories?.slice(0,1)?.map((item)=>item.label)}
                    </li>
                    {/* location info */}
                    <li>
                      <span className="icon flaticon-telephone-1"></span>
                      {data?.employerDetails?.phone}
                    </li>
                    {/* time info */}
                    <li>
                      <span className="icon flaticon-mail"></span>
                      {data?.employerDetails?.email}
                    </li>
                    {/* salary info */}
                  </ul>
                  {/* End .job-info */}

                  <ul className="job-other-info">
                    <li className="time">Open Jobs – {data?.totalJobs || 0}</li>
                  </ul>
                  {/* End .job-other-info */}
                </div>
                {/* End .content */}

                <div className="btn-box">
                  {/* <button
                    className="theme-btn btn-style-one"
                    data-bs-toggle="modal"
                    data-bs-target="#privateMessage"
                  >
                    Private Message
                  </button> */}
                  {/* <button className="bookmark-btn">
                    <i className="flaticon-bookmark"></i>
                  </button> */}
                </div>
                {/* End btn-box */}

                {/* <!-- Modal --> */}
                <div
                  className="modal fade"
                  id="privateMessage"
                  tabIndex="-1"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="apply-modal-content modal-content">
                      <div className="text-center">
                        <h3 className="title">
                          Send message to {data?.employerDetails?.business_name}
                        </h3>
                        <button
                          type="button"
                          className="closed-modal"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      {/* End modal-header */}

                      <PrivateMessageBox />
                      {/* End PrivateMessageBox */}
                    </div>
                    {/* End .send-private-message-wrapper */}
                  </div>
                </div>
                {/* End .modal */}
              </div>
            </div>
            {/* <!-- Job Block --> */}
          </div>
        </div>
        {/* <!-- Upper Box --> */}

        {/* <!-- job-detail-outer--> */}
        <div className="job-detail-outer">
          <div className="auto-container">
            <div className="row">
              <div className="content-column col-lg-8 col-md-12 col-sm-12">
                {/*  job-detail */}
                <JobDetailsDescriptions  data={data}/>
                {/* End job-detail */}

                {/* <!-- Related Jobs --> */}
                <div className="related-jobs mt-5">
                  <div className="title-box">
                    <h3> {jobsData?.length || 0} Others jobs available</h3>
                    <div className="text">
                      {/* 2020 jobs live - 293 added today. */}
                    </div>
                  </div>
                  {/* End .title-box */}

                  <RelatedJobs data={jobsData || []} />
                  {/* End RelatedJobs */}
                </div>
                {/* <!-- Related Jobs --> */}
              </div>
              {/* End .content-column */}

              <div className="sidebar-column col-lg-4 col-md-12 col-sm-12">
                <aside className="sidebar">
                  <div className="sidebar-widget company-widget">
                    <div className="widget-content">
                      {/*  compnay-info */}
                      <ul className="company-info mt-0">
                        {/* <li>
                          Primary industry: <span>Software</span>
                        </li> */}
                        {/* <li>
                          Company size: <span>{state?.company?.size_of_org || data?.employerDetails?.company?.size_of_org }</span>
                        </li> */}
                        <li>
                          Founded in: <span>{new Date(data?.employerDetails?.year_established).getFullYear()}</span>
                        </li>
                        <li>
                          Phone: <span>{data?.employerDetails?.phone}</span>
                        </li>
                        <li>
                          Email: <span>{data?.employerDetails?.email}</span>
                        </li>
                        <li>
                          Location: <span> {data?.employerDetails?.address?.city + ", "+data?.employerDetails?.address?.state}</span>
                        </li>
                        {/* <li>
                          Social media:s
                          <Social />
                        </li> */}
                      </ul>
                      {/* End compnay-info */}

                      <div className="btn-box">
                        <a
                          href={data?.employerDetails?.url}
                          target="__blank"
                          className="theme-btn btn-style-three"
                          style={{ textTransform: "lowercase" }}
                        >
                       {data?.employerDetails?.url}
                        </a>
                      </div>
                      {/* btn-box */}
                    </div>
                  </div>
                  {/* End company-widget */}
                </aside>
                {/* End .sidebar */}
              </div>
              {/* End .sidebar-column */}
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

export default EmployersSingleV1;
