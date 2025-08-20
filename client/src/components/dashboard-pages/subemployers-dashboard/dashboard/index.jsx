import BreadCrumb from "../../BreadCrumb";
import TopCardBlock from "./components/TopCardBlock";
import ProfileChart from "./components/ProfileChart";
import Notification from "./components/Notification";
import Applicants from "./components/Applicants";
import CopyrightFooter from "../../CopyrightFooter";
import MenuToggler from "../../MenuToggler";
import useUserInfo from "@/utils/hooks/useUserInfo";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { get, getById } from "@/services/api";
import DashboardSidebar from "@/components/header/DashboardSideBar";

const Index = () => {
  const userInfo = useUserInfo();
  const [statrtdate, setStartdate] = useState("")
console.log("userInfo dshboad",userInfo)

  const { data, isLoading } = useQuery({
    queryKey: [`dashboard/employer`, statrtdate],
    queryFn: async () => {
      let res = (await getById(`dashboard/employer`,userInfo?.parentEmployerId)).data.data
      return res;
    },
    enabled: !!userInfo?.parentEmployerId
  });

  if (isLoading) return <div>Loading...</div>
  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>
      {/* <!-- Header Span for hight --> */}

      <DashboardSidebar />
      {/* <!-- End User Sidebar Menu --> */}

      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb title={data?.business_name} />
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

          <div className="row">
            <TopCardBlock data={data} />
          </div>
          {/* End .row top card block */}

          <div className="row">
            <div className="col-xl-7 col-lg-12">
              {/* <!-- Graph widget --> */}
              {/* <div className="graph-widget ls-widget">
                <ProfileChart   data={data}/>
              </div> */}
              {/* End profile chart */}
            </div>
            {/* End .col */}

            <div className="col-xl-5 col-lg-12">
              {/* <!-- Notification Widget --> */}
              {/* <div className="notification-widget ls-widget">
                <div className="widget-title">
                  <h4>Notifications</h4>
                </div>
                <div className="widget-content">
                  <Notification />
                </div>
              </div> */}
            </div>
            {/* End .col */}

            {/* End .col */}
          </div>
          {/* End .row profile and notificatins */}
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

export default Index;
