import JobList from "@/components/job-listing-pages/job-list-v1";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Find Jobs | ChemPharmaJobs - Search Chemical & Pharma Industry Jobs",
  description: "Browse thousands of job openings in the Chemical & Pharmaceutical industries. Apply today and take the next step in your career with ChemPharmaJobs.",
};

const JobListPage1 = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <JobList />
    </>
  );
};

export default JobListPage1;
