import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../../../images/slide-1.jpg'
import slide2 from '../../../images/slide-2.jpg'
import slide3 from '../../../images/slide-3.jpg'
import Feature from "../../Feature/Feature";

const Hero = () => {
  return (
    <div>
       <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={slide1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="uppercase text-5xl">Made with love</h3>
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
        <h3 className="uppercase text-5xl">Made for you</h3>
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
        <h3 className="uppercase text-5xl">Made to shine</h3>
          <p>Shine for your partner</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div>
      <Feature/>
    </div>
    </div>
  );
};

export default Hero;
