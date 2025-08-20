import DashboardHeader from "@/components/header/DashboardHeader";
import Breadcrumb from "@/components/common/Breadcrumb";
import FooterDefault from "@/components/footer/common-footer";
import PrivacyPolicyAndTerms from "./PrivacyPolicyAndTerms";

const index = () => {
  return (
    <>
    {/* <!-- Header Span --> */}
    <span className="header-span"></span>

    <DashboardHeader />
    {/* End MobileMenu */}

    <section className="tnc-section">
      <div className="auto-container">
        <div className="sec-title text-center">
          <h2>Privacy Policy</h2>
          <div className="text">Home/Privacy Policy</div>
        </div>
        {/* End sec-title */}
        <PrivacyPolicyAndTerms />
      </div>
    </section>
    {/* <!-- End TNC Section --> */}

    <FooterDefault footerStyle="alternate5" />
    {/* <!-- End Main Footer --> */}
  </>
  );
};

export default index;
