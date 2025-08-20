import MetaComponent from '@/components/common/MetaComponent';
import { paths } from '@/services/paths';
import React from 'react';
import { Link } from 'react-router-dom';
const metadata = {
  title: "Unauthorized ",
  description: "",
};
const UnauthorizedPage= () => {
  return (
    <>
    <MetaComponent meta={metadata} />
    <div
      className="error-page-wrapper "
      style={{
        backgroundImage: `url(/images/404.jpg)`,
      }}
      data-aos="fade"
    >
      <div className="content">
        <div className="logo">
          <Link to="/">
            <img
              src="/images/logo.png"
              style={{ height: "50px" }}
              alt="brand"
            />
          </Link>
        </div>
        {/* End logo */}

        <h1>403!</h1>
        <p>  Unauthorized Access! </p>
          <p>You do not have permission to access this page.</p>

        <Link className="theme-btn btn-style-three call-modal" to="/">
          BACK TO HOME
        </Link>
      </div>
      {/* End .content */}
    </div>
  </>
  );
};

export default UnauthorizedPage;