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
      <section className="w-full bg-slate-100">
        <div className="w-full max-w-[1300px] m-auto bg-white shadow-lg px-4">
          <h3 className="text-4xl font-semibold text-teal-600 py-3">
            Feature Prodcuts
          </h3>
          <div className="products-container grid grid-cols-3 gap-8">
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
