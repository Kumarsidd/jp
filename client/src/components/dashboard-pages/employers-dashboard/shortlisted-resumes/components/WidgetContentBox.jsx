import Pagination from "@/utils/hooks/usePagination";
import Applicants from "./Applicants";
import { useDispatch, useSelector } from "react-redux";
import { addPage } from "@/features/filter/candidateFilterSlice";

const WidgetContentBox = ({ data}) => {
  
    const dispatch = useDispatch();
    const { limit, page, } = useSelector((state) => state.candidateFilter) || {};
  return (
    <div className="widget-content">
      <div className="row">
        <Applicants data={data?.data} />
      </div>
      {/* <!-- Pagination --> */}
      {data?.totalPages && (
            <Pagination
              Page={page}
              limit={limit}
              totalPages={data?.totalPages || 0}
              handlePageChange={(page) => dispatch(addPage(page))}
            />
          )}
    </div>
  );
};

export default WidgetContentBox;
