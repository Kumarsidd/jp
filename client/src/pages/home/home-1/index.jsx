import React from "react";
import Home from "@/components/home-1";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "ChemPharma Jobs | Find Top Careers in Chemical & Pharma Industry",
  description: "Chem Pharma",
};

const HomePage1 = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Home />
    </>
  );
};

export default HomePage1;
