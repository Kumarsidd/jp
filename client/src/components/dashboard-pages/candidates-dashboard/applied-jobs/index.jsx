
import BreadCrumb from "../../BreadCrumb";
import CopyrightFooter from "../../CopyrightFooter";
import JobListingsTable from "./components/JobListingsTable";
import MenuToggler from "../../MenuToggler";
import { useQuery } from "@tanstack/react-query";
import { get } from "@/services/api";
import { useState } from "react";
import DashboardSidebar from "@/components/header/DashboardSideBar";
import Pagination from "@/utils/hooks/usePagination";

const index = () => {

  const [search, setSearch] = useState({
    page: 1,
    limit: 5,
    createdAt: '',
    sort: 'new'
});
const handleSerch=(name,value)=>{
  setSearch((prev)=>({
    ...prev,
    [name]:value
  }))
}
  const { data, isLoading } = useQuery({
    queryKey: ['appliedJobs',search.createdAt,search.page],
    queryFn: async () => {
      let res = (await get(`/application/applied?createdAt=${search.createdAt}&page=${search.page}&limit=${search.limit}`)).data;
      return res;
    }
  });
  //console.log("data???",data)
  // const pagination=usePaginationhook()
  if (isLoading) return <div>Loading...</div>
  console.log("totalpges",data?.totalPages)
  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>
      {/* <!-- Header Span for hight --> */}

      <DashboardSidebar />
      {/* <!-- End Candidates Sidebar Menu --> */}

      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb title="Applied jobs!" />
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

          <div className="row">
            <div className="col-lg-12">
              {/* <!-- Ls widget --> */}
              <div className="ls-widget">
                <JobListingsTable data={data?.data || []} search={search} setSearch={ setSearch} handleSerch={handleSerch}/>
              </div>
              {data?.totalPages && (
            <Pagination
            totalPages={data?.totalPages || 0}
              Page={search.page}
              handlePageChange={(page) => handleSerch("page",page)}
              limit={search.limit}
            />
          )}
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
