import Applicants from "./Applicants";

const WidgetContentBox = ({ data ,search}) => {
  return (
    <div className="widget-content">
      <div className="row">
        <Applicants data={data?.data} search={search}/>
      </div>
      {/* <!-- Pagination --> */}
      {data?.count > 6 && (
        <nav className="ls-pagination mb-5">
          <ul>
            <li className="prev">
              <a> <i className="fa fa-arrow-left"></i> </a>
            </li>
            <li>
              <a>1</a>
            </li>
            <li>
              <a className="current-page">2</a>
            </li>
            <li>
              <a>3</a>
            </li>
            <li className="next">
              <a><i className="fa fa-arrow-right"></i></a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default WidgetContentBox;
