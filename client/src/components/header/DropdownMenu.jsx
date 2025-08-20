
import { menuToggle } from "@/features/toggle/toggleSlice";
import { del } from "@/services/api";
import { paths } from "@/services/paths";
import { logout } from "@/store/reducers/user";
import useUserInfo from "@/utils/hooks/useUserInfo";
import { isActiveLink } from "@/utils/linkActiveChecker";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export const DropdownMenu = ({
    menuData,
    imgSrc,
    name,
    path,
    userTypeById,
    userId,
  }) => {
    const userInfo=useUserInfo()
    const dispatch=useDispatch()
    const menuToggleHandler = async (item) => {
      dispatch(menuToggle());
      if (item.name === 'Logout') {
        if (confirm("Are You Sure")) {
          dispatch(logout());
          sessionStorage.clear();
          window.location.href = paths.home;
        }
      }
      if (item.name === 'Delete Profile') {
        try {
          if (confirm("Are You Sure")) {
            const res = await del('/user', userInfo._id);
            if (res.data.success) {
              toast.success(res.data.message);
              sessionStorage.clear();
              window.location.href = "/";
            }
          }
        } catch (err) {
          toast.error(err.response.data.error);
        }
      }
    };
    return (
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
              key={item._id}
              onClick={() => menuToggleHandler(item)}
            >
              <Link
                to={ item.routePath}
              >
                <i className={`la ${item.icon}`}></i> {item.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )}
  