import FooterDefault from "../../footer/common-footer";
import BlogPagination from "../blog-sidebar/BlogPagination";
import BlogSidebar from "../blog-sidebar";
import Blog7 from "../../blog/Blog7";
import Breadcrumb from "../../common/Breadcrumb";
import DashboardHeader from "@/components/header/DashboardHeader";

const index = () => {
  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>
      <DashboardHeader />

      <Breadcrumb title="Blog" meta="Blog" />
      {/* <!--End Page Title--> */}

      <div className="sidebar-page-container">
        <div className="auto-container">
          <div className="row">
            <div className="content-side col-lg-8 col-md-12 col-sm-12">
              <div className="blog-grid">
                <Blog7 />
              </div>
              {/* End blog-grid */}

              <BlogPagination />
              {/* End blog pagination */}
            </div>
            {/* <!--End Content Side--> */}

            <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
              <BlogSidebar />
            </div>
            {/* <!--End Sidebar Side--> */}
          </div>
          {/* End .row */}
        </div>
      </div>
      {/* <!-- End Sidebar Container --> */}

      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
