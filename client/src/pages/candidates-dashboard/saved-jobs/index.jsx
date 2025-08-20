import SavedJobs from "@/components/dashboard-pages/candidates-dashboard/saved-jobs";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Saved Jobs ",
  description: "",
};

const SavedJobsPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <SavedJobs />
    </>
  );
};

export default SavedJobsPage;
