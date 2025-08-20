import useUserInfo from "@/utils/hooks/useUserInfo";
import { Link } from "react-router-dom";


const CallToAction = () => {
  const userInfo=useUserInfo()
  return (
    <section className="call-to-action">
      <div className="auto-container">
        <div className="outer-box" data-aos="fade-up">
          <div className="content-column">
            <div className="sec-title">
              <h2>Recruiting?</h2>
              <div className="text">
                Advertise your jobs to millions of monthly users and search 15.8
                million
                <br /> CVs in our database.
              </div>
              <Link to={userInfo && userInfo?.userType?.name?.toLowerCase() === 'employer' ?"/employers-dashboard/dashboard":"/register?state=Employer"} className="theme-btn btn-style-one bg-blue">
                <span className="btn-title">Start Recruiting Now</span>
              </Link>
            </div>
          </div>
          {/* End .content-column */}

          <div
            className="image-column"
            style={{ backgroundImage: " url(images/resource/image-1.png)" }}
          >
            <figure className="image">
              <img
               
                src="/images/resource/image-1.png"
                alt="resource"
              />
            </figure>
          </div>
          {/* End .image-column */}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
