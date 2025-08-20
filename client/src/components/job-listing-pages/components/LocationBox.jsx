const LocationBox = ({ search, setSearch }) => {
    return (
        <>
            <input
                type="text"
                name="listing-search"
                placeholder="City or postcode"
                defaultValue={search.location}
                onChange={(e) => setSearch((prev) => ({ ...prev, location: e.target.value,page:1 }))}
            />
            <span className="icon flaticon-map-locator"></span>
        </>
    );
};

export default LocationBox;
