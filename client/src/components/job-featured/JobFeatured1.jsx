
import { useQuery } from "@tanstack/react-query";
import { get } from "@/services/api";
import { JobCard } from "../common/jobcard";

const JobFeatured1 = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['job-6'],
    queryFn: async () => {
      let res = (await get('job?limit=6&sort=new')).data.data;
      return res;
    }
  });

  if (isLoading) {
    return <>Loading...</>
  }

  return (
    <>
      {data?.length > 0 && data.map((item) => (
        <div className="job-block col-lg-6 col-md-12 col-sm-12" key={item._id}>
          <JobCard item={item}/>
        </div>
        // End job-block
      ))}
    </>
  );
};

export default JobFeatured1;
