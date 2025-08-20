import React from "react";
import { datePost } from "@/utils/datePost";
export const DateFilter = ({ handleChange, search }) => {
  return (
  <div>
      <select value={search.createdAt}  onChange={(e)=>handleChange("createdAt",e.target.value)}   className="chosen-single chosen-container">
      {datePost.map((item) => (
        <option value={item.value}>{item.name}</option>
      ))}
    </select>
  </div>
  );
};
