const SearchBox = ({ search, setSearch }) => {

    return (
        <>
            <input
                type="text"
                name="listing-search"
                placeholder="Job title, keywords, or company"
                defaultValue={search.keyword}
                onChange={(e) => setSearch((prev) => ({ ...prev, keyword: e.target.value,page:1 }))}
            />
            <span className="icon flaticon-search-3"></span>
        </>
    );
};

export default SearchBox;
