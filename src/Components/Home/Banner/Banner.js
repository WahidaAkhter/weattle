import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-50 mx-auto "
            src="https://img.freepik.com/free-photo/travel-concept-with-baggage_23-2149153260.jpg?2&t=st=1650258087~exp=1650258687~hmac=f64b1b789d20db5af4bf4f2960663993ffec5e7a8c581b81b8d80fc78ce90597&w=996"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className='text-dark'>Dream Big</h3>
          </Carousel.Caption>
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50 mx-auto" 
            src="https://img.freepik.com/free-vector/tourists-wearing-face-masks_23-2148623090.jpg?t=st=1650256233~exp=1650256833~hmac=a9a9025eab47b31f3435873348d40e643b13a505363dcf873259ca23aa9378a4&w=1060"
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3 className='text-dark'>Travelling</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50 mx-auto" 
            src="https://img.freepik.com/free-photo/travel-concept-with-worldwide-landmarks_23-2149153263.jpg?3&t=st=1650257565~exp=1650258165~hmac=8e2a67a20e8acd206f8cb98db24b0a7fc25d6bd98bcf34629dfef4ecaac607ed&w=900"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3 className='text-dark'>Change your route</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;