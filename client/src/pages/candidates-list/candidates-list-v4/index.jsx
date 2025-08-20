import CandidatesList from "@/components/candidates-listing-pages/candidates-list-v4";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Find Candidates | ChemPharmaJobs - Hire Top Industry Talent",
  description: "Looking for skilled professionals in the Chemical & Pharma sectors? Access a vast talent pool of qualified candidates on ChemPharmaJobs.",
};

const CandidateListPage4 = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <CandidatesList />
    </>
  );
};

export default CandidateListPage4;
