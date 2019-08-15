//cali - do something to this page

import React, { Component } from "react";
import { Link } from "react-router-dom";
import CarouselBootstrap from "../components/Carousel";
import API from "../utils/API";

class Detail extends Component {
  state = {
    products: {}
  };
  // When this component mounts, grab the product with the _id of this.props.match.params.id
  componentDidMount() {
    API.getProducts(this.props.match.params.id)
      .then(res => this.setState({ products: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <CarouselBootstrap>
          <h1>
            Hello 
          </h1>
        </CarouselBootstrap>
      </div>
    )
  }
}

export default Detail;
