import { useNavigate } from "react-router-dom";

const TopCardBlock = ({data}) => {
  const cardContent = [
    {
      id: 1,
      icon: "flaticon-briefcase",
      countNumber: data?.Applicationdata?.Application 
      ,
      metaName: "Applied Jobs",
      uiClass: "ui-blue",
      to:"/candidates-dashboard/applied-jobs",

    },
    {
      id: 2,
      icon: "la-bookmark-o",
      countNumber:  data?.Applicationdata?.rejectedlist,
      metaName: "Rejected",
      uiClass: "ui-red",
      status:"rejected",
      to:"/candidates-dashboard/short-listed-jobs?status=rejected",

    },
    {
      id: 3,
      icon: "la-bookmark-o",
      countNumber:  data?.Applicationdata?.pendinglist,
      metaName: "Pending",
      uiClass: "ui-yellow",
      to:"/candidates-dashboard/short-listed-jobs?status=pending",
    },
    {
      id: 4,
      icon: "la-bookmark-o",
      countNumber:  data?.Applicationdata?.Shortlist,
      metaName: "Shortlist",
      uiClass: "ui-green",
      to:"/candidates-dashboard/short-listed-jobs",
    },
  ];
     const navigate=useNavigate()
  return (
    <>
      {cardContent.map((item) => (
        <div
        role="button"
        onClick={()=>navigate(item.to)}
          className="ui-block col-xl-3 col-lg-34 col-md-3 col-sm-12"
          key={item.id}
        >
          <div className={`ui-item ${item.uiClass}`}>
            <div className="left">
              <i className={`icon la ${item.icon}`}></i>
            </div>
            <div className="right">
              <h4>{item.countNumber}</h4>
              <p>{item.metaName}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopCardBlock;
