import Applicants from "./Applicants";

const WidgetContentBox = ({ data ,search}) => {
  return (
    <div className="widget-content">
      <div className="row">
        <Applicants data={data?.data} search={search}/>
      </div>
      {/* <!-- Pagination --> */}
      
    </div>
  );
};

export default WidgetContentBox;
