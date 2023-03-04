import React from "react";
import { useFilterContext } from "../context/FilterContext";

const FilterSection = () => {
  const {
    filters: { text, category },
    all_products,
    updateFilterValue,
  } = useFilterContext();

  //to get the unique data of each field
  const getUniqueData = (data, property) => {
    let newValue = data.map((curElem) => {
      return curElem[property];
    });
    return (newValue = ["All", ...new Set(newValue)]); //Set object lets you store unique values of any type
  };
  //unique data
  const categoryOnlyData = getUniqueData(all_products, "category");
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
      <div className="filter-category mt-6">
        <h3 className="font-semibold text-xl text-gray-700">Categories</h3>
        <div className="flex flex-col gap-2 flex-start">
          {categoryOnlyData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                onClick={updateFilterValue}
                className="flex capitalize text-gray-400 font-medium"
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FilterSection;
