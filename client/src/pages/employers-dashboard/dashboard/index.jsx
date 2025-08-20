import DashboadHome from "@/components/dashboard-pages/employers-dashboard/dashboard";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Employer Dashboard | ChemPharmaJobs - Manage Job Listings & Applications",
  description: "Access your employer dashboard to post jobs, review applications, and find the best talent in the Chemical & Pharmaceutical industries with ChemPharmaJobs.",
};

const DashboardEmploeeDBPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <DashboadHome />
    </>
  );
};

export default DashboardEmploeeDBPage;
