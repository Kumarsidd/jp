import Terms from "@/components/pages-menu/terms";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Terms ",
  description: "",
};

const TermsPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />

      <Terms />
    </>
  );
};

export default TermsPage;
