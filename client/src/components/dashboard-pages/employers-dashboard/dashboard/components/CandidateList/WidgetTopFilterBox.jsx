import { clearAllFilters } from "@/features/filter/candidateFilterSlice";
import Categories from "./Categories";
import Experience from "./Experience";
import Qualification from "./Qualification";
import SearchBox from "./SearchBox";
import { useDispatch } from "react-redux";

const WidgetTopFilterBox = () => {
const dispatch=useDispatch()
  return (
    <div className="chosen-outer ">
      <SearchBox />
      <Categories />
      <Experience />
      <Qualification />
      <button
        className="btn bg-danger chosen-single chosen-container text-white"
        onClick={() => dispatch(clearAllFilters())}
      >
        Clear All
      </button>
    </div>
  );
};

export default WidgetTopFilterBox;
