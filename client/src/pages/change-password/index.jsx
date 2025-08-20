
import MetaComponent from "@/components/common/MetaComponent";
import ChangePassword from "./ChangePassword";

const metadata = {
  title: "Change Password ",
  description: "",
};

const ChangePasswordEmploeeDBPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <ChangePassword />
    </>
  );
};

export default ChangePasswordEmploeeDBPage;
