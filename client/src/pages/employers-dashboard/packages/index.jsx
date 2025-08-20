import Packages from "@/components/dashboard-pages/employers-dashboard/packages";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Packages ",
  description: "",
};

const PackageEmploeeDBPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Packages />
    </>
  );
};

export default PackageEmploeeDBPage;
