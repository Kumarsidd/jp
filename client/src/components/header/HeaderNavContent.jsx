import { Link } from "react-router-dom";
import {
  isActiveHeader,
} from "../../utils/linkActiveChecker";

import { useLocation } from "react-router-dom";
import { paths } from "@/services/paths";
import { fetchWishlist } from "@/store/reducers/Whishlist";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import useUserInfo from "@/utils/hooks/useUserInfo";

const HeaderNavContent = () => {
  const  userInfo  = useUserInfo();
  const { pathname } = useLocation();
  const userType = userInfo?.userType?.name?.toLowerCase();

  const dispatch=useDispatch()
  useEffect(() => {
    if (userInfo?._id) {
      dispatch(fetchWishlist());
    }
  }, [userInfo?._id])
  const renderFindJobsLink = () => {
    const isEmployerOrSub = userType === "employer" || userType === "subemployer";
    const linkpath=isEmployerOrSub?paths.candidatelist:paths.job_list
    return (
      <li className={`${isActiveHeader(linkpath,location.pathname) ? "current" : ""}`}>
        <Link to={linkpath}>
          {isEmployerOrSub ? "Candidates" : "Find Jobs"}
        </Link>
      </li>
    );
  };
  return (
    <>
      <nav className="nav main-menu">
        
        {userInfo && (
          <ul className="navigation" id="navbar">
            <li className={`${isActiveHeader(paths.home, pathname) ? "current" : ""}`}>
              <Link to={paths.home}>Home</Link>
            </li>
            {/* End homepage menu items */}
            {renderFindJobsLink()}

            <li className={`${isActiveHeader(paths.blog, pathname) ? "current" : ""}`} >
              <Link to={paths.blog}>Blog</Link>
            </li>
            {/* End Blog menu items */}

            <li className={`${pathname === paths.about ? "current" : ""}`}>
              <Link to={paths.about}>About Us</Link>
            </li>

            <li className={`${pathname === paths.contact ? "current" : ""}`}>
              <Link to={paths.contact}>Contact Us</Link>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default HeaderNavContent;
