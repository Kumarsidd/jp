import LoginPopup from "@/components/common/form/login/LoginPopup";
import FooterDefault from "@/components/footer/common-footer";
import DetailsContent from "@/components/blog-meu-pages/blog-details/details-content";
import blogs from "@/data/blogs";
import { useParams } from "react-router-dom";

import MetaComponent from "@/components/common/MetaComponent";
import DashboardHeader from "@/components/header/DashboardHeader";

const metadata = {
  title: "Blog Details Dyanmic V1 ",
  description: "",
};

const BlogDetailsDynamic = () => {
  let params = useParams();
  const id = params.id;

  const blog = blogs.find((item) => item.id == id) || blogs[0];

  return (
    <>
      <MetaComponent meta={metadata} />
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>
      <DashboardHeader/>
      {/* <!-- Blog Single --> */}
      <section className="blog-single">
        <div className="auto-container">
          <div className="upper-box">
            <h3>{blog?.blogSingleTitle}</h3>

            <ul className="post-info">
              <li>
                <span className="thumb">
                  <img src={"/images/resource/p1.jpg"} alt="resource" />
                </span>
                Sharad Pawar 
              </li>
              <li>August 31, 2024</li>
              <li>6 Comment</li>
            </ul>
            {/* End post info */}
          </div>
        </div>
        {/* End auto-container */}

        <figure className="main-image">
          <img src={blog?.img} alt="resource" />
        </figure>

        <DetailsContent />
      </section>
      {/* <!-- End Blog Single --> */}

      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default BlogDetailsDynamic;
