import About from "@/components/pages-menu/about";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "About Us | ChemPharmaJobs - Leading Job Portal for Chemical & Pharma Industry",
  description: " Learn about ChemPharmaJobs, a premier job portal dedicated to the Chemical & Pharmaceutical industries. Connecting top talent with leading companies.",
};

const AboutPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />

      <About />
    </>
  );
};

export default AboutPage;
