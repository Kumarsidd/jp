

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {

  const navigate = useNavigate();

  const [search, setSearch] = useState({
    keyword: '',
    location: ''
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/job-list-v1?keyword=${search.keyword}&location=${search.location}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="form-group col-lg-5 col-md-12 col-sm-12">
          <span className="icon flaticon-search-1"></span>
          <input
            type="text"
            name="keyword"
            defaultValue={search.keyword}
            onChange={(e) => setSearch((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
            placeholder="Job title, keywords, or company"
          />
        </div>
        {/* <!-- Form Group --> */}

        <div className="form-group col-lg-4 col-md-12 col-sm-12 location">
          <span className="icon flaticon-map-locator"></span>
          <input
            type="text"
            name="location"
            defaultValue={search.location}
            onChange={(e) => setSearch((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
            placeholder="City or postcode"
          />
        </div>
        {/* <!-- Form Group --> */}

        <div className="form-group col-lg-3 col-md-12 col-sm-12 btn-box">
          <button type="submit" className="theme-btn btn-style-one" >
            <span className="btn-title">Find Jobs</span>
          </button>
        </div>
      </div>
      {/* End .row */}
    </form>
  );
};

export default SearchForm;
