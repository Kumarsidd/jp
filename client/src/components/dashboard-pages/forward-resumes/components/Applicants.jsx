
import CandidateCard from "@/components/common/CandidateCard";

const Applicants = ({ data, search }) => {
  return (
    <>
      <div className="row">
        {data?.map((item) => (
           <div
           className="candidate-block-three col-lg-6 col-md-12 col-sm-12"
           key={item?._id}
       >
          <CandidateCard item={item} search={search}/>
          </div>
        ))}
      </div>
     
    </>
  );
};

export default Applicants;
