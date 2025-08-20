
import WidgetToFilterBox from "./components/WidgetToFilterBox";
import WidgetContentBox from "./components/WidgetContentBox";
import { useQuery } from "@tanstack/react-query";
import { get, getById } from "@/services/api";
import useUserInfo from "@/utils/hooks/useUserInfo";
import { useState } from "react";
import useDebounce from "@/utils/hooks/useDebounce";
import DashboardSidebar from "@/components/header/DashboardSideBar";
import BreadCrumb from "../BreadCrumb";
import CopyrightFooter from "../CopyrightFooter";
import MenuToggler from "../MenuToggler";
import { useParams } from "react-router-dom";
import Pagination from "@/utils/hooks/usePagination";

const index = () => {
  const userInfo = useUserInfo();
  const {EmployerId="",SubEmployerId=""}=useParams()
  const initalstate={
    page: 1,
    limit: 10,
    createdAt: '',
    search:""
  }
  const [search, setSearch] = useState(initalstate);

const handleSerch=(name,value)=>{
  setSearch((prev)=>({
    ...prev,
    [name]:value
  }))
}
const handleClear=()=> setSearch(initalstate)

  const debouncedSearch = useDebounce(search.search, 500);

  const { data, isLoading } = useQuery({
    queryKey: [`sub-employers/forwarded`,SubEmployerId,EmployerId,search.page, debouncedSearch,search.createdAt],
    queryFn: async () => {

      let res = (await get(`sub-employers/forwarded?EmployerId=${EmployerId}&SubEmployerId=${SubEmployerId}&createdAt=${search.createdAt}&page=${search.page}&limit=${search.limit}&keyword=${debouncedSearch}`)).data;
      return res;
    },
    enabled: !!EmployerId || !!SubEmployerId || !!userInfo?.userTypeValue?._id,
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
          <BreadCrumb title="Forwrad Applications!" />
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

          <div className="row">
            <div className="col-lg-12">
              <div className="applicants-widget ls-widget">
                <div className="widget-title">
                  <h4>Forwrad Applications</h4>
                  <WidgetToFilterBox search={search} handleSerch={handleSerch} handleClear={handleClear} />
                </div>
                {/* End widget top filter box */}
                <WidgetContentBox data={data} search={search}/>
                {data?.pagination?.totalPages && (
            <Pagination
              Page={search.page}
              limit={search.limit}
              totalPages={data?.pagination?.totalPages || 0}
              handlePageChange={(page) => handleSerch("page",page)}
            />
          )}
              </div>
              {/* <!-- applicants Widget --> */}
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
