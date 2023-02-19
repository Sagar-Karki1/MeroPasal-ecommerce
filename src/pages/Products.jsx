import React from "react";
import ProductList from "../components/ProductList";
import Sort from "../components/Sort";
import FilterSection from "../components/FilterSection";

const Products = () => {
  return (
    <>
      <div className="flex w-full max-w-[1200px] m-auto">
        <div className="products-filter">
          <FilterSection />
        </div>
        <div className="products-items">
          <div>
            <Sort />
          </div>
          <div>
            <ProductList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
