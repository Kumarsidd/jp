const SearchBox = ({handleChange,search}) => {
    return (
        <div className="search-box-one">
        <form method="post">
          <div className="form-group">
            <span className="icon flaticon-search-1"></span>
            <input
              type="search"
              placeholder="Job title"
              onChange={(e)=>handleChange("keyword",e.target.value)}
              value={search?.keyword}
            />
          </div>
        </form>
      </div>
      
    );
};

export default SearchBox;
