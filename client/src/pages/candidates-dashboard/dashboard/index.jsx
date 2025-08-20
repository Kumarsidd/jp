import DashboadHome from "@/components/dashboard-pages/candidates-dashboard/dashboard";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Candidate Dashboard | ChemPharmaJobs - Manage Your Job Applications",
  description: "Track job applications, update your profile, and connect with top employers in the Chemical & Pharmaceutical industries using ChemPharmaJobs' candidate dashboard",
};

const DashboardPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <DashboadHome />
    </>
  );
};

export default DashboardPage;
