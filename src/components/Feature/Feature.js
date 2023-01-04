import React from "react";
import feature1 from "../../images/feature-1.jpg";
import feature2 from "../../images/feature-2.jpg";
const Feature = () => {
  return (
    <div className=" bg-[#F4F0ED]">
      <div className="container py-20">
        <div className="md:grid grid-cols-2 gap-60">
          <div >
            <div>
              <p
                style={{ letterSpacing: "10px" }}
                className="text-4xl font-serif text-start font-thin text-[#4D504A] uppercase"
              >
                Authentic photos
              </p>
              <p className="text-start text-[#4D504A] mb-10">
                Make a memory of your special day and make your future better. A
                little piece of memory made will make your power stronger
              </p>
              <div>
                <img className="w-12/12 rounded-sm" src={feature1} alt="" />
              </div>
            </div>
          </div>
          <div>
            <div className="mt-10 md:mt-0">
              <div>
                <img className="w-8/12 rounded-sm" src={feature2} alt="" />
              </div>
              <p
                style={{ letterSpacing: "10px" }}
                className="text-4xl font-serif text-start font-thin text-[#4D504A] uppercase mt-10"
              >
                Authentic photos
              </p>
              <p className="text-start text-[#4D504A]">
                Make a memory of your special day and make your future better. A
                little piece of memory made will make your power stronger
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
