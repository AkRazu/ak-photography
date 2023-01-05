import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Cardcheckout from "../Cardcheckout/Cardcheckout";

const Checkout = () => {
  const {keys} = useParams();
  const [services, setServices] = useFetch();
  const detailsService = services.filter((find) => find.id + "" === keys);
  console.log(detailsService[0], keys);
  return (
    <div className="container md:h-screen">
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
              <input
              className="form-input w-full mx-1"
              type="text"
              placeholder="Address"
            />
            </div>
            <div className="md:flex my-4">
            <input
                className="form-input w-full mx-1"
                type="email"
                placeholder="Email"
              />
            
            <input
              className="form-input w-full mx-1"
              type="text"
              placeholder="Phone"
            />
            </div>

            
          </div>
        </div>
        <div className="container">
          {
            detailsService.map(svc=><Cardcheckout
                key={svc.id}
                svc={svc}
            ></Cardcheckout>)
          }
        </div>
      </div>
    </div>
  );
};

export default Checkout;
