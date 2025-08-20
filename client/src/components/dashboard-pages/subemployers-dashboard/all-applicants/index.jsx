import MobileMenu from "../../../header/MobileMenu";
import DashboardHeader from "../../../header/DashboardHeader";
import LoginPopup from "../../../common/form/login/LoginPopup";

import BreadCrumb from "../../BreadCrumb";
import CopyrightFooter from "../../CopyrightFooter";
import WidgetContentBox from "./components/WidgetContentBox";
import WidgetTopFilterBox from "./components/WidgetTopFilterBox";
import MenuToggler from "../../MenuToggler";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { get, getById, put } from "@/services/api";
import { useState } from "react";
import { toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";

const index = () => {
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();

  const { data: jobNames, isLoading } = useQuery({
    queryKey: ['jobNames'],
    queryFn: async () => {
      let res = (await get("application/jobs/employer/name")).data.data;
      if (!searchParams.get("id")) {
        setJob(res[0]["job"]._id);
      }
      return res;
    }
  });

  const [job, setJob] = useState(searchParams.get("id") || null);

  const { data: currentJob, isLoading: jobLoader } = useQuery({
    queryKey: [`job${job}`, job],
    queryFn: async () => {
      let res = (await getById(`application/job`,job)).data;
      return res;
    },
    enabled: !!job
  });

  if (isLoading || jobLoader) return <div>Loading...</div>
let title=Array.isArray(jobNames) && jobNames.length>0 ?jobNames?.find((item=>item?.job._id===job))?.title:""
//console.log("title??",title)
  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>
      {/* <!-- Header Span for hight --> */}

      <LoginPopup />
      {/* End Login Popup Modal */}

      <DashboardHeader />
      {/* End Header */}

      <MobileMenu />
      {/* End MobileMenu */}

      <DashboardSidebar />
      {/* <!-- End User Sidebar Menu --> */}

      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb title="All Applicants!" />
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

          <div className="row">
            <div className="col-lg-12">
              {/* <!-- Ls widget --> */}
              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Applicant</h4>
                    <WidgetTopFilterBox data={jobNames} job={job} setJob={setJob} />
                  </div>
                  {/* End top widget filter bar */}

                  <WidgetContentBox  data={currentJob}  title={title} />
                  {/* End widget-content */}
                </div>
              </div>
            </div>
          </div>
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
