import useUserInfo from "@/utils/hooks/useUserInfo";
import { useNavigate } from "react-router-dom";

const TopCardBlock = ({data}) => {
  const userInfo=useUserInfo()
  const userTypeById = userInfo?.userTypeValue?._id;

  const cardContent = [
    {
      id: 1,
      icon: "flaticon-briefcase",
      countNumber: data?.jobs?.total,
    
      metaName: "Posted Jobs",
      uiClass: "ui-blue",
      to:"/subemployers-dashboard/post-jobs",
    },
    {
      id: 2,
      icon: "la-file-invoice",
      countNumber:  data?.Applicationdata?.Application,
      metaName: "Application",
      uiClass: "ui-red",
      to:"/subemployers-dashboard/all-applicants",
    },
   
    {
      id: 4,
      icon: "la-bookmark-o",
      countNumber:  data?.Applicationdata?.Shortlist,
      metaName: "Shortlist",
      to:"/subemployers-dashboard/shortlisted-candidates/shortlisted",
      uiClass: "ui-green",
    },
  ];
  const navigate=useNavigate()
  return (
    <>
      {cardContent.map((item) => (
        <div
         role="button"
          // onClick={()=>navigate(item.to)}
          className="ui-block col-xl-4 col-lg-6 col-md-6 col-sm-12"
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
