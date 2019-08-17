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
             <h3>Farming from the Heart</h3>
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
             </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
             <img
             className="d-block w-100"
             src="/whitetippeddahlia.jpg"
             alt="Flowers"
             />

             <Carousel.Caption>
             <h3>Veggies, Flowers & Pies oh my!</h3>
             </Carousel.Caption>
         </Carousel.Item>
         </Carousel>
    );
}
            
export default CarouselBootstrap;