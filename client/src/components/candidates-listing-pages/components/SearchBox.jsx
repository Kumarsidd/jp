


import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addKeyword } from "../../../features/filter/candidateFilterSlice";

const SearchBox = ({filters={}, updateFilters,clearFilters}) => {
    const { keyword } =filters 
    const [getKeyword, setKeyword] = useState(keyword);

    const dispatch = useDispatch();

    // keyword handler
    const keywordHandler = (e) => {
        setKeyword(e.target.value);
    };

    // keyword dispatch
    useEffect(() => {
        updateFilters("keyword",getKeyword);
    }, [ addKeyword, getKeyword]);
   
    return (
        <>
            <input
                type="text"
                name="listing-search"
                placeholder="Job title, keywords, or company"
                onChange={keywordHandler}
                value={keyword}
            />
            <span className="icon flaticon-search-3"></span>
        </>
    );
};

export default SearchBox;
