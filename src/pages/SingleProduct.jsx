import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PageNavigation from "../components/PageNavigation";
import ProductImage from "../components/ProductImage";
import { useProductContext } from "../context/ProductContext";
import FormatPrice from "../Helpers/FormatPrice";
import AddToCart from "../components/AddToCart";

import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { BiShieldQuarter, BiCreditCard } from "react-icons/bi";
import Stars from "../components/Stars";

const API = "https://api.pujakaitem.com/api/products";
const SingleProduct = () => {
  const serviceDetails = [
    {
      index: 1,
      icon: <TbTruckDelivery />,
      info: "free delivery",
    },
    {
      index: 2,
      icon: <TbReplace />,
      info: "30 days replacement",
    },
    {
      index: 3,
      icon: <BiShieldQuarter />,
      info: "2 years warranty",
    },
    {
      index: 3,
      icon: <BiCreditCard />,
      info: "all card accepted",
    },
  ];
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();

  const { id } = useParams();

  const {
    id: alias,
    name,
    company,
    price,
    colors,
    image,
    description,
    category,
    stock,
    reviews,
    stars,
  } = singleProduct;
  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return <div className="page-loading">Loading...</div>;
  }
  return (
    <>
      <section className="w-full">
        <PageNavigation title={name} />
        <div className=" h-[54rem] w-full max-w-[1300px] m-auto flex pt-6">
          <div className="image w-1/2">
            {/* Product Images */}
            <ProductImage imgs={image} />
          </div>
          <div className="product-data w-1/2 pl-8">
            <h2 className="font-semibold capitalize text-xl text-gray-600">
              {name}
            </h2>
            <Stars stars={stars} />
            <p className="text-md text-gray-500 font-medium">
              Customer reviews: <span className="ml-2">{reviews} reviews</span>{" "}
            </p>
            <p className="text-gray-500 text-md font-medium">
              Available: {stock > 0 ? "In Stock" : "Out of stock"}
            </p>
            <p className="text-md text-gray-500 font-medium mr-2">
              MRP:
              <del className="ml-2">
                <FormatPrice price={price + 250000} />
              </del>
            </p>
            <p className="bg-slate-500 px-2 py-1 rounded-md inline-block text-white">
              Deal of the day: <FormatPrice price={price} />
            </p>
            <p className="text-md text-gray-500 font-medium my-2">
              {description}
            </p>
            <div className="flex justify-between mb-8">
              {serviceDetails.map(({ index, icon, info }) => {
                return (
                  <div
                    className="h-[5rem] drop-shadow-lg bg-white flex justify-center items-center flex-col px-2"
                    key={index}
                  >
                    <p className="text-3xl text-gray-500">{icon}</p>
                    <p className="capitalize text-sm text-gray-500 font-medium">
                      {info}
                    </p>
                  </div>
                );
              })}
            </div>
            <hr className="mb-8 border-2" />
            {stock > 0 && <AddToCart product={singleProduct} />}
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
