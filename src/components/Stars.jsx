import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Stars = ({ stars }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill color="orange" size={20} />
        ) : stars >= number ? (
          <BsStarHalf color="orange" size={20} />
        ) : (
          <BsStar color="orange" size={20} />
        )}
      </span>
    );
  });
  return (
    <div className=" flex">
      <div>
        <p className="text-md text-gray-500 font-medium mr-2">Ratings: </p>
      </div>
      <div className="flex gap-[1px]">{ratingStar}</div>
    </div>
  );
};

export default Stars;
