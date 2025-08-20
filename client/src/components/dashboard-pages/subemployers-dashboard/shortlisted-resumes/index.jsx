import BreadCrumb from "../../BreadCrumb";
import CopyrightFooter from "../../CopyrightFooter";
import WidgetToFilterBox from "./components/WidgetToFilterBox";
import WidgetContentBox from "./components/WidgetContentBox";
import MenuToggler from "../../MenuToggler";
import { useQuery } from "@tanstack/react-query";
import { get, getById } from "@/services/api";
import useUserInfo from "@/utils/hooks/useUserInfo";
import { useState } from "react";
import useDebounce from "@/utils/hooks/useDebounce";
import DashboardSidebar from "@/components/header/DashboardSideBar";

const index = () => {
  const userInfo = useUserInfo();

  const [search, setSearch] = useState({
    page: 1,
    limit: 10,
    createdAt: '',
    search:""
});
const handleSerch=(name,value)=>{
  setSearch((prev)=>({
    ...prev,
    [name]:value
  }))
}
  const debouncedSearch = useDebounce(search.search, 500);

  const { data, isLoading } = useQuery({
    queryKey: [`sub-employers/forwarded`, debouncedSearch,search.createdAt],
    queryFn: async () => {
      let res = (await get(`sub-employers/forwarded?createdAt=${search.createdAt}&page=${search.page}&limit=${search.limit}&name=${debouncedSearch}`)).data;
      return res;
    },
    enabled: !!userInfo._id
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
                  <WidgetToFilterBox search={search} handleSerch={handleSerch} />
                </div>
                {/* End widget top filter box */}
                <WidgetContentBox data={data} search={search}/>
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
