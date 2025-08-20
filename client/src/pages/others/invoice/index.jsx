import Invoice from "@/components/pages-menu/invoice";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Invoice ",
  description: "",
};

const InvoicePage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />

      <Invoice />
    </>
  );
};

export default InvoicePage;
