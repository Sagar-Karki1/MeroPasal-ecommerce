import React, { useState } from "react";

const ProductImage = ({ imgs = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(imgs[0]);
  return (
    <>
      <section className="flex flex-col">
        <div className="mb-2">
          <figure>
            <img
              src={mainImage.url}
              alt={mainImage.filename}
              className="w-[700px] h-auto rounded-md"
            />
          </figure>
        </div>
        <div className="grid grid-cols-4 gap-4 ">
          {imgs.map((curElem, index) => {
            return (
              <figure key={index}>
                <img
                  src={curElem.url}
                  alt={curElem.filename}
                  className="h-[8rem] rounded-md cursor-pointer"
                  onClick={() => setMainImage(curElem)}
                />
              </figure>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ProductImage;
