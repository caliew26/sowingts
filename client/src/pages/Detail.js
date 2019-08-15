//cali - do something to this page

import React, { Component } from "react";
import { Link } from "react-router-dom";
import CarouselBootstrap from "../components/Carousel";
import API from "../utils/API";

class Detail extends Component {
  state = {
    book: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getBook(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <CarouselBootstrap>
          <h1>
            Hello Sowing The Seed
          </h1>
        </CarouselBootstrap>
      </div>
    )
  }
}

export default Detail;
