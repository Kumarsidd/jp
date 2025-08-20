import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useState } from "react";

import FooterDefault from "../../../components/footer/common-footer";
import Breadcrumb from "../../common/Breadcrumb";
import DashboardHeader from "@/components/header/DashboardHeader";
import FilterJobsBox from "./FilterJobsBox";
import FilterSidebar from "./FilterSidebar";

import { get } from "@/services/api";
import useDebounce from "@/utils/hooks/useDebounce";

const index = () => {

    const [jobs, setJob] = useState({
        data: [],
        count: 0
    });

    const queryParams = new URLSearchParams(window.location.search);

    const [search, setSearch] = useState({
        page: 1,
        limit: 10,
        clear:false,
        keyword: queryParams.get('keyword') || '',
        location: queryParams.get('location') || '',
        categories: queryParams.get('categories') || '',
        job_type: '',
        date_posted: '',
        experience_from: 0,
        experience_to: 10,
        salary_from: 0,
        salary_to: 10000,
        tags: [],
        sort: 'new'
    });

    const debouncedKeyword = useDebounce(search.keyword, 500);
    const debouncedLocation = useDebounce(search.location, 500);
    const debounceSalarytwo= useDebounce(search.salary_to, 500);
    const debouncedsalaryFrom = useDebounce(search.salary_from, 500);
    const debouncedExperieneto = useDebounce(search.experience_to, 500);
    const debouncedexperienceFrom = useDebounce(search.experience_from, 500);
    
    const { data, isLoading } = useQuery({
        queryKey: ['jobs', debouncedKeyword, debouncedLocation, search.sort, search.page, search.categories,search.job_type,debounceSalarytwo,debouncedsalaryFrom,search.date_posted,debouncedExperieneto,debouncedexperienceFrom],
        queryFn: async () => {
            try {
                let res = await get(`job?page=${search.page}&keyword=${search.keyword}&jobtype=${search.job_type}&location=${search.location}&categories=${search.categories}&sort=${search.sort}&candidate_requirement.salary_to=${search.salary_to}&candidate_requirement.salary_from=${search.salary_from}&createdAt=${search.date_posted}&experience_from=${search.experience_from}&experience_to=${search.experience_to}`);
                setJob(prev => ({
                    data: search.page === 1 || search.clear ?
                        res.data.data :
                        [...prev.data, ...res.data.data],
                    count: res.data.count
                }));
                return res.data;
            } catch (error) {
                toast.error(error.response.data.error);
                return { data: [], count: 0 };
            }
        },
    });
    const { data:SalaryandExp, isLoading:SalaryandExpIsloding } = useQuery({
        queryKey: [`utilities/maxsalary`],
        queryFn: async () => {
          let res = (await get('utilities/maxsalaryandexp')).data.data;
          setSearch((prev)=>({
            ...prev,
            salary_to:res?.maxsalary?.candidate_requirement?.salary_to || 30000,
            experience_to:res?.maxeperience?.candidate_requirement?.experience || 10,
            clear:false
          }))
          return res;
        }
      });
    if (isLoading) return <>Loading.....</>

    return (
        <>
            {/* <!-- Header Span --> */}
            <span className="header-span"></span>

            <DashboardHeader />
        

            <Breadcrumb title="Find Jobs" meta="Jobs" />
            {/* <!--End Breadcrumb Start--> */}

            <section className="ls-section">
                <div className="auto-container">
                    <div className="row">
                        <div
                            className="offcanvas offcanvas-start"
                            tabIndex="-1"
                            id="filter-sidebar"
                            aria-labelledby="offcanvasLabel"
                        >
                            <div className="filters-column hide-left">
                                <FilterSidebar search={search} setSearch={setSearch} data={SalaryandExp}/>
                            </div>
                        </div>
                        {/* End filter column for tablet and mobile devices */}

                        <div className="filters-column hidden-1023 col-lg-4 col-md-12 col-sm-12">
                            <FilterSidebar search={search} setSearch={setSearch} data={SalaryandExp} />
                        </div>
                        {/* <!-- End Filters Column for destop and laptop --> */}

                        <div className="content-column col-lg-8 col-md-12 col-sm-12">
                            <div className="ls-outer">
                                <FilterJobsBox jobs={jobs} search={search} queryParams={queryParams} setSearch={setSearch} data={SalaryandExp} />
                                {/* <!-- ls Switcher --> */}
                            </div>
                        </div>
                        {/* <!-- End Content Column --> */}
                    </div>
                    {/* End row */}
                </div>
                {/* End container */}
            </section>
            {/* <!--End Listing Page Section --> */}

            <FooterDefault footerStyle="alternate5" />
            {/* <!-- End Main Footer --> */}
        </>
    );
};

export default index;
