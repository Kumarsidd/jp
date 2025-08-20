
import CopyrightFooter from "../../CopyrightFooter";
import PersonalPortfolio from "./PortFolioResume";
import DashboardSidebar from "@/components/header/DashboardSideBar";

const index = () => {

  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>
      {/* <!-- Header Span for hight --> */}

      <DashboardSidebar/>
      {/* <!-- End Candidates Sidebar Menu --> */}

      {/* <!-- Dashboard --> */}
      <PersonalPortfolio/>
      {/* <!-- End Dashboard --> */}

      <CopyrightFooter />
      {/* <!-- End Copyright --> */}
    </div>
    // End page-wrapper
  );
};

export default index;
