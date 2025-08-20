import Pagination from "@/utils/hooks/usePagination";
import { useDispatch, useSelector } from "react-redux";
import CandidateCard from "./CandidateCard";


const Applicants = ({data,isLoading,setPage,page,limit}) => {
  if (isLoading) return <div>Loading...</div>
  return (
    <>
         {data?.data.map((item) => (
                  <div
                    className="candidate-block-three col-lg-6 col-md-12 col-sm-12"
                    key={item?.candidate?._id}
                  >
                  <CandidateCard item={item}  />
                  </div>
                ))}
                 {data?.totalPages && (
            <Pagination
              Page={page}
              limit={limit}
              totalPages={data?.totalPages || 0}
              handlePageChange={(page) => setPage(page)}
            />
          )}
    </>
  );
};

export default Applicants;
