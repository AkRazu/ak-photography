import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../../../images/slide-1.jpg'
import slide2 from '../../../images/slide-2.jpg'
import slide3 from '../../../images/slide-3.jpg'

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
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default Hero;
