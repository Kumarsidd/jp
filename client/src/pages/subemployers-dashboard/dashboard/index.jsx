import DashboadHome from "@/components/dashboard-pages/subemployers-dashboard/dashboard";

import MetaComponent from "@/components/common/MetaComponent";
import ErrorBoundary from "@/utils/ErrorBoundary";

const metadata = {
  title: "Sub-Employer Dashboard | ChemPharmaJobs - Manage Hiring & Recruitment",
  description: "Use the sub-employer dashboard to assist with job postings, candidate shortlisting, and hiring management on ChemPharmaJobs.",
};

const DashboardSubemplyerDBPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
     
      <DashboadHome />
    </>
  );
};

export default DashboardSubemplyerDBPage;
