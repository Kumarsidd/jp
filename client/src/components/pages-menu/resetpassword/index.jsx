import FormContent from "@/components/common/form/resetpassword/FormContent";
import MobileMenu from "../../header/MobileMenu";
import Header from "./Header";
import DashboardHeader from "@/components/header/DashboardHeader";

const index = () => {
  return (
    <>
    <DashboardHeader/>
      <div className="login-section">
        <div
          className="image-layer"
          style={{ backgroundImage: "url(/images/background/12.jpg)" }}
        ></div>
        <div className="outer-box">
          {/* <!-- Login Form --> */}
          <div className="login-form default-form">
            <FormContent />
          </div>
          {/* <!--End Login Form --> */}
        </div>
      </div>
      {/* <!-- End Info Section --> */}
    </>
  );
};

export default index;
