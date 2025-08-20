import MyProfile from "@/components/dashboard-pages/candidates-dashboard/my-profile";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "My Profile ",
  description: "",
};

const MyProfilePage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <MyProfile />
    </>
  );
};

export default MyProfilePage;
