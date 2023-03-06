import React from "react";
import { FaCheck } from "react-icons/fa";
import { useFilterContext } from "../context/FilterContext";

const FilterSection = () => {
  const {
    filters: { text, category, colors },
    all_products,
    updateFilterValue,
  } = useFilterContext();

  //to get the unique data of each field
  const getUniqueData = (data, property) => {
    let newValue = data.map((curElem) => {
      return curElem[property];
    });

    // union of array
    if (property === "colors") {
      // return (newValue = ["All", ...new Set([].concat(...newValue))]);
      newValue = newValue.flat();
    }
    return (newValue = ["All", ...new Set(newValue)]); //Set object lets you store unique values of any type
  };
  //unique data
  const categoryOnlyData = getUniqueData(all_products, "category");
  const companyOnlyData = getUniqueData(all_products, "company");
  const colorsOnlyData = getUniqueData(all_products, "colors");
  return (
    <div className="flex flex-col gap-6">
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
      <div className="filter-category">
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
      <div className="sompany-filter">
        <h3 className="font-semibold text-xl text-gray-700">Company</h3>
        <form action="#">
          <select
            className="border-2 px-2 py-1"
            name="company"
            id="company"
            onClick={updateFilterValue}
          >
            {companyOnlyData.map((curElem, index) => {
              return (
                <option key={index} value={curElem} name="company">
                  {curElem}
                </option>
              );
            })}
          </select>
        </form>
      </div>
      <div className="colors-filter">
        <h3 className="font-semibold text-xl text-gray-700">Colors</h3>
        <div className="color-data flex gap-2 grid-cols-3 opacity-70">
          {colorsOnlyData.map((curColor, index) => {
            if (curColor.toLowerCase() === "all") {
              return (
                <button
                  key={index}
                  type="button"
                  name="colors"
                  value={curColor}
                  onClick={updateFilterValue}
                  className="capitalize font-semibold text-lg text-gray-600"
                >
                  all
                </button>
              );
            }
            return (
              <button
                type="button"
                name="colors"
                value={curColor}
                key={index}
                onClick={updateFilterValue}
                className="w-[1.5rem] h-[1.5rem] rounded-sm flex justify-center items-center"
                style={{ backgroundColor: curColor }}
              >
                {colors === curColor ? (
                  <FaCheck className="text-white text-xl" />
                ) : null}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
