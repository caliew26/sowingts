import React, {Component} from "react";
// import Carousel from "react-bootstrap/Carousel";

class CarouselBootstrap extends Component {
// function Carousel() {
    render (){
        return (
        <div className="carousel">
          {/* <div style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}>
            {children} */}
          
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
            </div>

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="../public/marlissowingtheseed.jpg"
                    className="d-block w-100" alt="marlis sowing the seed"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Marlis and her VEGGIES</h5>
                            <p>These are all the veggies available for purchase today!</p>
                        </div>
                </div>
            </div>

            <div className="carousel-item">
                <img src="../public/marlisringbell.jpg" className="d-block w-100" alt="Marlis ring the bell"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Marlis and FLOWERS</h5>
                        <p>These are all the flowers available for purchase today!</p>
                    </div>
            </div>

            <div className="carousel-item">
                <img src="../public/whitetippeddahlia.jpg" className="d-block w-100" alt="marlis potted plant"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Marlis and PIES</h5>
                        <p>These are all the pies available for purchase today!</p>
                    </div>
            </div>

            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            <img src="../../public/marlisringbell.jpg" className="carouselImage" alt="Marlis ringing the bell"></img>
        </div>
        )
    }
}
            
export default CarouselBootstrap;