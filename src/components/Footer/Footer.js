import React from "react";
import logo from "../../images/logo3.png";
const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className=" bg-[#FFFFFF]">
      <div className="container">
        <div className="grid md:grid-cols-2">
          <div>
            <div>
              <img className="w-5/12 mx-auto" src={logo} alt="" />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div>
              <p style={{ letterSpacing: "5px" }} className="text-center">
                Find Us on
              </p>
              <p>
                <i class="mx-2 text-[#69737F] text-3xl fa-brands fa-facebook"></i>
                <i class="mx-2 text-[#69737F] text-3xl fa-brands fa-square-twitter"></i>
                <i class="mx-2 text-[#69737F] text-3xl fa-brands fa-instagram"></i>
                <i class="mx-2 text-[#69737F] text-3xl fa-brands fa-linkedin"></i>
              </p>
            </div>
          </div>
        </div>
        <p>
          <small>&copy; ALL RIGHT RESERVED {year}</small>
        </p>
      </div>
    </div>
  );
};

export default Footer;
