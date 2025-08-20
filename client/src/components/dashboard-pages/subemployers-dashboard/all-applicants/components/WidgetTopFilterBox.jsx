const WidgetTopFilterBox = ({ data, job, setJob }) => {

  //console.log({data})

  return (
    <div className="chosen-outer">
      <select
        className="chosen-single chosen-container"
        value={job}
        onChange={e => setJob(e.target.value)}
      >
        <option hidden value={""}>Select Jobs</option>
        {
          data?.length > 0 &&
          data.map(it => (<option key={it.job._id} value={it.job._id}>{it.job.title}</option>))
        }
      </select>
      {/* <!--Tabs Box--> */}

      {/* <select className="chosen-single chosen-container">
        <option>All Status</option>
        <option>Last 12 Months</option>
        <option>Last 16 Months</option>
        <option>Last 24 Months</option>
        <option>Last 5 year</option>
      </select> */}
      {/* <!--Tabs Box--> */}
    </div>
  );
};

export default WidgetTopFilterBox;
