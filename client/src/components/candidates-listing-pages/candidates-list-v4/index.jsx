import FooterDefault from "../../footer/common-footer";
import FilterTopBox from "./FilterTopBox";
import FilterSidebar from "./FilterSidebar";
import DashboardHeader from "@/components/header/DashboardHeader";
import { useState } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";

const Index = () => {
   // Consolidated state into one object
   const [filters, setFilters] = useState({
    qualification: "",
    keyword: "",
    location:"",
    gender:"",
    category: "",
    experience_from: "",
    experience_to: "",
    sort: "",
    limit: 5,
    createdAt:"",
    page: 1,
  });
  const updateFilters = (key, value) => {
    if(key!=="page"){
      setFilters((prev) => ({ ...prev, [key]: value,page:1 }));
      return 
    }
    setFilters((prev) => ({ ...prev, [key]: value}));

  };
 
  const clearFilters = () => {
    setFilters({
      qualification: "",
      keyword: "",
      location:"",
      gender:"",
      category: "",
      experience_from: "",
      experience_to: "",
      sort: "",
      limit: 5,
      createdAt:"",
      page: 1,
    });
  };
  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>
      <DashboardHeader />
      <Breadcrumb title="Find Candidates" meta="Candidates" />
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
                <FilterSidebar {...{filters, setFilters,updateFilters,clearFilters}} />
              </div>
            </div>
            {/* End filter column for tablet and mobile devices */}

            <div className="filters-column hidden-1023 col-lg-4 col-md-12 col-sm-12">
              <FilterSidebar {...{filters, setFilters,updateFilters,clearFilters}}/>
            </div>
            {/* <!-- End Filters Column for destop and laptop --> */}

            <div className="content-column col-lg-8 col-md-12 col-sm-12">
              <div className="ls-outer">
                <FilterTopBox {...{filters, setFilters,updateFilters,clearFilters}}/>
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

export default Index;
