import RegisterForm from "@/components/pages-menu/register";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Register ",
  description: "",
};

const RegisterPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />

      <RegisterForm />
    </>
  );
};

export default RegisterPage;
