import { Link } from "react-router-dom";

const SidebarHeader = () => {
  return (
    <div className="pro-header">
      <Link to="/">
        <img src="/images/logo.png" style={{ height: "50px" }} alt="brand" />
      </Link>
      {/* End logo */}

      <div className="fix-icon" data-bs-dismiss="offcanvas" aria-label="Close">
        <span className="flaticon-close"></span>
      </div>
      {/* icon close */}
    </div>
  );
};

export default SidebarHeader;
