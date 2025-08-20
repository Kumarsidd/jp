
import BreadCrumb from "../../BreadCrumb";
import CopyrightFooter from "../../CopyrightFooter";
import JobFavouriteTable from "./components/JobFavouriteTable";
import MenuToggler from "../../MenuToggler";
import { useQuery } from "@tanstack/react-query";
import { get } from "@/services/api";
import { useState } from "react";
import DashboardSidebar from "@/components/header/DashboardSideBar";

const index = () => {
   const urlSearch=new URLSearchParams(window.location.search)
  const [search, setSearch] = useState({
    page: 1,
    limit: 10,
    status:urlSearch.get("status") || "shortlisted",
    createdAt: '',
    sort: 'new'
   });
  const { data, isLoading } = useQuery({
    queryKey: ['appliedJobs',search.createdAt,search.status],
    queryFn: async () => {
      let res = (await get(`/application/applied?status=${search.status}&createdAt=${search.createdAt}&page=${search.page}&limit=${search.limit}`)).data.data;
      return res;
    }
  });
   const title=search.status==="rejected"?"Rejected Jobs":search.status==="pending"?"Pending Jobs":"Shortlisted Jobs"
  if (isLoading) return <div>Loading...</div>

  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>
      {/* <!-- Header Span for hight --> */}
      <DashboardSidebar/>

      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb title={title} />
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

          <div className="row">
            <div className="col-lg-12">
              {/* <!-- Ls widget --> */}
              <div className="ls-widget">
                <JobFavouriteTable data={data} />
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
