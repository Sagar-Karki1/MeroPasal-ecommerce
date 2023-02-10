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
      <section>
        <h3>Feature Prodcuts</h3>
        <div className="products-container grid grid-cols-3 gap-4">
          {featureProducts.map((products) => {
            return <Product key={products.id} {...products} />;
          })}
        </div>
      </section>
    </>
  );
};

export default FeatureProducts;
