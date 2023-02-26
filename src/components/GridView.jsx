import React from "react";
import Product from "../components/Product";

const GridView = ({ products }) => {
  return (
    <>
      <section className="grid grid-cols-3 gap-3">
        {products.map((curElem, id) => {
          return <Product key={curElem.id} {...curElem} />;
        })}
      </section>
    </>
  );
};

export default GridView;
