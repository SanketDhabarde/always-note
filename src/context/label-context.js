import { createContext, useContext, useReducer } from "react";
import { labelsReducer } from "../reducers";

const LabelsContext = createContext();

const useLabels = () => useContext(LabelsContext);

const LabelsProvider = ({ children }) => {
  const [labelsState, labelsDispatch] = useReducer(labelsReducer, {
    labels: [],
  });
  return (
    <LabelsContext.Provider value={{ labelsState, labelsDispatch }}>
      {children}
    </LabelsContext.Provider>
  );
};

export { LabelsProvider, useLabels };
