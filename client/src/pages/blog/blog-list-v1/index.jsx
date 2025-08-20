import BlogList from "@/components/blog-meu-pages/blog-list-v1";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Blog | ChemPharmaJobs - Career Insights & Industry Trends",
  description: "Stay updated with the latest industry trends, career advice, and job market insights in the Chemical & Pharmaceutical sectors with ChemPharmaJobs.",
};
const BlogListpage1 = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <BlogList />
    </>
  );
};

export default BlogListpage1;
