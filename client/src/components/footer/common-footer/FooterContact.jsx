import React from 'react';

const FooterContact = () => {
  return (
    <div className="footer-column about-widget">
      <div className="logo mb-4">
        <a href="#">
          <img
            src="/images/logo.png"
            style={{ height: "50px" }}
            alt="brand"
            className="img-fluid"
          />
        </a>
      </div>
      
      <div className="contact-info">
        {/* Phone Numbers */}
        <div className="d-flex align-items-start mb-3">
          <i className="icon flaticon-phone me-2"></i>
          <div>
            {/* <p className="fw-bold ">Call us</p> */}
            <p className="mb-0">+91 892 823 5501 <br /> +91 987 012 2286</p>
          </div>
        </div>

        {/* Address */}
        <div className="d-flex align-items-start mb-3">
          <i className="icon flaticon-map-locator  me-2"></i>
          <div className="address-block">
            <address className="">
              Shubham Avenue<br />
              Maharashtra - 400077
              {/* C wing, Office Number: 1008<br />
              Building No. 19, 21<br />
              Shree Gurudatta Mandir Marg<br />
              Sai Baba Nagar, Pant Nagar<br />
              Ghatkopar East, Mumbai<br />
              Maharashtra - 400077 */}
              
            </address>
          </div>
        </div>

        {/* Email Addresses */}
        <div className="d-flex align-items-start">
          <div className="email-block">
          {/* <i className="flaticon-envelope me-2"></i>
          <a href="mailto:recruit@chempharmajobs.com" className="text-decoration-none">
              recruit@chempharmajobs.com
            </a>
            <br/> */}
            <i className="icon flaticon-envelope me-2"></i>
            <a href="mailto:info@chempharmajobs.com" className="text-decoration-none">
              info@chempharmajobs.com
            </a>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;