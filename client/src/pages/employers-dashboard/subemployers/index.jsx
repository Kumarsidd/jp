import React from 'react'
import Breadcrumb from '@/components/common/Breadcrumb';
import MenuToggler from '@/components/dashboard-pages/MenuToggler';
import CopyrightFooter from '@/components/dashboard-pages/CopyrightFooter';
import SubEmployerList from './SubEmployerList';
import DashboardSidebar from '@/components/header/DashboardSideBar';
const SubEmployer = () => {
  return (

    <div className="page-wrapper dashboard">
    <span className="header-span"></span>
    {/* <!-- Header Span for hight --> */}
    <DashboardSidebar/>
    {/* <!-- End User Sidebar Menu --> */}

    {/* <!-- Dashboard --> */}
    <section className="user-dashboard">
      <div className="dashboard-outer">
        <Breadcrumb title="Sub Employers!" />
        {/* breadCrumb */}

        <MenuToggler />
        {/* Collapsible sidebar button */}

        <div className="row">
          <div className="col-lg-12">
            {/* <!-- Ls widget --> */}
            <div className="ls-widget">
              <SubEmployerList/>
            </div>
          </div>
        </div>
        {/* End .row */}
      </div>
      {/* End dashboard-outer */}
    </section>
    {/* <!-- End Dashboard --> */}

    <CopyrightFooter />
    {/* <!-- End Copyright --> */}
  </div>
  )
}

export default SubEmployer