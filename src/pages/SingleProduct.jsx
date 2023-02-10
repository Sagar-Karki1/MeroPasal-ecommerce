import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";

const API = "https://api.pujakaitem.com/api/products";
const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  const { id } = useParams();

  const {
    id: alias,
    name,
    company,
    price,
    colors,
    description,
    category,
    featured,
    stock,
    reviews,
    stars,
  } = singleProduct;
  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);
  return (
    <>
      <section>
        <p>{description}</p>
      </section>
    </>
  );
};

export default SingleProduct;
