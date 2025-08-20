import { Link } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useUserInfo from "@/utils/hooks/useUserInfo";
import { get } from "@/services/api";
import Pagination from "@/utils/hooks/usePagination";
import { API_CANDIDATE_PATH } from "@/lib/config";
import { paths } from "@/services/paths";
import useDebounce from "@/utils/hooks/useDebounce";

const FilterTopBox = ({filters,setFilters,updateFilters,clearFilters}) => {
  const userInfo = useUserInfo();
  const debouncedKeyword = useDebounce(filters.keyword, 500);
  const debouncedLocation = useDebounce(filters.location, 500);
  const debouncedExperieneto = useDebounce(filters.experience_to, 500);
  const debouncedexperienceFrom = useDebounce(filters.experience_from, 500);
  const employerid=userInfo?.parentEmployerId|| userInfo.userTypeValue?._id
  // Fetch candidates & stats
  const { data, isLoading } = useQuery({
    queryKey: [
      "employer/allcandidates",
      "candidates-list-v1",
      debouncedLocation,
      debouncedKeyword,
      debouncedExperieneto,
      debouncedexperienceFrom,
      filters.page,
      filters.category,
      filters.limit,
      filters.gender,
      filters.sort,
      filters.createdAt,
      filters.qualification,
      userInfo,
    ],
    queryFn: async () => {
      const res = await get(
        `employer/allcandidates/${employerid}?gender=${filters.gender}&page=${filters.page}&limit=${filters.limit}&sort=${filters.sort}&location=${filters.location}&category=${filters.category}&createdAt=${filters.createdAt}&experience_from=${filters.experience_from}&experience_to=${filters.experience_to}&keyword=${filters.keyword}&qualification=${filters.qualification}`
      );
      return res.data;
    },
    enabled: !!employerid,
  });

  if (isLoading) return <div>Loading...</div>;

  let content;
  if (Array.isArray(data?.data)) {
    content = data.data.map(({ candidate ,_id}) => (
      <div className="candidate-block-three" key={candidate._id}>
        <div className="inner-box">
          <div className="content">
            <figure className="image">
              <img src={API_CANDIDATE_PATH + candidate?.profile?.filename}
                alt="candidates"
                onError={(e) => (e.target.src = "/images/resource/candidate.png")} />
            </figure>
            <h4 className="name">
              <Link to={`${paths.candidatev2}/${_id}`}>
                {candidate.name}
              </Link>
            </h4>
            <ul className="candidate-info">
              <li className="designation">{candidate.designation}</li>
              <li>
                <span className="icon flaticon-map-locator"></span>{" "}
                {candidate?.contact?.current_address?.country || "N/A"}
              </li>
              <li>
                <span className="icon flaticon-money"></span> ₹
                {candidate?.currentsalary
                  ? `${candidate?.currentsalary} LPA`
                  : "N/A"}
              </li>
            </ul>
          </div>
          <div className="btn-box">
            {/* <button className="bookmark-btn me-2">
              <span className="flaticon-bookmark"></span>
            </button> */}
            <Link
              to={`${paths.candidatev2}/${_id}`}
              className="theme-btn btn-style-three"
            >
              <span className="btn-title">View Profile</span>
            </Link>
          </div>
        </div>
      </div>
    ));
  } else {
    content = <div>No Data Found</div>;
  }

  

  return (
    <>
      <div className="ls-switcher">
        <div className="showing-result">
          <div className="show-1023">
            <button
              type="button"
              className="theme-btn toggle-filters"
              data-bs-toggle="offcanvas"
              data-bs-target="#filter-sidebar"
            >
              <span className="icon icon-filter"></span> Filter
            </button>
          </div>
          <div className="text">
            <strong>{data?.totalCount}</strong> Candidates
          </div>
        </div>

        <div className="sort-by">
          <button
            className="btn btn-danger text-nowrap me-2"
            style={{ minHeight: "45px", marginBottom: "15px" }}
            onClick={clearFilters}
          >
            Clear All
          </button>

          <select
            onChange={(e) => updateFilters("sort", e.target.value)}
            className="chosen-single"
            value={filters.sort}
          >
            <option value="">Sort by (default)</option>
            <option value="new">Newest</option>
            <option value="old">Oldest</option>
          </select>

          <select
            className="chosen-single ms-3"
            onChange={(e) =>
              updateFilters("limit", JSON.parse(e.target.value))
            }
            value={ filters.limit }
          >
            <option value={5}>  5 per page</option>
            <option value={10}>  10 per page</option>
            <option value={15}>
              15 per page
            </option>
            <option value={ 20 }>
              20 per page
            </option>
            <option value={ 25 }>
              25 per page
            </option>
          </select>
        </div>
      </div>

      {content}

      {data?.totalPages && (
        <Pagination
          Page={filters.page}
          limit={filters.limit}
          totalPages={data?.totalPages || 0}
          handlePageChange={(page) => updateFilters("page", page)}
        />
      )}
    </>
  );
};

export default FilterTopBox;
