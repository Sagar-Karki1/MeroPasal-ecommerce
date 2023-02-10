import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";

const Product = (products) => {
  const { id, name, image, price, category } = products;
  return (
    <>
      <NavLink to={`/singleproduct/${id}`}>
        <div className="card">
          <figure className="relative">
            <img src={image} alt={name} />
            <figcaption className="caption absolute top-2 right-3 px-2 py-1 rounded-md bg-slate-300">
              {category}
            </figcaption>
          </figure>
          <div className="details flex justify-between">
            <h3 className="capitalize font-semibold">{name}</h3>
            <p>{<FormatPrice price={price} />}</p>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default Product;
