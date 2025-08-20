import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import HeaderNavContent from "./HeaderNavContent";
import useUserInfo from "@/utils/hooks/useUserInfo";
import { API_CANDIDATE_PATH, API_EMPLOYER_PATH } from "@/lib/config"
import { useSelector } from "react-redux";
import { selectWishlist } from "@/store/reducers/Whishlist";
import { getDisplayName } from "@/utils/getDisplayName";
import { authverify, paths } from "@/services/paths";
import MobileMenu from "./MobileMenu";
import LoginPopup from "../common/form/login/LoginPopup";
import { DropdownMenu } from "./DropdownMenu";


const DashboardHeader = () => {
  const userInfo = useUserInfo();
  const {menuItems}=useSelector((state)=>state.menu)
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const SavedJobs = useSelector(selectWishlist);

  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      setNavbar(window.scrollY >= 10);
    };
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);
  const renderDropdown = () => {
    const userId = userInfo?._id;
    const userTypeById = userInfo?.userTypeValue?._id;

    const userType = userInfo?.userType?.name?.toLowerCase();
    const userName =getDisplayName(userInfo)
    switch (userType) {
      case "candidate":
        return (
          <>
            <button
              onClick={() => navigate("/candidates-dashboard/saved-jobs")}
              className="menu-btn"
            >
              <Link to={"/candidates-dashboard/saved-jobs"} className="count">
                {SavedJobs?.length}
              </Link>
              <span  onClick={() => navigate("/candidates-dashboard/saved-jobs")} className="icon la la-heart-o"></span>
            </button>
            <DropdownMenu
              menuData={menuItems}
              imgSrc={`${API_CANDIDATE_PATH}${userInfo?.userTypeValue?.profile?.filename}`}
              name={userName}
              path={pathname}
              userTypeById={userTypeById}
              userId={userId}
            />
          </>
        );
      case "employer":
        return (
          <DropdownMenu
            menuData={menuItems}
            imgSrc={`${API_EMPLOYER_PATH}${userInfo?.userTypeValue?.logo?.filename}`}
            name={userName}
            path={pathname}
            userTypeById={userTypeById}
            userId={userId}
          />
        );
      case "subemployer":
        return (
          <DropdownMenu
            menuData={menuItems}
            imgSrc={"/images/resource/candidate.png"}
            name={userName}
            path={pathname}
            userTypeById={userTypeById}
            userId={userId}
          />
        );

      default:
        return <div className="btn-box">
      {(Object.keys(userInfo).length === 0 && !authverify.includes(pathname)) && (
        <a
          className="theme-btn btn-style-three call-modal"
          data-bs-toggle="modal"
          data-bs-target="#loginPopupModal"
        >
          Login / Register
        </a>
      )}
      
       {
        (authverify.includes(pathname) &&
        <Link
        to={!userInfo?.userType?.name?paths.login:paths.employer_post_jobs}
        className="theme-btn btn-style-one"
      >
        Job Post
      </Link>)
       }
      </div>;
    }
  };

  return (
    <>
      <LoginPopup />
      <MobileMenu />
    <header
      className={`main-header ${navbar ? "fixed-header animated slideInDown" : ""}`}
    >
      <div className="main-box">
        <div className="nav-outer">
          <div className="logo-box  px-3">
            <Link to="/">
              <img
                src="/images/logo.png"
                style={{ height: "50px" }}
                alt="brand"
              />
            </Link>
          </div>
          {userInfo && !authverify.includes(pathname) && <HeaderNavContent userInfo={userInfo} />}
        </div>
        <div className="outer-box">
          {renderDropdown()}
        </div>
      </div>
    </header>
    </>
  );
};

export default DashboardHeader;
