import GalleryBox from "./GalleryBox";

const JobDetailsDescriptions = ({data}) => {
  return (
    <div className="job-detail">
      <h4>About Company</h4>
    <div dangerouslySetInnerHTML={{__html:data?.employerDetails?.product_services}}></div>
    </div>
  );
};

export default JobDetailsDescriptions;
