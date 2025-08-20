const WidgetTopFilterBox = ({ data, job, setJob }) => {

  return (
    <div className="chosen-outer">
      <select
        className="chosen-single  chosen-container"
        value={job}
        onChange={e => setJob(e.target.value)}
      >
        <option hidden value={""}>Select Jobs</option>
        {
          data?.length > 0 &&
          data.map(it => (<option key={it.job._id} value={it.job._id}>{it.job.title}</option>))
        }
      </select>
      <button
        className="btn bg-danger chosen-single chosen-container text-white"
        onClick={() => setJob("")}
      >
        Clear All
      </button>
    </div>
  );
};

export default WidgetTopFilterBox;
