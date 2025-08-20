const Notification = ({ data }) => {
  console.log({ data });
  return (
    <ul className="notification-list">
      {data?.data?.map(({ candidate, job, meeting ={}}, index) => (
        <li key={index}>
          <span className="icon flaticon-briefcase"></span>
          <strong>{candidate?.name}</strong> applied for a job
          <span className="colored"> {job?.title}</span>
            {/* <div className="interview-details">
              <p>
                <strong>Interview:</strong> {meeting?.type} on{" "}
                <span className="colored">
                  {new Date(meeting?.date).toDateString()}{" "}
                  at {meeting?.time}
                </span>
              </p>
            </div>
          
          <p>
            <strong>Interview Confirmation:</strong>{" "}
            <span
              className={`${
                meeting.intrviewConfirmation?.confirm ? "confirmed" : "pending"
              }`}
            >
              {meeting?.intrviewConfirmation?.confirm ? "Confirmed" : "Pending"}
            </span>
          </p>
          {meeting?.intrviewConfirmation?.message && (
            <p>
              <strong>Candidate Reply:</strong> {meeting?.intrviewConfirmation?.message}
            </p>
          )} */}
        </li>
      ))}
      {/* End li */}
    </ul>
  );
};

export default Notification;
