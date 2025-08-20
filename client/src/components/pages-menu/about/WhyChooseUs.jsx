import React from 'react'

export const WhyChooseUs = () => {
  return (
    <section className="steps-section pt-50">
    <div className="auto-container">
      <div className="row">
        <div className="image-column col-lg-6 col-md-12 col-sm-12">
          <div className="inner-column">
            <figure className="image">
              <img
                alt="resource"
                loading="lazy"
                width={608}
                height={600}
                decoding="async"
                data-nimg={1}
                src='/images/resource/steps-img.webp'
                style={{ color: "transparent" }}
              />
            </figure>
            <div
              className="count-employers aos-init aos-animate"
              data-aos="fade-up"
            >
              <span className="title">300k+ Employers</span>
              <figure className="image">
                <img
                  alt="resource"
                  loading="lazy"
                  width={209}
                  height={54}
                  decoding="async"
                  data-nimg={1}
                  src='/images/resource/multi-peoples.png'
                  style={{ color: "transparent" }}
                />
              </figure>
            </div>
          </div>
        </div>
        <div className="content-column col-lg-6 col-md-12 col-sm-12">
          <div className="inner-column aos-init aos-animate" data-aos="fade-up">
            <div className="sec-title">
              <h2>Why Choose Us</h2>
              <div className="text">
                {" "}
                <ul className="steps-list">
                <li>
                  <span className="count">1</span><b>Industry Specialization:</b> Exclusively catering to ChemPharma recruitment.

                </li>
                <li>
                  <span className="count">2</span><b> Expertise:</b> Backed by 30 years of industry knowledge.

                </li>
                <li>
                  <span className="count">3</span> <b>Tailored Solutions:</b> Custom recruitment services to meet specific needs.

                </li>
                <li>
                  <span className="count">4</span><b> Tech-Driven Platform:</b> User-friendly interface with advanced job-matching algorithms.
                </li>
                <li>
                  <span className="count">5</span><b> Global Reach:</b> Connecting professionals and companies across borders.
                </li>
              </ul>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}
