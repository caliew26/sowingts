import React from "react";
//  import ReactBootstrapCarousel from "react-bootstrap-carousel";
import Carousel from 'react-bootstrap/lib/Carousel';


function CarouselBootstrap (){
    return (
        <Carousel>
         <Carousel.Item>
             <img
             className="d-block w-100"
             src="/marlissowingtheseed.jpg"
             alt="Marlis Sowing The Seed"
             />
             <Carousel.Caption>
             <h3>Welcome to Sowing The Seed</h3>
             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
             </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
             <img
             className="d-block w-100"
             src="/marlisringbell.jpg"
             alt="Marlis Ring Bell"
             />

             <Carousel.Caption>
             <h3>All About Us</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
             </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
             <img
             className="d-block w-100"
             src="/whitetippeddahlia.jpg"
             alt="Flowers"
             />

             <Carousel.Caption>
             <h3>Flowers, Veggies, Pies oh my!</h3>
             <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
             </Carousel.Caption>
         </Carousel.Item>
         </Carousel>
    );
}
            
export default CarouselBootstrap;