import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../../../images/slide-1.jpg'
import slide2 from '../../../images/slide-2.jpg'
import slide3 from '../../../images/slide-3.jpg'
import Feature from "../../Feature/Feature";
import Services from "../../Services/Services";

const Hero = () => {
  return (
    <div >
       <Carousel className="hidden md:block">
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={slide1}
          alt="First slide"
        />
        <Carousel.Caption>
          <p className="uppercase md:text-5xl">Made with love</p>
          <p>Best love with nature </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={slide2}
          alt="Second slide"
        />
        <Carousel.Caption>
        <p className="uppercase md:text-5xl">Made for you</p>
          <p>Make a love partner</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide3}
          alt="Third slide"
        />
        <Carousel.Caption>
        <p className="uppercase md:text-5xl">Made to shine</p>
          <p>Shine for your partner</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div>
      <Services/>
    </div>
    <div>
      <Feature/>
    </div>
    </div>
  );
};

export default Hero;
