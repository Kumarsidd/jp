import PostJob from "@/components/dashboard-pages/employers-dashboard/post-jobs";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Post Jobs ",
  description: "",
};

const PostJobsEmploeeDBPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <PostJob />
    </>
  );
};

export default PostJobsEmploeeDBPage;
