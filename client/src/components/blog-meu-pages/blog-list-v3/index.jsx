import DashboardHeader from "@/components/header/DashboardHeader";
import Blog8 from "../../blog/Blog8";
import Breadcrumb from "../../common/Breadcrumb";
import FooterDefault from "../../footer/common-footer";
import BlogPagination from "../blog-sidebar/BlogPagination";

const index = () => {
  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>
     <DashboardHeader/>
      <Breadcrumb title="Blog" meta="Blog" />
      {/* <!--End Page Title--> */}

      <div className="sidebar-page-container">
        <div className="auto-container">
          <div className="row">
            <div className="content-side col-lg-12 col-md-12 col-sm-12">
              <div className="blog-grid">
                <div className="row">
                  <Blog8 />
                </div>
                {/* End .row */}

                <BlogPagination />
                {/* End blog pagination */}
              </div>
              {/* End blog-grid */}
            </div>
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
