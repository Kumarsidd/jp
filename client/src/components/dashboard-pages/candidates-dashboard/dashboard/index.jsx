
import BreadCrumb from "../../BreadCrumb";
import TopCardBlock from "./components/TopCardBlock";
import Notification from "./components/Notification";
import CopyrightFooter from "../../CopyrightFooter";
import JobApplied from "./components/JobApplied";
import MenuToggler from "../../MenuToggler";
import { useQuery } from "@tanstack/react-query";
import useUserInfo from "@/utils/hooks/useUserInfo";
import { useState } from "react";
import { get } from "@/services/api";
import DashboardSidebar from "@/components/header/DashboardSideBar";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const handleError = (error) => {
  console.error(error);
  const errorMessage =
    error?.response?.data?.error || "An unexpected error occurred.";
  toast.error(errorMessage);
  return errorMessage;
};

const Index = () => {
  const userInfo = useUserInfo();
  const [startDate, setStartDate] = useState("");

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [`dashboard/candidate`, startDate],
    queryFn: async () => {
      const res = await get(`dashboard/candidate`);
      return res.data.data;
    },
    onError: handleError,
    enabled: !!userInfo._id,
  });

  const [search, setSearch] = useState({
    page: 1,
    limit: 10,
    clear: false,
    keyword: userInfo?.userTypeValue?.designation || "",
    location: "",
    categories: "",
    job_type: "",
    date_posted: "",
    experience_from: 0,
    experience_to: 10,
    salary_from: 0,
    salary_to: 10000,
    tags: [],
    sort: "new",
  });

  const {
    data: matchJobs,
    isLoading: matchJobLoading,
    isFetching,
    isPending,
    isError: matchJobError,
    error: matchJobErrorDetails,
  } = useQuery({
    queryKey: ["jobs", userInfo],
    queryFn: async () => {
      const uniqueCategories = [
        ...new Set(
          userInfo?.userTypeValue?.employment?.flatMap((job) =>
            job.categories.map((category) => category.value)
          )
        ),
      ];
      const categoriesString = uniqueCategories.join(", ");
      const res = await get(
        `job?page=${search.page}&categories=${categoriesString}&location=${userInfo?.userTypeValue?.contact?.current_address?.city}`
      );
      return {
        data: res.data.data,
        count: res.data.count,
      };
    },
    onError: handleError,
    enabled: !!userInfo?.userTypeValue && Object.keys(userInfo?.userTypeValue).length > 0,
  });

  if (isPending ||isFetching || isLoading || matchJobLoading) return <div>Loading...</div>;

  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>

      <DashboardSidebar />

      {isError || matchJobError || !userInfo?.userTypeValue?._id ? (
        <div className="text-danger text-center m-auto px-5">
          <Link to="/candidates-dashboard/my-profile"> Complete Your Profile</Link>
        </div>
      ) : (
        <section className="user-dashboard">
          <div className="dashboard-outer">
            <BreadCrumb title={data?.user?.name} />
            <MenuToggler />

            <div className="row">
              <TopCardBlock data={data} />
            </div>

            <div className="row">
              <div className="col-xl-7 col-lg-12">
                <div className="graph-widget ls-widget"></div>
              </div>

              {!matchJobLoading && (
                <div className="col-lg-12">
                  <div className="applicants-widget ls-widget">
                    <div className="widget-title">
                      <h4>Matching Jobs</h4>
                    </div>
                    <div className="widget-content">
                      <div className="row">
                        <JobApplied data={matchJobs?.data || []} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      <CopyrightFooter />
    </div>
  );
};

export default Index;
