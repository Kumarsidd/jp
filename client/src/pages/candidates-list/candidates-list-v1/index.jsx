import CandidatesList from "@/components/candidates-listing-pages/candidates-list-v1";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Candidates List V1 ",
  description: "",
};

const CandidateListPage1 = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <CandidatesList />
    </>
  );
};

export default CandidateListPage1;
