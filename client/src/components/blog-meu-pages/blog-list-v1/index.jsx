import Blog6 from "../../blog/Blog6";
import FooterDefault from "../../footer/common-footer";
import BlogPagination from "../blog-sidebar/BlogPagination";
import BlogSidebar from "../blog-sidebar";
import Breadcrumb from "../../common/Breadcrumb";
import blogContent from "../../../data/blogs";
import { useState } from "react";
import { useEffect } from "react";
import DashboardHeader from "@/components/header/DashboardHeader";
const ITEMS_PER_PAGE = 6;

const index = () => {
   // Define states for search, category, and pagination
   const [searchQuery, setSearchQuery] = useState("");
   const [category, setCategory] = useState("all");
   const [currentPage, setCurrentPage] = useState(1);
   const [filteredData, setFilteredData] = useState([]);
 
   // Filter blog data based on search query and category
   useEffect(() => {
    const filtered = blogContent.filter((blog) => {
      const title = blog.title && typeof blog.title === 'string' ? blog.title.toLowerCase() : "";
      const content = blog.content && typeof blog.content === 'string' ? blog.content.toLowerCase() : "";
  
      const matchesSearch =
        title.includes(searchQuery.toLowerCase()) ||
        content.includes(searchQuery.toLowerCase());
      const matchesCategory =
        category === "all" || blog.category === category;
  
      return matchesSearch && matchesCategory;
    });
  
    setFilteredData(filtered);
  }, [searchQuery, category]);
  
   // Calculate pagination
   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
   const currentPageData = filteredData.slice(
     startIndex,
     startIndex + ITEMS_PER_PAGE
   );
   const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const  onSearch=(value) => {
    setSearchQuery(value)
    setCurrentPage(1)
  }
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
            <div className="content-side col-lg-8 col-md-12 col-sm-12">
              <div className="blog-grid">
                <div className="row">
                <Blog6 blogContent={currentPageData} />
                </div>
                {/* End .row */}

                <BlogPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={(page) => setCurrentPage(page)}
                />                {/* End blog pagination */}
              </div>
              {/* End blog-grid */}
            </div>
            {/* <!--End Content Side--> */}

            <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
              <BlogSidebar onSearch={onSearch} />
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
