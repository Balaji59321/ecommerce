import React, { useContext, useReducer } from "react";

const DataLayer = React.createContext();

const ContextProvider = ({ intitialValue, reducer, children }) => {
  return (
    <DataLayer.Provider value={useReducer(reducer, intitialValue)}>
      {children}
    </DataLayer.Provider>
  );
};

export default ContextProvider;

export const DataLayerValue = () => useContext(DataLayer);
