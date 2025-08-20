import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { get, getById } from "@/services/api";
import { API_CANDIDATE_PATH } from "@/lib/config";
import { paths } from "@/services/paths";
import { useNavigate } from "react-router-dom";
import { Alert, Container } from "react-bootstrap";
import useUserInfo from "@/utils/hooks/useUserInfo";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "@/utils/hooks/usePagination";
import { addPage } from "@/features/filter/candidateFilterSlice";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const WidgetContentBox = () => {
  const userInfo = useUserInfo();
  const dispatch = useDispatch();
  const {
    qualification,
    keyword,
    limit,
    page,
    category,
    experience_from,
    experience_to,
  } = useSelector((state) => state.candidateFilter) || {};

  const buildQueryParams = () => {
    let params = { limit, page };

    if (qualification) params.qualification = qualification;
    if (keyword) params.keyword = keyword;
    if (category) params.category = category;
    if (experience_from) params.experience_from = experience_from;
    if (experience_to) params.experience_to = experience_to;

    return params;
  };

  const { data = [], isLoading } = useQuery({
    queryKey: [
      `dashboard/employer`,
      qualification,
      keyword,
      category,
      experience_from,
      experience_to,
      page,
      limit,
    ],
    queryFn: async () => {
      const queryParams = buildQueryParams();
      const queryString = new URLSearchParams(queryParams).toString();

      let res = (await get(`employer/candidates?${queryString}`)).data;

      return res;
    },
    enabled: !!userInfo?.userTypeValue?._id,
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="row">
      {data?.data?.length > 0 ? (
        <>
          {data?.data?.map(({ candidate, jobDetails: job, matchScore = 0, _id }) => (
            <div className="col-lg-12 candidate-block-three" key={candidate._id}>
              <div className="inner-box">
                <div className="content">
                  <figure className="image">
                    <img
                      src={
                        API_CANDIDATE_PATH + candidate?.profile?.filename
                      }
                      alt={candidate.name}
                      onError={(e) => e.target.src = "/images/resource/candidate.png"}

                    />
                  </figure>
                  <h4 className="name">
                    <Link to={`${paths.applicationid}/${_id}`}>
                      {candidate.name}
                    </Link>
                  </h4>
                  <div className="designation mr-5">
                    <Link
                      to={`${paths.job}/${job?._id}`}
                      className="d-flex align-items-center "
                    >
                      <span
                        className="la la-briefcase me-1"
                        // style={{ fontSize: "1.2rem", color: "#6c757d" }}
                      ></span>
                      <span className="fw-semibold ">
                        {job?.title}
                      </span>
                    </Link>
                  </div>
                  <ul className="candidate-info">
                    <li className="designation">{candidate.designation}</li>
                    <li>
                      <span className="icon flaticon-map-locator"></span>{" "}
                      {candidate?.contact?.current_address?.city || "N/A"}
                    </li>
                    <li>

                      <span className="icon flaticon-money"></span> Experience:
                      {candidate.experience} to {candidate.experience + 1} years
                    </li>
                    <li>
                      <span className="icon flaticon-money"></span> Match Score:
                      {matchScore}
                    </li>

                  </ul>

                  <ul className="post-tags">
                    {candidate.employment?.flatMap((emp) =>
                      emp.categories?.map((cat, i) => (
                        <li key={i}>
                          <a href="#">{cat.value}</a>
                        </li>
                      ))
                    )}
                  </ul>
                </div>

                <div className="btn-box"></div>

              </div>
            </div>
          ))}
          {data?.totalPages && (
            <Pagination
              Page={page}
              limit={limit}
              totalPages={data?.totalPages || 0}
              handlePageChange={(page) => dispatch(addPage(page))}
            />
          )}
        </>
      ) : (
        <Container className="mt-4">
          <Alert variant="info" className="text-center">
            <Alert.Heading>No Candidates Found</Alert.Heading>
            <p>There are currently no candidates matching your posted jobs</p>
            <hr />
          </Alert>
        </Container>
      )}
    </div>
  );
};

export default WidgetContentBox;
