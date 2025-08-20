
import { JobCard } from "@/components/common/jobcard";

const RelatedJobs = ({ data }) => {
  return (
    <>
      {data.length > 0 && data.map((item) => (
        <div className="job-block" key={item._id}>
        <JobCard  item={item}/>
        </div>
        // End job-block
      ))}
    </>
  );
};

export default RelatedJobs;
