import Categories from "../components/Categories";
import DestinationRangeSlider from "../components/DestinationRangeSlider";
import CandidatesGender from "../components/CandidatesGender";
import LocationBox from "../components/LocationBox";
import SearchBox from "../components/SearchBox";
import DatePosted from "../components/DatePosted";
import Experience from "../components/Experience";
import Qualification from "../components/Qualification";

const FilterSidebar = ({filters,setFilters,updateFilters,clearFilters}) => {
    // Handlers for updating filters

    return (
        <div className="inner-column pd-right">
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
                        <SearchBox {...{filters, updateFilters,clearFilters}} />
                    </div>
                </div>
                {/* <!-- Filter Block --> */}

                <div className="filter-block">
                    <h4>Location</h4>
                    <div className="form-group">
                        <LocationBox {...{filters, updateFilters,clearFilters}} />
                    </div>
                </div>
                {/* <!-- Filter Block --> */}

                <div className="filter-block">
                    <h4>Job Sector</h4>
                    <div className="form-group">
                        <Categories {...{filters, updateFilters,clearFilters}}/>
                    </div>
                </div>
                {/* <!-- Filter Block --> */}

                <div className="filter-block">
                    <h4>Candidate Gender</h4>
                    <div className="form-group">
                        <CandidatesGender {...{filters, updateFilters,clearFilters}} />
                    </div>
                </div>
                {/* <!-- Filter Block --> */}

                <div className="checkbox-outer">
                    <h4>Date Posted</h4>
                    <DatePosted {...{filters, updateFilters,clearFilters}}/>
                </div>
                {/* <!-- Filter Block --> */}

                <div className="checkbox-outer">
                    <h4>Experience</h4>
                    <Experience {...{filters, updateFilters,clearFilters}}/>
                </div>
                {/* <!-- Filter Block --> */}

                <div className=" checkbox-outer">
                    <h4>Qualification</h4>
                    <Qualification {...{filters, updateFilters,clearFilters}}/>
                </div>
                {/* <!-- Filter Block --> */}
            </div>
            {/* Filter Outer */}
        </div>
    );
};

export default FilterSidebar;
