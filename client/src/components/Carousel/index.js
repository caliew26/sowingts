import React from "react";

function CarouselBootstrap (){
    return (
        <div className="bd-example">
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active">Pies Pies Pies</li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1">Veggies for all!</li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2">Flowers Alive</li>
                    </ol>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="../../public/marlissowingtheseed.jpg" cclassName="d-block w-100" alt="sowing the seed"></img>
                        <div className="carousel-caption d-md-block">
                            <h5>Pies Pies Pies</h5>
                            <p>Stuff about pies</p>
                        </div>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src="../../public/marlisringbell.jpg" className="d-block w-100" alt="marlis ring bell"></img>
                    <div className="carousel-caption d-md-block">
                        <h5>Veggies for All!</h5>
                        <p>Veggies are everywhere.</p>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src="../../public/whitetippeddahlia.jpg" className="d-block w-100" alt="white tipped dahlia"></img>
                    <div className="carousel-caption d-md-block">
                        <h5>Flowers Alive</h5>
                        <p>There are purty flowers for everyone.</p>
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
            </div>
        </div>
    );
}
            
export default CarouselBootstrap;