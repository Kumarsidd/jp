import { useQuery } from "@tanstack/react-query";
import CallToActions from "../components/CallToActions";
import Categories from "../components/Categories";
import DatePosted from "../components/DatePosted";
import ExperienceLevel from "../components/ExperienceLevel";
import JobType from "../components/JobType";
import LocationBox from "../components/LocationBox";
import SalaryRangeSlider from "../components/SalaryRangeSlider";
import SearchBox from "../components/SearchBox";

const FilterSidebar = ({ search, setSearch,data }) => {

  return (
    <div className="inner-column">
      <div className="filters-outer">
        <button
          type="button"
          className="btn-close text-reset close-filters show-1023"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
        {/* End .close filter */}

        <div className="filter-block">
          <h4>Search by Keywords</h4>
          <div className="form-group">
            <SearchBox search={search} setSearch={setSearch} />
          </div>
        </div>
        {/* <!-- Filter Block --> */}

        <div className="filter-block">
          <h4>Location</h4>
          <div className="form-group">
            <LocationBox search={search} setSearch={setSearch} />
          </div>

          {/* <p>Radius around selected destination</p>
          <DestinationRangeSlider search={search} setSearch={setSearch} /> */}
        </div>
        {/* <!-- Filter Block --> */}

        <div className="filter-block">
          <h4>Job Sector</h4>
          <div className="form-group">
            <Categories search={search} setSearch={setSearch} />
          </div>
        </div>
        {/* <!-- Filter Block --> */}

        <div className="switchbox-outer">
          <h4>Job type</h4>
          <JobType search={search} setSearch={setSearch} />
        </div>
        {/* <!-- Switchbox Outer --> */}

        <div className="checkbox-outer">
          <h4>Date Posted</h4>
          <DatePosted search={search} setSearch={setSearch} />
        </div>
        {/* <!-- Checkboxes Ouer --> */}

        <div className="checkbox-outer">
          <h4>Experience Level</h4>
          <ExperienceLevel search={search} setSearch={setSearch} data={data} />
        </div>
        {/* <!-- Checkboxes Ouer --> */}

        <div className="filter-block">
          <h4>Salary <span style={{ fontSize: "13px" }}>(Monthly)</span></h4>

          <SalaryRangeSlider search={search} setSearch={setSearch} data={data} />
        </div>
        {/* <!-- Filter Block --> */}

        {/* <div className="filter-block">
          <h4>Tags</h4>
          <Tag search={search} setSearch={setSearch} />
        </div> */}
        {/* <!-- Filter Block --> */}
      </div>
      {/* Filter Outer */}

      {/* <CallToActions /> */}
      {/* <!-- End Call To Action --> */}
    </div>
  );
};

export default FilterSidebar;
