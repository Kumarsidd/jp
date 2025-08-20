import LogIn from "@/components/pages-menu/forgot";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Login ",
  description: "",
};

const ForgotPasswordPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />

      <LogIn />
    </>
  );
};

export default ForgotPasswordPage;
