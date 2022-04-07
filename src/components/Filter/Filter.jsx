import React from "react";
import { useFilters } from "../../context";
import RadioInput from "../RadioInput/RadioInput";
import "./Filter.css";

function Filter() {
  const { filterState, filterDispatch } = useFilters();
  const { sortBy } = filterState;

  const sortChangeHandler = (sortWith) => {
    filterDispatch({ type: "SET_SORT_BY", payload: sortWith})
  }
  
  return (
    <div className="filter px-5 my-2">
      <div className="filter-sorting">
        <h3>Sort By</h3>
        <RadioInput
          label="Newest First"
          checked={sortBy.toLowerCase() === "newest"}
          name="sort-by"
          changeHandler={() => sortChangeHandler("newest")}
        />
        <RadioInput
          label="Oldest First"
          checked={sortBy.toLowerCase() === "oldest"}
          name="sort-by"
          changeHandler={() => sortChangeHandler("oldest")}
        />
      </div>
    </div>
  );
}

export default Filter;
