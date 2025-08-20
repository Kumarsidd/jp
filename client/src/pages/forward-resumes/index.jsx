import ShortlistedResumes from "@/components/dashboard-pages/forward-resumes";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Forwrad Applications!",
  description: "",
};

const ShortListedResumeEmploeeDBPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <ShortlistedResumes />
    </>
  );
};

export default ShortListedResumeEmploeeDBPage;
