
import FooterDefault from "@/components/footer/common-footer";
import { useParams } from "react-router-dom";
import MetaComponent from "@/components/common/MetaComponent";
import { useQuery } from "@tanstack/react-query";
import { getById } from "@/services/api";
import { API_CANDIDATE_PATH } from "@/lib/config";
import { toast } from "react-toastify";
import useUserInfo from "@/utils/hooks/useUserInfo";
import DashboardHeader from "@/components/header/DashboardHeader";
import JobSkills from "@/components/candidates-single-pages/shared-components/JobSkills";

const metadata = {
  title:
    "Candidate Single Dyanmic V1 ",
  description: "",
};

const CandidateSingleDynamicV1 = () => {
  let params = useParams();
  const userInfo = useUserInfo()

  const id = params.id;

  const { data, isLoading } = useQuery({
    queryKey: [`resume${id}`],
    queryFn: async () => {
      let res = (await getById('resume', id)).data.data;
      return res;
    }
  });

  function calculateTotalExperience(experience = 0) {
    console.log("experience", experience)
    return `${experience} - ${experience + 1} years`

  }
  const handleDownload = async () => {
    const fileUrl = API_CANDIDATE_PATH + data?.cv?.filename;

    try {
      // Fetch the file data
      const response = await fetch(fileUrl);
      const blob = await response.blob(); // Get the file as a Blob

      // Create a temporary link element
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob); // Create an object URL for the Blob
      link.download = data?.cv?.filename; // Set the filename for download

      // Append the link to the body, trigger the click, then remove the link
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      toast.info('Download failed');
    }
  };
  const experience = calculateTotalExperience(data?.experience)
  //console.log("SubEmployers",SubEmployers)
  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <MetaComponent meta={metadata} />
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <DashboardHeader />

      {/* <!-- Job Detail Section --> */}
      <section className="candidate-detail-section">
        <div className="upper-box">
          <div className="auto-container">
            <div className="candidate-block-five">
              <div className="inner-box">
                <div className="content">
                  <figure className="image">
                    <img src={API_CANDIDATE_PATH + data?.profile?.filename} alt="avatar" onError={(e) => e.target.src = "/images/resource/candidate.png"}
                    />
                  </figure>
                  <h4 className="name">{data?.name}</h4>

                  <ul className="candidate-info">
                    <li className="designation">{data?.designation || ''}</li>
                    <li>
                      <span className="icon flaticon-map-locator"></span>
                      {`${data?.contact?.permanent_address?.state}, ${data?.contact?.permanent_address?.country}`}
                    </li>
                    <li>
                      <span className="icon flaticon-money"></span>
                      ₹ {data?.currentsalary} / LPA
                    </li>
                    <li>
                      <span className="icon flaticon-phone"></span>
                      {data?.contact?.phone}
                    </li>
                  </ul>

                  <ul className="post-tags">
                    {data?.skills?.slice(0, 3)?.map((val, i) => (
                      <li key={i}>{val.label}</li>
                    ))}
                  </ul>
                </div>

                <div className="d-flex">
                  <a
                    className="theme-btn btn-style-one me-2"
                    onClick={handleDownload}
                  >
                    Download CV
                  </a>
                </div>


              </div>
            </div>
            {/*  <!-- Candidate block Five --> */}
          </div>
        </div>
        {/* <!-- Upper Box --> */}

        <div className="candidate-detail-outer">
          <div className="auto-container">
            <div className="row">
              <div className="content-column col-lg-8 col-md-12 col-sm-12">
                <div className="job-detail">
                  <div className="video-outer">
                    <h4>Candidates About</h4>
                    {/* <AboutVideo /> */}
                  </div>
                  {/* <!-- About Video Box --> */}
                  <p>
                    {data?.description}
                  </p>

                  {/* <!-- Portfolio --> */}
                  {/* <div className="portfolio-outer">
                    <div className="row">
                      <GalleryBox />
                    </div>
                  </div> */}

                  {/* <!-- Candidate Resume Start --> */}
                  <div className={`resume-outer container`}>
                    <div className="upper-title">
                      <h4>{'Education'}</h4>
                    </div>

                    {data?.education?.length > 0 && data.education.map((item) => (
                      <div className="resume-block" key={item._id}>
                        <div className="inner">
                          {/* <span className="name">{item.qualification?.toUpperCase()}</span> */}
                          <div className="title-box">
                            <div className="info-box">
                              <h3>{item.qualification}</h3>
                              <span>{item.name}</span>
                            </div>
                            <div className="edit-box">
                              <span className="year">{`${new Date(item.to).getFullYear()}`}</span>
                            </div>
                          </div>
                          {/* <div className="text">{item.description}</div> */}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className={`resume-outer theme-blue container`}>
                    <div className="upper-title">
                      <h4>{'Work & Experience'}</h4>
                    </div>

                    {data?.employment?.length > 0 ? data.employment.map((workExp) => (
                      <div className="resume-block" key={workExp._id}>
                        <div className="inner">
                          {/* <span className="name">{workExp.position?.toUpperCase()}</span> */}
                          <div className="title-box">
                            <div className="info-box">
                              <h3>{workExp.position}</h3>
                              <span>{workExp.name}</span>
                            </div>
                            <div className="edit-box">
                              <span className="year">{`${new Date(workExp.from).getFullYear()} - ${new Date(workExp.to).getFullYear()}`}</span>
                            </div>
                          </div>
                          <div className="text">{workExp?.description}</div>
                        </div>
                      </div>
                    )) : <></>}
                  </div>

                  {/* <!-- Candidate Resume End --> */}
                </div>
              </div>
              {/* End .content-column */}

              <div className="sidebar-column col-lg-4 col-md-12 col-sm-12">
                <aside className="sidebar">
                  <div className="sidebar-widget">
                    <div className="widget-content">
                      <ul className="job-overview">
                        <li>
                          <i className="icon icon-calendar"></i>
                          <h5>Experience:</h5>
                          <span>{experience}</span>
                        </li>

                        <li>
                          <i className="icon icon-expiry"></i>
                          <h5>Age:</h5>
                          <span>{new Date().getFullYear() - new Date(data?.dob).getFullYear()} Year</span>
                        </li>

                        <li>
                          <i className="icon icon-rate"></i>
                          <h5>Current Salary:</h5>
                          <span>₹ {data?.currentsalary} LPA</span>
                        </li>

                        <li>
                          <i className="icon icon-salary"></i>
                          <h5>Expected Salary:</h5>
                          <span>₹ {data?.expectedsalary} LPA</span>
                        </li>

                        <li>
                          <i className="icon icon-user-2"></i>
                          <h5>Gender:</h5>
                          <span>{data?.gender}</span>
                        </li>

                        {/* <li>
                          <i className="icon icon-language"></i>
                          <h5>Language:</h5>
                          <span>{data?.languages?.map(item => item.value).join(", ")}</span>
                        </li> */}

                        <li>
                          <i className="icon icon-degree"></i>
                          <h5>Education Level:</h5>
                          <span>
                            {data?.education?.map((val, i, arr) => (
                              <>
                                <a>{val.qualification}</a>
                                <br />
                              </>

                            ))}
                          </span>
                        </li>
                        <h4 className="widget-title mt-5">Job Sector</h4>
                        <div className="widget-content">
                          <JobSkills
                            data={data?.employment
                              ?.flatMap(item => item.categories)
                              ?.filter((category, index, self) =>
                                index === self.findIndex(c => c.value === category.value)
                              )}
                          />                    </div>
                      </ul>
                    </div>
                  </div>
                  {/* End .sidebar-widget conadidate overview */}

                  {/* <div className="sidebar-widget social-media-widget">
                    <h4 className="widget-title">Social media</h4>
                    <div className="widget-content">
                      <div className="social-links">
                        <Social data={data} />
                      </div>
                    </div>
                  </div> */}
                  {/* End .sidebar-widget social-media-widget */}

                  {/* <div className="sidebar-widget">
                    <h4 className="widget-title">Professional Skills</h4>
                    <div className="widget-content">
                      <ul className="job-skills">
                        <JobSkills data={data} />
                      </ul>
                    </div>
                  </div> */}
                  {/* End .sidebar-widget skill widget */}

                  {/* <div className="sidebar-widget contact-widget">
                    <h4 className="widget-title">Contact Us</h4>
                    <div className="widget-content">
                      <div className="default-form">
                        <Contact />
                      </div>
                    </div>
                  </div> */}
                  {/* End .sidebar-widget contact-widget */}
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

export default CandidateSingleDynamicV1;
