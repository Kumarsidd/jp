import Faq from "@/components/pages-menu/faq";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Faq ",
  description: "",
};

const FaqPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />

      <Faq />
    </>
  );
};

export default FaqPage;
