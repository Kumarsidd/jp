import Wrapper from "@/layout/Wrapper";
import HomeComponent from "@/components/home-1";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "ChemPharma Jobs | Find Top Careers in Chemical & Pharma Industry",
  description: "ChemPharma - Job Borad for Chemical & Pharma Industry. Find Jobs in Chemical Engineering, Pharmaceutical, Biotech, and more.",
};

export default function Home() {
  return (
    <Wrapper>
      <MetaComponent meta={metadata} />
      <HomeComponent />
    </Wrapper>
  );
}
