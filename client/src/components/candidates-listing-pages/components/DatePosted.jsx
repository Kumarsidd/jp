

import { datePost } from "@/utils/datePost";

const DatePosted = ({filters={}, updateFilters,clearFilters}) => {
  console.log("filters",filters)
  return (
    <ul className="ui-checkbox">
      {datePost?.map((item,index) => (
        <li key={index}>
          <label>
            <input
              value={filters.createdAt}
              onChange={() => updateFilters("createdAt", item.value)}
              type="radio"
              checked={filters.createdAt === item.value}
            />
            <span></span>
            <p>{item.name}</p>
          </label>
        </li>
      ))}
    </ul>
  );
};

export default DatePosted;
