
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
import DashboardSidebar from "@/components/header/DashboardSideBar";
import Pagination from "@/utils/hooks/usePagination";

const index = () => {
  const [status,setStatus]=useState("")
  const [searchParams, setSearchParams] = useSearchParams();
  const [page,setPage]=useState(1)
  const [limit,setLimit]=useState(10)

  const { data: jobNames, isLoading } = useQuery({
    queryKey: ['jobNames'],
    queryFn: async () => {
      let res = (await get("application/jobs/employer/name")).data.data;
      return res;
    }
  });

const [job, setJob] = useState(searchParams.get("id") || "")
  const { data: currentJob, isLoading: jobLoader } = useQuery({
    queryKey: [`application/tracking`, job,page,status],
    queryFn: async () => {
      let res = (await get(`application/tracking?status=${status}&jobid=${job}&page=${page}&limit=${limit}`,)).data;
      return res;
    },
  });

  if (isLoading || jobLoader) return <div>Loading...</div>
let title=Array.isArray(jobNames) && jobNames.length>0 ?jobNames?.find((item=>item?.job._id===job))?.title:""
//console.log("title??",title)
  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>
      {/* <!-- Header Span for hight --> */}
      <DashboardSidebar/>
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

                  <WidgetContentBox  data={currentJob}  title={title}  setStatus={setStatus}/>
                  {/* End widget-content */}
                </div>
                {currentJob?.totalPages && (
            <Pagination
              Page={page}
              limit={limit}
              totalPages={currentJob?.totalPages || 0}
              handlePageChange={(page) => setPage(page)}
            />
          )}
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
