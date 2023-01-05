import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Checkout = () => {
  const {keys} = useParams();
  const [services, setServices] = useFetch();
  const detailsService = services.filter((find) => find.id + "" === keys);
  console.log(detailsService[0], keys);
  return (
    <div className="container h-screen">
      <div className="md:grid gap-3 grid-cols-2">
        <div className="mt-20">
          <div>
            <h1>Checkout ✌</h1>
            <hr />
            <h3>Where's this order going ?</h3>
            <div className="md:flex">
              <input
                className="form-input w-full mx-1"
                type="text"
                placeholder="First Name"
              />
              <input
                className="form-input w-full mx-1"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <br />
            <input
              className="form-input w-full"
              type="text"
              placeholder="Address"
            />
            <div className="md:flex my-4">
              <input
                className="form-input w-full mx-1"
                type="text"
                placeholder="City"
              />
              <input
                className="form-input w-full mx-1"
                type="text"
                placeholder="Zip Code"
              />
            </div>
            <input
              className="form-input w-full"
              type="text"
              placeholder="Phone"
            />
          </div>
        </div>
        <div className="container">
          <p>Order summary -</p>
          <hr />
          <img src="" alt="" />
          <hr />
          <h4>Subtotal </h4>

          <div className="flex justify-between">
            <h3>Order Total</h3>
            <h3>$32.00</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
