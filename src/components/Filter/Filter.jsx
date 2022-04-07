import React from "react";
import { useFilters, useLabels } from "../../context";
import RadioInput from "../RadioInput/RadioInput";
import Checkbox from "../Checkbox/Checkbox";
import "./Filter.css";

function Filter() {
  const { filterState, filterDispatch } = useFilters();
  const { sortBy, filterBy } = filterState;
  const { labelsState } = useLabels();
  const { labels } = labelsState;

  const sortChangeHandler = (sortWith) => {
    filterDispatch({ type: "SET_SORT_BY", payload: sortWith });
  };

  const filterChangeHandler = (label) => {
    filterDispatch({ type: "SET_FILTER_BY", payload: label });
  };

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
      <div className="filter-labels my-2">
        <h3>Filter By labels</h3>
        {labels?.map(({ _id, label }) => (
          <Checkbox
            key={_id}
            title={label}
            checked={filterBy.some((_label) => _label === label)}
            changeHandler={() => filterChangeHandler(label)}
          />
        ))}
      </div>
    </div>
  );
}

export default Filter;
