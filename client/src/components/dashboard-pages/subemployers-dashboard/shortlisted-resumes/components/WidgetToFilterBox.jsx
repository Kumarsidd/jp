import { datePostApplication } from "@/utils/datePost";

const WidgetToFilterBox = ({ search, handleSerch }) => {
  return (
    <div className="chosen-outer">
      {/* <!--search box--> */}
      <div className="search-box-one">
        <form method="post">
          <div className="form-group">
            <span className="icon flaticon-search-1"></span>
            <input
              type="search"
              name="search"
              placeholder="Search"
              required
              defaultValue={search.search}
              onChange={(e)=>handleSerch("search",e.target.value)}
            />
          </div>
        </form>
      </div>
      {/* End searchBox one */}

      {/* <!--Tabs Box--> */}
      <select name="createdAt" value={search?.createdAt}  onChange={(e)=>handleSerch("createdAt",e.target.value)} className="chosen-single chosen-container">
        {
          datePostApplication.map((item,i)=>(
            <option  key={i} value={item.value}>{item.name}</option>
          ))
        }
      </select>
    </div>
  );
};

export default WidgetToFilterBox;
