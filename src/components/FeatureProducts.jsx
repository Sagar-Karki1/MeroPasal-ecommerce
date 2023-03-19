import React from "react";
import { useProductContext } from "../context/ProductContext";
import Product from "./Product";

const FeatureProducts = () => {
  const { isLoading, featureProducts } = useProductContext();
  if (isLoading) {
    return <div>...Loading</div>;
  }
  return (
    <>
      <section className="w-full border border-indigo-500 bg-slate-100">
        <div className="w-full h-full max-w-[1300px] m-auto bg-white shadow-lg px-4">
          <h3 className="text-4xl font-semibold text-teal-600 py-3">
            Feature Prodcuts
          </h3>
          <div className="products-container grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-16">
            {featureProducts.map((products) => {
              return <Product key={products.id} {...products} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureProducts;
