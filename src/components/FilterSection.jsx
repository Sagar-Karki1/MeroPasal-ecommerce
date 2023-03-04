import React from "react";
import { useFilterContext } from "../context/FilterContext";

const FilterSection = () => {
  const {
    filters: { text },
    updateFilterValue,
  } = useFilterContext();
  return (
    <>
      <div className="filter-search">
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            placeholder="Search products"
            onChange={updateFilterValue}
            className="border-2 py-2 px-4 rounded-md"
          />
        </form>
      </div>
    </>
  );
};

export default FilterSection;
