
import Aos from "aos";
import "aos/dist/aos.css";
import "./styles/index.scss";
import { useEffect } from "react";
import ScrollToTop from "./components/common/ScrollTop";
import { Provider, useSelector } from "react-redux";
import { store } from "./store/store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

if (typeof window !== "undefined") {
  import("bootstrap");
}
import { BrowserRouter, Routes, Route, Outlet, } from "react-router-dom";
import Home from "./pages";
import JobListPage1 from "./pages/job-list/job-list-v1";
import JobSingleDynamicV1 from "./pages/job-single/job-single-v1";
import ScrollTopBehaviour from "./components/common/ScrollTopBehaviour";
import EmployerListPage1 from "./pages/employers-list/employers-list-v1";
import EmployersSingleV1 from "./pages/employers-single/employers-single-v1";
import CandidateSingleDynamicV1 from "./pages/candidates-single/candidates-single-v1";
import CandidateSingleDynamicV2 from "./pages/candidates-single/candidates-single-v2";
import BlogListpage1 from "./pages/blog/blog-list-v1";
import BlogDetailsDynamic from "./pages/blog/blog-details";
import AboutPage from "./pages/others/about";
import PricingPage from "./pages/others/pricing";
import FaqPage from "./pages/others/faq";
import PrivacyPage from "./pages/others/privavy";
import TermsPage from "./pages/others/terms";
import InvoicePage from "./pages/others/invoice";
import ContactPage from "./pages/others/contact";
import NotFoundPage from "./pages/others/404";
import LoginPage from "./pages/others/login";
import RegisterPage from "./pages/others/register";
import Verify from "./pages/others/verify";
import ForgotPasswordPage from "./pages/others/forgot";
import ResetPassword from "./pages/others/resetpassword";

// admin

// eemployers
import DashboardEmploeeDBPage from "./pages/employers-dashboard/dashboard";
import CompanyProfileEmploeeDBPage from "./pages/employers-dashboard/company-profile";
import PostJobsEmploeeDBPage from "./pages/employers-dashboard/post-jobs";
import ManageJobsEmploeeDBPage from "./pages/employers-dashboard/manage-jobs";
import AllApplicantsEmploeesPage from "./pages/employers-dashboard/all-applicants";
import PackageEmploeeDBPage from "./pages/employers-dashboard/packages";
import MessageEmploeeDBPage from "./pages/employers-dashboard/messages";
import ResumeAlertsEmploeeDBPage from "./pages/employers-dashboard/resume-alerts"
import EditJob from "./components/dashboard-pages/employers-dashboard/edit-jobs";
import SubEmployer from "./pages/employers-dashboard/subemployers";
import ForwaredCandidates from "./pages/forward-resumes";
import ShortListedCandidates from "./pages/employers-dashboard/shotlisted-candidates";
// candidates
import DashboardPage from "./pages/candidates-dashboard/dashboard";
import AppliedJobsPage from "./pages/candidates-dashboard/applied-jobs";
import MyProfilePage from "./pages/candidates-dashboard/my-profile";
import MyResumePage from "./pages/candidates-dashboard/my-resume";
import PackagePage from "./pages/candidates-dashboard/packages";
import ShortListedJobsPage from "./pages/candidates-dashboard/short-listed-jobs";
import SavedJobsPage from "./pages/candidates-dashboard/saved-jobs";

// subemployers 
import DashboardSubemplyerDBPage from "./pages/subemployers-dashboard/dashboard";

// authotrizations
import UnauthorizedPage from "./pages/others/UnauthorizedPage";
import ProtectedRoute from "./components/ProtectedRoute";
import MeetingList from "./pages/subemployers-dashboard/Meetings";
import EmployerMeetingList from "./pages/employers-dashboard/Meetings";
import ChangePassword from "./pages/change-password/ChangePassword";
import CandidateListPage4 from "./pages/candidates-list/candidates-list-v4";
import ErrorBoundary from "./utils/ErrorBoundary";
import useFetchMenu from "./utils/hooks/useFetchMenu";
function App() {
  useEffect(() => {
    Aos.init({
      duration: 1400,
      once: true,
    });
  }, []);
  useFetchMenu()
  return (
    <div className="page-wrapper">
      <BrowserRouter>
        <ErrorBoundary>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="job-list-v1" element={<JobListPage1 />} />
              <Route path="job/:id" element={<JobSingleDynamicV1 />} />
              <Route path="employers-list-v1" element={<EmployerListPage1 />} />
              <Route path="employer/:id" element={<EmployersSingleV1 />} />
              <Route path="candidates-list-v1" element={
                <CandidateListPage4 />} />
              <Route path="candidate/:id" element={
                <CandidateSingleDynamicV1 />
            }
              />
              <Route path="candidatev2/:id" element={
                <CandidateSingleDynamicV2 />
             }
              />
              <Route path="blog-list-v1" element={<BlogListpage1 />} />
              <Route path="blog-details/:id" element={<BlogDetailsDynamic />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="pricing" element={<PricingPage />} />
              <Route path="faq" element={<FaqPage />} />
              <Route path="privacy" element={<PrivacyPage />} />
              <Route path="terms" element={<TermsPage />} />
              <Route path="invoice" element={<InvoicePage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="resetpassword" element={<ResetPassword />} />
              <Route path="forgot" element={<ForgotPasswordPage />} />
              <Route path="verify" element={<Verify />} />
              <Route path="/unauthorized" element={<UnauthorizedPage />} />
              <Route path="*" element={<NotFoundPage />} />
              {/* Password Chnage */}
              <Route path="change-password" element={<ChangePassword />} />

              <Route path="employers-dashboard" element={
                <ProtectedRoute requiredRole="employer">
                  <Outlet />
                </ProtectedRoute>
              }
              >
                <Route path="dashboard" element={<DashboardEmploeeDBPage />} />
                <Route path="company-profile" element={<CompanyProfileEmploeeDBPage />} />
                <Route path="subemployer" element={<SubEmployer />} />
                <Route path="post-jobs" element={<PostJobsEmploeeDBPage />} />
                <Route path="edit-job/:id" element={<EditJob />} />
                <Route path="manage-jobs" element={<ManageJobsEmploeeDBPage />} />
                <Route path="all-applicants" element={<AllApplicantsEmploeesPage />} />
                <Route path="forward-resumes/:EmployerId" element={<ForwaredCandidates />} />
                <Route path="shortlisted-candidates/:status" element={<ShortListedCandidates />} />
                <Route path="meetinglinks" element={<EmployerMeetingList />} />
                <Route path="packages" element={<PackageEmploeeDBPage />} />
                <Route path="messages" element={<MessageEmploeeDBPage />} />
                <Route path="resume-alerts" element={<ResumeAlertsEmploeeDBPage />} />
              </Route>
              <Route
                path="subemployers-dashboard"
                element={
                  <ProtectedRoute requiredRole="subemployer">
                    <Outlet />
                  </ProtectedRoute>
                }
              >
                <Route path="dashboard" element={<DashboardSubemplyerDBPage />} />
                <Route path="meetinglinks/:createdBy" element={<MeetingList />} />
                <Route path="forward-resumes/:SubEmployerId" element={<ForwaredCandidates />} />
              </Route>
              <Route
                path="candidates-dashboard"
                element={
                  <ProtectedRoute requiredRole="candidate">
                    <Outlet />
                  </ProtectedRoute>
                }
              >
                <Route path="dashboard" element={<DashboardPage />} />
                <Route path="applied-jobs" element={<AppliedJobsPage />} />
                <Route path="saved-jobs" element={<SavedJobsPage />} />
                <Route path="my-profile" element={<MyProfilePage />} />
                <Route path="my-resume" element={<MyResumePage />} />
                <Route path="packages" element={<PackagePage />} />
                <Route path="short-listed-jobs" element={<ShortListedJobsPage />} />
              </Route>
            </Route>
          </Routes>
        </ErrorBoundary>
        <ScrollTopBehaviour />
      </BrowserRouter>
      {/* Toastify */}
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {/* <!-- Scroll To Top --> */}
      <ScrollToTop />
    </div>


  )
}
export default App
