import React from "react";

const Service = ({ product }) => {
  const { name, price, img, description } = product;
  return (
    <div className="border hover:shadow-lg  bg-white rounded-md">
      <img src={img} alt="" />
      <div className="px-3 mt-4">
        <p className="text-xl font-semibold">{name}</p>
        <p className="font-serif text-4xl">
          <sup>$</sup>
          {price}
        </p>
        <p className="text-gray-400">{description}</p>
      </div>
      <button className="border mb-4 py-3 px-5">Booking</button>
    </div>
  );
};

export default Service;
