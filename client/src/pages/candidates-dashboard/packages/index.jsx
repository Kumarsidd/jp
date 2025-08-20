import Packages from "@/components/dashboard-pages/candidates-dashboard/packages";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Packages ",
  description: "",
};

const PackagePage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Packages />
    </>
  );
};

export default PackagePage;
