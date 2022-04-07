import { createContext, useContext, useReducer } from "react";
import { filter } from "../reducers";

const FiltersContext = createContext();

const useFilters = () => useContext(FiltersContext);

const FiltersProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filter, {
    sortBy: "",
    filterBy: []
  });
  return (
    <FiltersContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FiltersContext.Provider>
  );
};

export { FiltersProvider, useFilters };
