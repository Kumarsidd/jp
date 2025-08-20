const SidebarFooter = () => {
  const socialContent = [
    { id: 1, icon: "fa-facebook-f", link: "https://www.facebook.com/share/14xUZgTzBG/" },
    { id: 2, icon: "fa-instagram", link: "https://www.instagram.com/chempharma_jobs/" },
    // { id: 3, icon:  "fa-linkedin-in", link: "https://www.linkedin.com/"},
    // { id: 4, icon:  },
  ];

  return (
    <div className="mm-add-listing mm-listitem pro-footer">
      {/* <a href="#" className="theme-btn btn-style-one mm-listitem__text">
        Job Post
      </a> */}
      {/* job post btn */}

      <div className="mm-listitem__text">
        <div className="contact-info">
          <span className="phone-num">
            <span>Call us</span>
            <p className="mb-0">+91 892 823 5501 <br /> +91 987 012 2286</p>
          </span>
          <span className="address">
          Shubham Avenue<br />
          Maharashtra - 400077
          </span>
          <a href="mailto:info@chempharmajobs.com" className="text-decoration-none">
              info@chempharmajobs.com
            </a>
        </div>
        {/* End .contact-info */}

        <div className="social-links">
          {socialContent.map((item) => (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={item.id}
            >
              <i className={`fab ${item.icon}`}></i>
            </a>
          ))}
        </div>
        {/* End social-links */}
      </div>
      {/* End .mm-listitem__text */}
    </div>
  );
};

export default SidebarFooter;
