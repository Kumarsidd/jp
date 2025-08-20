import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { paths } from "@/services/paths";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <header
      className={`main-header ${navbar ? "fixed-header animated slideInDown" : ""
        }`}
    >
      <div className="container-fluid">
        {/* <!-- Main box --> */}
        <div className="main-box">
          {/* <!--Nav Outer --> */}
          <div className="nav-outer">
            <div className="logo-box">
              <div className="logo">
                <Link to="/" className="noSticky">
                  <img src="/images/logo.png" style={{ height: "50px" }} alt="logo" title="brand" />
                </Link>
                <Link to="/" className="isSticky">
                  <img
                    src="/images/logo.png"
                    style={{ height: "50px" }}
                    alt="logo"
                    title="brand"
                  />
                </Link>
              </div>
            </div>
          </div>
          {/* End nav-outer */}

          <div className="outer-box">
            <div className="btn-box">
              <Link
                to={paths.employer_post_jobs}
                className="theme-btn btn-style-one"
              >
                <span className="btn-title">Job Post</span>
              </Link>
            </div>
          </div>
          {/* End outer-box */}
        </div>
      </div>
    </header>
  );
};

export default Header;
