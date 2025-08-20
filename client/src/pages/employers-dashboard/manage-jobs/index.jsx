import ManageJobs from "@/components/dashboard-pages/employers-dashboard/manage-jobs";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Manage Jobs ",
  description: "",
};

const ManageJobsEmploeeDBPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <ManageJobs />
    </>
  );
};

export default ManageJobsEmploeeDBPage;
