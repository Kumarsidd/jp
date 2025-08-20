import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import HeaderNavContent from "./HeaderNavContent";
import candidatesMenuData from "@/data/candidatesMenuData";
import employerMenu from "@/data/employerMenuData";
import SubemployerMenu from "@/data/SubemployerMenuData";
import AdminMenuData from "@/data/AdminMenuData";
import { isActiveLink } from "@/utils/linkActiveChecker";
import useUserInfo from "@/utils/hooks/useUserInfo";
import { API_CANDIDATE_PATH, API_EMPLOYER_PATH } from "@/lib/config";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { useSelector } from "react-redux";
import { selectWishlist } from "@/store/reducers/Whishlist";
import { useQuery } from "@tanstack/react-query";
import { getById } from "@/services/api";

const DropdownMenu = ({
  menuData,
  imgSrc,
  name,
  path,
  userTypeById,
  userId,
}) => (
  <div className="dropdown dashboard-option">
    <a
      className="dropdown-toggle"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <img
        alt="avatar"
        className="thumb"
        src={imgSrc}
        onError={(e) => (e.target.src = "/images/resource/candidate.png")}
      />
      <span className="name">{name}</span>
    </a>
    <ul className="dropdown-menu">
      {Array.isArray(menuData) &&
        menuData.map((item) => (
          <li
            className={`${isActiveLink(item.routePath, path) ? "active" : ""} mb-1`}
            key={item.id}
            onClick={() => menuToggleHandler(item)}
          >
            <Link
              to={`${
                item.routePath +
                (item.paramtype === "EmployerId" ||
                item.paramtype === "SubEmployerId"
                  ? "/" + userTypeById
                  : "") +
                (item.paramtype === "createdBy" && userId ? "/" + userId : "")
              }`}
            >
              <i className={`la ${item.icon}`}></i> {item.name}
            </Link>
          </li>
        ))}
    </ul>
  </div>
);

const DefaulHeader2 = () => {
  const userInfo = useUserInfo();
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
  const getDisplayName = () => {
    const userType = userInfo?.userType?.name?.toLowerCase();
    if (!userInfo?.userTypeValue) return "My account";
  
    switch (userType) {
      case "employer":
        return userInfo.userTypeValue.business_name
          ? capitalizeFirstLetter(userInfo.userTypeValue.business_name)
          : "My account";
      case "candidate":
        return userInfo.userTypeValue.name
          ? capitalizeFirstLetter(userInfo.userTypeValue.name.split(" ")[1])
          : "My account";
      case "subemployer":
        return userInfo.userTypeValue.name
          ? capitalizeFirstLetter(userInfo.userTypeValue.name.split(" ")[1])
          : "My account";
      default:
        return "My account";
    }
  };
  const renderDropdown = () => {
    const userId = userInfo?._id;
    const userTypeById = userInfo?.userTypeValue?._id;

    const userType = userInfo?.userType?.name?.toLowerCase();
    const userName =getDisplayName()

    // Fetch menu items from the backend
    const { data: menuItems = [], isLoading } = useQuery({
      queryKey: ["user/menu", userId],
      queryFn: async () => {
        try {
          const res = await getById("user/menu", userId);
          return res.data.data;
        } catch (error) {
          console.error("Error fetching menu:", error);
        }
      },
      enabled: Boolean(userId),
    });
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
              <span className="icon la la-heart-o"></span>
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
        return null;
    }
  };

  return (
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
          {userInfo && <HeaderNavContent userInfo={userInfo} />}
        </div>
        <div className="outer-box">
          {!userInfo?.userType?.name && (
            <div className="btn-box">
              <a
                className="theme-btn btn-style-three call-modal"
                data-bs-toggle="modal"
                data-bs-target="#loginPopupModal"
              >
                Login / Register
              </a>
            </div>
          )}
          {renderDropdown()}
        </div>
      </div>
    </header>
  );
};

export default DefaulHeader2;
