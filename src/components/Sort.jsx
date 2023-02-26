import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../context/FilterContext";

const Sort = () => {
  const { filter_products, grid_view, setGridView, setListView } =
    useFilterContext();
  return (
    <>
      <section className="border-2 border-red-600 px-3 py-4 flex justify-between">
        <div className="grid-buttons flex gap-4 ">
          <button
            className={
              grid_view
                ? "px-1 py-1 border-2 text-3xl active:bg-black active:text-white"
                : "px-1 py-1 border-2 text-3xl"
            }
            onClick={setGridView}
          >
            <BsFillGridFill />
          </button>
          <button
            className={
              !grid_view
                ? "px-1 py-1 border-2 text-3xl active:bg-black active:text-white"
                : "px-1 py-1 border-2 text-3xl"
            }
            onClick={setListView}
          >
            <BsList />
          </button>
        </div>
        <div className="items-available">
          {filter_products.length} Products available
        </div>
        <div className="sort-by border ">
          <select name="" id="">
            <option value="price">sort by price</option>
            <option value="latest">sort by latest</option>
          </select>
        </div>
      </section>
    </>
  );
};

export default Sort;
