import { Link } from "react-router-dom";
import About from "../about/About";
import AppSection from "../app-section/AppSection";
import Blog from "../blog/Blog";
import CallToAction from "../call-to-action/CallToAction";
import Partner from "../common/partner/Partner";
import FooterDefault from "../footer/common-footer";
import Funfact from "../fun-fact-counter/Funfact";
import Hero1 from "../hero/hero-1";
import JobCategorie1 from "../job-categories/JobCategorie1";
import JobFeatured1 from "../job-featured/JobFeatured1";
import Testimonial from "../testimonial/Testimonial";
import DashboardHeader from "@/components/header/DashboardHeader";

const index = () => {
  return (
    <>
      <DashboardHeader />
      {/* End Header with upload cv btn */}
      <Hero1 />
      {/* End Hero Section */}

      <section className="job-categories ui-job-categories">
        <div className="auto-container">
          <div className="sec-title text-center" id="jobsector">
            <h2>Popular Job Sectors</h2>
            {/* <div className="text">2020 jobs live - 293 added today.</div> */}
          </div>

          <div
            className="row "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            {/* <!-- Category Block --> */}
            <JobCategorie1 />
          </div>
        </div>
      </section>
      {/* End Job Categorie Section */}

      <section className="job-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Featured Jobs</h2>
            <div className="text">
             
            </div>
          </div>

          <div className="row " data-aos="fade-up">
            <JobFeatured1 />
          </div>

          <div className="btn-box">
            <Link
              to="/job-list-v1"
              className="theme-btn btn-style-one bg-blue"
            >
              <span className="btn-title">Load More Listing</span>
            </Link>
          </div>
        </div>
      </section>
      {/* End Job Featured Section */}

      <section className="testimonial-section">
        <div className="container-fluid">
          {/* <!-- Sec Title --> */}
          <div className="sec-title text-center">
            <h2>Testimonials From Our Customers</h2>
            <div className="text">
              
            </div>
          </div>
        </div>
        <div className="carousel-outer" data-aos="fade-up">
          {/* <!-- Testimonial Carousel --> */}
          <div className="testimonial-carousel gap-x25 center-item-active slick-list-visible">
            <Testimonial />
          </div>
        </div>
      </section>
      {/* <!-- End Testimonial Section --> */}

      <section className="clients-section">
        <div className="sponsors-outer" data-aos="fade">
          {/* <!--Sponsors Carousel--> */}
          <ul className="sponsors-carousel">
            <Partner />
          </ul>
        </div>
      </section>
      {/* <!-- End Clients Section--> */}

      {/* <section className="about-section">
        <div className="auto-container">
          <div className="row">
            <About />
          </div>

          <div className="fun-fact-section">
            <div className="row">
              <Funfact />
            </div>
          </div>
        </div>
      </section> */}
      {/* <!-- End About Section --> */}

      <section className="news-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Recent News Articles</h2>
            <div className="text"> 
           
            </div>
          </div>
          {/* End ."sec-title */}
          <div className="row" data-aos="fade-up">
            <Blog />
          </div>
        </div>
      </section>
      {/* <!-- End News Section --> */}

      <section className="app-section">
        <div className="auto-container">
          {/* <AppSection /> */}
          <CallToAction />

        </div>
      </section>
      {/* <!-- End App Section --> */}

      {/* <!-- End Call To Action --> */}

      <FooterDefault />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
