import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";

const ListView = ({ products }) => {
  console.log(products);
  return (
    <>
      <section>
        {products.map((curElem) => {
          return (
            <div
              key={curElem.id}
              className="h-[20rem] flex gap-4 shadow-lg rounded-lg my-4"
            >
              <figure className="w-1/2 flex items-center">
                <img
                  src={curElem.image}
                  alt=""
                  className="rounded-tl-lg rounded-bl-lg h-full"
                />
              </figure>

              <div className="px-6">
                <h3 className="text-blue-900 text-2xl font-semibold capitalize">
                  {curElem.name}
                </h3>
                <p>
                  <FormatPrice price={curElem.price} />
                </p>
                <p>{curElem.description.slice(0, 90)}...</p>
                <NavLink to={`/singleproduct/${curElem.id}`}>
                  <button className="px-3 py-3 bg-cyan-600 rounded-sm text-white font-semibold">
                    Read More
                  </button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ListView;
