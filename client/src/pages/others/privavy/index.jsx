import Privacy from "@/components/pages-menu/Privacy";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Privacy ",
  description: "",
};

const PrivacyPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />

      <Privacy />
    </>
  );
};

export default PrivacyPage;
