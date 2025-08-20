const JobOverView = ({ data }) => {
  return (
    <div className="widget-content">
      <ul className="job-overview">
        <li>
          <i className="icon icon-calendar"></i>
          <h5>Date Posted:</h5>
          <span>{new Date(data?.createdAt).toDateString()}</span>
        </li>
        {/* <li>
          <i className="icon icon-expiry"></i>
          <h5>Expiration date:</h5>
          <span>April 06, 2024</span>
        </li> */}
        <li>
          <i className="icon icon-location"></i>
          <h5>Location:</h5>
          <span>{data?.location}</span>
        </li>
        <li>
          <i className="icon icon-user-2"></i>
          <h5>Job Title:</h5>
          <span>{data?.title}</span>
        </li>
        <li>
          <i className="icon icon-level-up"></i>
          <h5>Experiece:</h5>

          <span>          {data?.candidate_requirement?.experience} to {data?.candidate_requirement?.experience + 1} years
          </span>
        </li>
        {/* <li>
            <i className="icon icon-clock"></i>
            <h5>Hours:</h5>
            <span>50h / week</span>
          </li> */}
        {/* <li>
          <i className="icon icon-rate"></i>
          <h5>Rate:</h5>
          <span>$15 - $25 / hour</span>
        </li> */}

        <li>
          <i className="icon icon-salary"></i>
          <h5>Salary:</h5>
          {data?.candidate_requirement?.salary_from && data?.candidate_requirement?.salary_to ? <span>₹{data?.candidate_requirement?.salary_from} - ₹{data?.candidate_requirement?.salary_to}</span> : <span>Not Disclosed</span>}
        </li>
        <li>
          <i className="icon icon-open"></i>
          <h5>No of Openings:</h5>
          {data?.opening || 0}        </li>
      </ul>
    </div>
  );
};

export default JobOverView;
