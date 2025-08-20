import Pricing from "@/components/pages-menu/pricing";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Pricing ",
  description: "",
};

const PricingPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />

      <Pricing />
    </>
  );
};

export default PricingPage;
