
import BreadCrumb from "../../BreadCrumb";
import CopyrightFooter from "../../CopyrightFooter";
import CvUploader from "./components/CvUploader";
import MenuToggler from "../../MenuToggler";
import useUserInfo from "@/utils/hooks/useUserInfo";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { getById, put } from "@/services/api";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import DashboardSidebar from "@/components/header/DashboardSideBar";

const index = () => {
  const userInfo = useUserInfo();
  const [getManager, setManager] = useState([]);
  const queryClient = new QueryClient();

  const { data, isLoading } = useQuery({
    queryKey: [`cvs${userInfo._id}`],
    queryFn: async () => {
      try {
        const res = (await getById('/cv', userInfo._id)).data.data;
        return res;
      } catch (error) {
        if (error.response.data.error === 'Failed to find cv!') {
          toast.info('Please fill the information to get going!')
        }
        return;
      }
    },
    enabled: !!userInfo._id,
  });

  const mutation = useMutation({
    mutationFn: (data) => put('/cv', userInfo._id, data),
    onSuccess: (res) => {
      if (res.data.success) {
        toast.success(res.data.message);
        queryClient.invalidateQueries([`cvs${userInfo._id}`])
      }
    },
    onError: (err) => {
      toast.error(err.response.data.error)
    }
  });

  const handleRegisterSubmit = async () => {
    const formData = new FormData();
    formData.append("parse", JSON.stringify({ cvs: getManager }))

    if (getManager.length > 0) {
      getManager.forEach((file) => formData.append("cv[]", file))
    }
    mutation.mutate(formData);
  };

  useEffect(() => {
    if (data?.cvs?.length > 0) {
      setManager(data?.cvs);
    }

    return () => {
      setManager([])
    }
  }, [data])

  if (isLoading) return <div>Loading...</div>

  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>
      {/* <!-- Header Span for hight --> */}


      <DashboardSidebar />
      {/* <!-- End Candidates Sidebar Menu --> */}

      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb title="CV Manager!" />
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

          <div className="row">
            <div className="col-lg-12">
              {/* <!-- Ls widget --> */}
              <div className="cv-manager-widget ls-widget">
                <div className="widget-title">
                  <h4>Cv Manager</h4>
                </div>
                {/* End widget-title */}
                <div className="widget-content">
                  <CvUploader
                    getManager={getManager}
                    setManager={setManager}
                  />
                </div>
                {/* End widget-content */}
              </div>
              {/* End Ls widget */}
            </div>
            {/* End .col */}
          </div>

          <div className="d-flex justify-content-start">
            <button
              onClick={() => handleRegisterSubmit()}
              className="theme-btn btn-style-one"
            >
              Submit
            </button>
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
