import { createContext, useState } from "react";

const FilterTripContext = createContext();

const FilterTripContextProvider = ({ children }) => {
  const [filter, setFilter] = useState("cheaptrip");

  return (
    <FilterTripContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterTripContext.Provider>
  );
};

export const FilterTrip = FilterTripContext;
export default FilterTripContextProvider;
