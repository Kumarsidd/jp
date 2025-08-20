const SearchBox = ({ onSearch }) => {
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="form-group">
        <span className="icon flaticon-search-1"></span>
        <input
          type="search"
          name="search-field"
          placeholder="keywords"
          required
          onChange={handleInputChange}
        />
      </div>
    </form>
  );
};

export default SearchBox;
