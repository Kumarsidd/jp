import MobileMenu from "../../../header/MobileMenu";
import DashboardHeader from "../../../header/DashboardHeader";
import LoginPopup from "../../../common/form/login/LoginPopup";

import BreadCrumb from "../../BreadCrumb";
import CopyrightFooter from "../../CopyrightFooter";
import JobListingsTable from "./components/JobListingsTable";
import MenuToggler from "../../MenuToggler";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { del, get } from "@/services/api";
import { toast } from "react-toastify";
import useUserInfo from "@/utils/hooks/useUserInfo";
import Pagination from "@/utils/hooks/usePagination";
import { useState } from "react";
import useDebounce from "@/utils/hooks/useDebounce";
import DashboardSidebar from "@/components/header/DashboardSideBar";

const index = () => {
  const userInfo = useUserInfo();
  const initialState={
    page: 1,
    limit: 10,
    clear:false,
    keyword:'',
    location: '',
    categories:  '',
    job_type: '',
    createdAt: '',
    experience_from: "",
    experience_to: "",
    salary_from: "",
    salary_to: "",
    tags: [],
    sort: 'new'
}
const [search, setsearch] = useState(initialState);
const debouncedKeyword = useDebounce(search.keyword, 500);
const debouncedLocation = useDebounce(search.location, 500);
const debounceSalarytwo= useDebounce(search.salary_to, 500);
const debouncedsalaryFrom = useDebounce(search.salary_from, 500);
const debouncedExperieneto = useDebounce(search.experience_to, 500);
const debouncedexperienceFrom = useDebounce(search.experience_from, 500);
  const handleChange=(name,value)=>setsearch((prev)=>({...prev,[name]:value}))
  const { data, isLoading } = useQuery({
    queryKey: [`jobs${userInfo._id}`, debouncedKeyword, debouncedLocation, search.sort, search.page, search.categories,search.job_type,debounceSalarytwo,debouncedsalaryFrom,search.createdAt,debouncedExperieneto,debouncedexperienceFrom],
    queryFn: async () => {
      const res = await get(`/job/employer?page=${search.page}&limit=${search.limit}&keyword=${search.keyword}&jobtype=${search.job_type}&location=${search.location}&categories=${search.categories}&sort=${search.sort}&candidate_requirement.salary_to=${search.salary_to}&candidate_requirement.salary_from=${search.salary_from}&createdAt=${search.createdAt}&experience_from=${search.experience_from}&experience_to=${search.experience_to}`);
      return res.data;
    },
    enabled: !!userInfo._id
  });
  const handleClear=()=>setsearch(initialState)
 

  if (isLoading) return <div>Loading....</div>

  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>
      {/* <!-- Header Span for hight --> */}
      <DashboardSidebar/>
      {/* <!-- End User Sidebar Menu --> */}

      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb title="Manage jobs!" />
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

          <div className="row">
            <div className="col-lg-12">
              {/* <!-- Ls widget --> */}
              <div className="ls-widget">
                <JobListingsTable data={data?.data || []} handleChange={handleChange} search={search} handleClear={handleClear} />
                {data?.totalpages &&  <Pagination Page={search.page} limit={search.limit} totalPages={data?.totalpages || 0} handlePageChange={(page)=>handleChange("page",page)} /> }
                
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
