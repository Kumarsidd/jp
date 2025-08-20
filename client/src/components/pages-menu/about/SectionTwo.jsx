import React from 'react'

const SectionTwo = () => {
  return (
    <section className="about-section">
    <div className="auto-container">
      <div className="row">
        <div className="content-column col-lg-6 col-md-12 col-sm-12 ">
          <div className="aos-init aos-animate" data-aos="fade-left">
            <div className="sec-title">
              <h2>Founder's Message</h2>
              <div className="text">
              With over 30 years of hands-on experience in the chemical and 
              pharmaceutical industries, I deeply understand the complexities of finding the 
              right talent for critical roles. This wealth of industry knowledge, combined 
              with our cutting-edge recruitment portal, offers a pleasant experience to the 
              HR Teams.
              </div>
              <div className="text">
              Our platform is designed to simplify your hiring process, delivering 
              exceptional results. We’re here to support HR teams to get the best outcomes 
              for their time and energy
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
              src='/images/resource/about2.jpg'
              style={{ color: "transparent", borderRadius: "5px" }}
            />
          </figure>
        </div>
      </div>

    </div>
  </section>
  
  )
}

export default SectionTwo