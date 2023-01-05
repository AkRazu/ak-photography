import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cardcheckout = ({ svc }) => {
  const { id, name, price, img, description } = svc;
  const tax = (15 / 100) * price;
  const total = tax + price;
  const handelBooking =()=>{
    toast.success("Booking Successful");
  }
  return (
    <div className="flex items-center md:h-screen">
        <ToastContainer />
      <div>
      <div className="grid grid-cols-2">
        <div>
          <img className="w-3/5 rounded-lg" src={img} alt="" />
        </div>
        <div>
          <p className="m-0 mt-5 text-end">{name}</p>
          <p className="m-0 mt-2 text-end font-bold">${price}.00</p>
        </div>
      </div>
      <hr />
      <div>
        <div className="flex justify-between">
          <p>Tax</p>
          <p className="font-bold">${tax}</p>
        </div>
        <button onClick={handelBooking} className="bg-indigo-700 text-light font-semibold py-3 px-5">
          Booking place
        </button>
      </div>
      </div>
    </div>
  );
};

export default Cardcheckout;
