import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../context/FilterContext";

const Sort = () => {
  const { filter_products, grid_view, setGridView, setListView, sorting } =
    useFilterContext();
  return (
    <>
      <section className=" px-3 py-4 flex justify-between">
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
        <div className="sort-by ">
          <form action="#">
            <label htmlFor="sort">
              <select
                className="border-2 px-2 py-1"
                name="sort"
                id="sort"
                onClick={sorting}
              >
                <option value="lowest">Price(lowest)</option>
                <option value="highest">Price(highest)</option>
                <option value="ascending">sort by a-z</option>
                <option value="descending">sort by z-a</option>
              </select>
            </label>
          </form>
        </div>
      </section>
    </>
  );
};

export default Sort;
