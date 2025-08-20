import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import MobileSidebar from "./mobile-sidebar";
import { authverify, paths } from "@/services/paths";
import useUserInfo from "@/utils/hooks/useUserInfo";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { selectWishlist } from "@/store/reducers/Whishlist";
import { getDisplayName } from "@/utils/getDisplayName";
import { API_CANDIDATE_PATH, API_EMPLOYER_PATH } from "@/lib/config";
import { isActiveHeader } from "@/utils/linkActiveChecker";

const MobileMenu = () => {
  const userInfo=useUserInfo()
   const SavedJobs = useSelector(selectWishlist);
      const navigate = useNavigate();
      const { pathname } = useLocation();
    const userType = userInfo?.userType?.name?.toLowerCase();
    const userName = getDisplayName(userInfo);
  const renderProfileSection = () => {
    if (Object.keys(userInfo).length===0) return null;

    let profileImg = "/images/resource/candidate.png";
    if (userType === "candidate") {
      profileImg = `${API_CANDIDATE_PATH}${userInfo?.userTypeValue?.profile?.filename}`;
    } else if (userType === "employer") {
      profileImg = `${API_EMPLOYER_PATH}${userInfo?.userTypeValue?.logo?.filename}`;
    }

    return (
      <div className="user-profile-section">
        <div className="profile-header">
        
          <h4 className="profile-name">{userName}</h4>
        </div>
        {/* {userType === "candidate" && (
          <>
              <a to={"/candidates-dashboard/saved-jobs"} className="count">
            {SavedJobs?.length}
          </a>
          <span  onClick={() => navigate("/candidates-dashboard/saved-jobs")} className="icon la la-heart-o"></span>
     
          </>
           )} */}
      </div>
    );
  };


  return (
    // <!-- Main Header-->
    <header className="main-header main-header-mobile">
      <div className="auto-container">
        {/* <!-- Main box --> */}
        <div className="inner-box">
          <div className="nav-outer">
            <div className="logo-box">
              <div className="logo">
                <Link to="/">
                  <img
                    src="/images/logo.png"
                    style={{ height: "50px" }}
                    alt="brand"
                  />
                </Link>
              </div>
            </div>
            {/* End .logo-box */}

            <MobileSidebar />
            {/* <!-- Main Menu End--> */}
          </div>
          {/* End .nav-outer */}

          <div className="outer-box">
            {Object.keys(userInfo).length===0 ?(
              <div className="login-box">
                <a
                  href="#"
                  className="call-modal"
                  data-bs-toggle="modal"
                  data-bs-target="#loginPopupModal"
                >
                  <span className="icon icon-user"></span>
                </a>
              </div>
            ): renderProfileSection()}
           
            <a
              href="#"
              className="mobile-nav-toggler"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasMenu"
            >
              <span className="flaticon-menu-1"></span>
            </a>
            {/* right humberger menu */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default MobileMenu;
