import React from 'react'

const SectionOne = () => {
  return (
    <section className="about-section">
  <div className="auto-container">
    <div className="row">
      <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
        <div className="inner-column aos-init aos-animate" data-aos="fade-left">
          <div className="sec-title">
            <h2>About Us</h2>
            <div className="text">
            We are a niche recruitment platform dedicated to bridging the gap 
            between skilled professionals and top-tier companies in the chemical 
            and pharmaceutical industries. With 30 years of experience in the 
            chemical and Pharmaceutical Sector
            </div>
          </div>
          {/* <ul className="list-style-one">
            <li>Bring to the table win-win survival</li>
            <li>Capitalize on low hanging fruit to identify</li>
            <li>But I must explain to you how all this</li>
          </ul>
          <a className="theme-btn btn-style-one bg-blue" href="/register">
            <span className="btn-title">Get Started</span>
          </a> */}
        </div>
      </div>
      <div className="image-column col-lg-6 col-md-12 col-sm-12">
        <figure className="image aos-init aos-animate" data-aos="fade-right">
          <img
            alt="about"
            loading="lazy"
            width={600}
            height={600}
            decoding="async"
            data-nimg={1}
            src='/images/resource/about1.jpg'
            style={{ color: "transparent", borderRadius: "5px" }}
          />
        </figure>
      </div>
    </div>
    
  </div>
</section>

  )
}

export default SectionOne