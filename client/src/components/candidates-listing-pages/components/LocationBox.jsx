


import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLocation } from "../../../features/filter/candidateFilterSlice";

const LocationBox = ({filters={}, updateFilters,clearFilters}) => {
    const { location } =filters 
    const [getLocation, setLocation] = useState(location);
  
    // location handler
    const locationHandler = (e) => {
        setLocation(e.target.value);
    };

    // location dispatch
    useEffect(() => {
        updateFilters("location",getLocation);
    }, [ addLocation, getLocation]);

    return (
        <>
            <input
                type="text"
                name="listing-search"
                placeholder="City or postcode"
                value={location}
                onChange={locationHandler}
            />
            <span className="icon flaticon-map-locator"></span>
        </>
    );
};

export default LocationBox;
