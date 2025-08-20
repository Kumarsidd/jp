
import MeetingList from "./Meetinglist";
import Breadcrumb from "@/components/common/Breadcrumb";
import MenuToggler from "@/components/dashboard-pages/MenuToggler";
import CopyrightFooter from "@/components/dashboard-pages/CopyrightFooter";
import DashboardSidebar from "@/components/header/DashboardSideBar";

const index = () => {

  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>
      {/* <!-- Header Span for hight --> */}
      <DashboardSidebar />
      {/* <!-- End User Sidebar Menu --> */}

      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <Breadcrumb title="Meeting Lists!" />
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

         <MeetingList/>
          {/* End .row */}
        </div>
        {/* End dashboard-outer */}
      </section>
      {/* <!-- End Dashboard --> */}

      <CopyrightFooter />
      {/* <!-- End Copyright --> */}
    </div>
    // End page-wrapper
  );
};

export default index;
