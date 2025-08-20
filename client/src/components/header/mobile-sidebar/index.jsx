import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { logout } from "@/store/reducers/user";
import { authverify, paths } from "@/services/paths";
import { isActiveHeader } from "@/utils/linkActiveChecker";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";
import useUserInfo from "@/utils/hooks/useUserInfo";
import { menuToggle } from "@/features/toggle/toggleSlice";
import { toast } from "react-toastify";
import { del } from "@/services/api";
import { getDisplayName } from "@/utils/getDisplayName";
import { selectWishlist } from "@/store/reducers/Whishlist";
import { API_CANDIDATE_PATH, API_EMPLOYER_PATH } from "@/lib/config";

const MobileSidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const userInfo = useUserInfo();
  const { menuItems } = useSelector((state) => state.menu);
  const SavedJobs = useSelector(selectWishlist);
  
  const userType = userInfo?.userType?.name?.toLowerCase();
  const isAuthVerifyPath = authverify.includes(pathname);
  const userName = getDisplayName(userInfo);

  const handleMenuClick = async (item) => {
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
    if (item.routePath) {
      navigate(item.routePath);
    }
  };

  // Group menu items into categories
  const dashboardItems = menuItems.filter(item => 
    !['Logout', 'Delete Profile'].includes(item.name)
  );
  const accountItems = menuItems.filter(item => 
    ['Logout', 'Delete Profile'].includes(item.name)
  );

 

  return (
    <div className="offcanvas offcanvas-start mobile_menu-contnet" tabIndex="-1" id="offcanvasMenu">
      <SidebarHeader />
      
      <Sidebar>
        <Menu>
          {/* Main Navigation Links */}
            <>
              <MenuItem
                onClick={() => navigate(paths.home)}
                className={isActiveHeader(paths.home, pathname) ? "menu-active-link" : ""}
              >
                Home
              </MenuItem>
              <MenuItem
                onClick={() => navigate(
                  userType === 'employer' || userType === 'subemployer' 
                    ? paths.candidatelist 
                    : paths.job_list
                )}
                className={isActiveHeader(
                  userType === 'employer' || userType === 'subemployer' 
                    ? paths.candidatelist 
                    : paths.job_list, 
                  pathname
                ) ? "menu-active-link" : ""}
              >
                {userType === 'employer' || userType === 'subemployer' ? 'Candidates' : 'Find Jobs'}
              </MenuItem>
              <MenuItem
                onClick={() => navigate(paths.blog)}
                className={isActiveHeader(paths.blog, pathname) ? "menu-active-link" : ""}
              >
                Blog
              </MenuItem>
              <MenuItem
                onClick={() => navigate(paths.about)}
                className={isActiveHeader(paths.about, pathname) ? "menu-active-link" : ""}
              >
                About Us
              </MenuItem>
              <MenuItem
                onClick={() => navigate(paths.contact)}
                className={isActiveHeader(paths.contact, pathname) ? "menu-active-link" : ""}
              >
                Contact Us
              </MenuItem>
            </>
          

          {/* User-specific Menu Items */}
          {Object.keys(userInfo).length>0 && (
            <>
              <SubMenu 
                label="Dashboard" 
                className={isActiveHeader('/dashboard', pathname) ? "menu-active-link" : ""}
              >
                {dashboardItems.map((item) => (
                  <MenuItem
                    key={item._id}
                    onClick={() => handleMenuClick(item)}
                    className={isActiveHeader(item.routePath, pathname) ? "submenu-active-link" : ""}
                  >
                    {item.name}
                  </MenuItem>
                ))}
              </SubMenu>

              <SubMenu 
                label="Account Settings" 
                className={isActiveHeader('/account', pathname) ? "menu-active-link" : ""}
              >
                {accountItems.map((item) => (
                  <MenuItem
                    key={item._id}
                    onClick={() => handleMenuClick(item)}
                    className={isActiveHeader(item.routePath, pathname) ? "submenu-active-link" : ""}
                  >
                    {item.name}
                  </MenuItem>
                ))}
              </SubMenu>
            </>
          )}

        </Menu>
      </Sidebar>

      <SidebarFooter />
    </div>
  );
};

export default MobileSidebar;