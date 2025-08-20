import LogIn from "@/components/pages-menu/login";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Login ",
  description: "",
};

const LoginPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />

      <LogIn />
    </>
  );
};

export default LoginPage;
