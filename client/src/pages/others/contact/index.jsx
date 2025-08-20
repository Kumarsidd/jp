import Contact from "@/components/pages-menu/contact";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: " Contact Us | ChemPharmaJobs - Get in Touch Today",
  description: "Have questions? Contact ChemPharmaJobs for support related to job postings, candidate searches, or employer services. We’re here to help!",
};

const ContactPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />

      <Contact />
    </>
  );
};

export default ContactPage;
