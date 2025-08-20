import MobileMenu from "../../../header/MobileMenu";
import DashboardHeader from "../../../header/DashboardHeader";
import LoginPopup from "../../../common/form/login/LoginPopup";

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
import CandidateList from "./components/CandidateList";
import DashboardSidebar from "@/components/header/DashboardSideBar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Index = () => {
  const userInfo = useUserInfo();
  const [page,setPage ] =useState(1) 
  const [limit ] =useState(6) 
  // dashboard data
  const { data:dashboard, isdashboardLoading,isError } = useQuery({
    queryKey: [`dashboard/employer`, userInfo],
    queryFn: async () => {
      let res = (
        await getById(`dashboard/employer`, userInfo?.userTypeValue?._id)
      ).data.data;
      return res;
    },
    enabled: !!userInfo?.userTypeValue?._id,
  });
  //  recent Application
    const { data:applications, isapplicationLoading,isError:IsApplicationError } = useQuery({
      queryKey: [`application/tracking`,page],
      queryFn: async () => {
        let res = (await get(`application/tracking?page=${page}&limit=${limit}`)).data;
        return res;
      },
      enabled: !!userInfo._id
    });
  if (isdashboardLoading || isapplicationLoading) return <div>Loading...</div>;
  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>
      {/* <!-- Header Span for hight --> */}
      <DashboardSidebar />
      {/* <!-- End User Sidebar Menu --> */}

      {/* <!-- Dashboard --> */}
   
         {isError || IsApplicationError || !userInfo?.userTypeValue?._id ? (
           <div className="text-danger text-center m-auto px-5">
             <Link to="/employers-dashboard/company-profile"> Complete Your Profile</Link>
           </div>
         ) :(
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb title={dashboard?.business_name} />
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

          <div className="row">
            <TopCardBlock data={dashboard} />
          </div>
          {/* End .row top card block */}

          <div className="row">
            <div className="col-xl-7 col-lg-12">
              {/* <!-- Graph widget --> */}
              <div className="graph-widget ls-widget">
                <ProfileChart   data={dashboard}/>
              </div>
              {/* End profile chart */}
            </div>
            {/* End .col */}

            <div className="col-xl-5 col-lg-12">
              {/* <!-- Notification Widget --> */}
              <div className="notification-widget ls-widget">
                <div className="widget-title">
                  <h4>Notifications</h4>
                </div>
                <div className="widget-content">
                  <Notification data={applications} />
                </div>
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-12">
              <div className="applicants-widget ls-widget">
                <div className="widget-title">
                <h4>Matching Candidates</h4>
                </div>
                <div className="widget-content">
                  <div className="row">
                    <CandidateList />
                  </div>
                </div>
              </div>
          
            </div>
            <div className="col-lg-12">
              <div className="applicants-widget ls-widget">
                <div className="widget-title">
                  <h4>Recent Applicants</h4>
                </div>
                <div className="widget-content">
                  <div className="row">
                    <Applicants data={applications} isLoading={isdashboardLoading} setPage={setPage}page={page} limit={limit} />
                  </div>
                </div>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row profile and notificatins */}
        </div>
        {/* End dashboard-outer */}
      </section>
         )
        }
      {/* <!-- End Dashboard --> */}

      <CopyrightFooter />
      {/* <!-- End Copyright --> */}
    </div>
    // End page-wrapper
  );
};

export default Index;
