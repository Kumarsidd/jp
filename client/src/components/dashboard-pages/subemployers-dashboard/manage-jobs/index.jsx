import MobileMenu from "../../../header/MobileMenu";
import DashboardHeader from "../../../header/DashboardHeader";
import LoginPopup from "../../../common/form/login/LoginPopup";

import BreadCrumb from "../../BreadCrumb";
import CopyrightFooter from "../../CopyrightFooter";
import JobListingsTable from "./components/JobListingsTable";
import MenuToggler from "../../MenuToggler";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { del, get } from "@/services/api";
import { toast } from "react-toastify";
import useUserInfo from "@/utils/hooks/useUserInfo";

const index = () => {
  const userInfo = useUserInfo();
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: [`jobs${userInfo._id}`],
    queryFn: async () => {
      const res = await get('/job/employer');
      return res.data.data;
    },
    enabled: !!userInfo._id
  });

  const mutation = useMutation({
    mutationFn: (data) => del('job', data._id),
    onSuccess: (res) => {
      if (res.data.success) {
        toast.success(res.data.message);
        queryClient.invalidateQueries(["jobs", userInfo._id]);
      }
    },
    onError: (err) => {
      toast.error(err.response.data.error)
    }
  })

  const handleJobDelete = (data) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      mutation.mutate({ _id: data });
    }
  }

  if (isLoading) return <div>Loading....</div>

  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>
      {/* <!-- Header Span for hight --> */}

      <LoginPopup />
      {/* End Login Popup Modal */}

      <DashboardHeader />
      {/* End Header */}

      <MobileMenu />
      {/* End MobileMenu */}

      <DashboardSidebar />
      {/* <!-- End User Sidebar Menu --> */}

      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb title="Manage jobs!" />
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

          <div className="row">
            <div className="col-lg-12">
              {/* <!-- Ls widget --> */}
              <div className="ls-widget">
                <JobListingsTable data={data} handleJobDelete={handleJobDelete} />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End dashboard-outer */}
      </section>
      {/* <!-- End Dashboard --> */}

      <CopyrightFooter />
      {/* <!-- End Copyright --> */}
    </div>
    // End page-wrapper
  );
};

export default index;
