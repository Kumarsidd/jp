import LogIn from "@/components/pages-menu/resetpassword";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Login ",
  description: "",
};

const ResetPassword = () => {
  return (
    <>
      <MetaComponent meta={metadata} />

      <LogIn />
    </>
  );
};

export default ResetPassword;
