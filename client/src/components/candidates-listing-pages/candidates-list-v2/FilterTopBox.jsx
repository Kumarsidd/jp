import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import {  getById } from '@/services/api';
import { API_CANDIDATE_PATH } from '@/lib/config';
import { paths } from '@/services/paths';
import { useNavigate } from 'react-router-dom';
import { Alert, Container } from 'react-bootstrap';
import useUserInfo from '@/utils/hooks/useUserInfo';
import { useQuery } from '@tanstack/react-query';



const FilterTopBox= () => {
  const userInfo = useUserInfo();

  const { data=[], isLoading } = useQuery({
    queryKey: [`dashboard/employer`],
    queryFn: async () => {
      let res = (await getById(`employer/candidates`,userInfo?.userTypeValue?._id)).data.data
      return res;
    },
    enabled: !!userInfo?.userTypeValue?._id
  });

 
 

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
    
      {data.length>0 ?
        data?.map((candidate) => (
      <div className="candidate-block-three" key={candidate._id}>
        <div className="inner-box">
          <div className="content">
            <figure className="image">
              <img 
                src={API_CANDIDATE_PATH+ candidate?.profile?.filename || '/images/resource/candidate.png'} 
                alt={candidate.name} 
              />
            </figure>
            <h4 className="name">
              <Link to={`${paths.applicationid}/${candidate._id}`}>
                {candidate.name}
              </Link>

            </h4>
            <div className="designation mr-5">
                <Link to={`${paths.job}/${job?._id}`}>
                <span className="la la-briefcase"></span>
                  {job?.title}
                </Link>
              </div>
            <ul className="candidate-info">
              <li className="designation">{candidate.designation}</li>
              <li>
                <span className="icon flaticon-map-locator"></span>{" "}
                {candidate?.contact?.current_address?.city || 'N/A'}
              </li>
              <li>
                <span className="icon flaticon-money"></span> Match Score: 
                {candidate.matchScore || 'N/A'}
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

          <div className="btn-box">
          </div>
        </div>
      </div>
    ))
       :
        <Container className="mt-4">
          <Alert variant="info" className="text-center">
            <Alert.Heading>No Candidates Found</Alert.Heading>
            <p>
              There are currently no candidates matching your posted jobs
            </p>
            <hr />
          
          </Alert>
        </Container>
    }

    </>
  );
};

export default FilterTopBox;