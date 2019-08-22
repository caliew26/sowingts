//this is the page that will show all of the items for sale

import React, { Component } from "react";
import API from "../utils/API";

class Detail extends Component {
  state = {
    products: []
  };

  render(){
    return (
      <div>
        <div className="openHours">
          <h3>We are Open:</h3>
          <h3>Hours: 10-6</h3>
          <h3>Date: Date Picker Under Contruction</h3>
          <h5>hours and dates vary from day to day</h5>
        </div>
        <div id="map">
          <h2>We are here</h2>
          {/* <img src="layneandmarlisbuilding.jpg" className="buildingPeas" alt="Layne and Marlis Building"></img> */}
          <img src="https://maps.googleapis.com/maps/api/staticmap?center=Berkeley,CA&zoom=14&size=400x400&key=AIzaSyDAllIaQbeIUae7GUfKRWPhPaRQ3xVpFn8" alt="google map"></img>
          {/* <img src="https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap
          &markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
          &markers=color:red%7Clabel:C%7C40.718217,-73.998284
          &key=AIzaSyDAllIaQbeIUae7GUfKRWPhPaRQ3xVpFn8" alt="google map"></img> */}
        </div>
        <h1>Here are items we could have for sale:</h1>
        {this.state.products.map(product =>  (
          <div>
          <p key={product.id}>{product.department} : {product.product_name} </p>
          <span>{product.available}</span>
          </div>
        ))}
      </div>
    );
  }

  //on page load, I want it to load all the things in the products table in the farmstand_db
  componentDidMount() {
    this.loadProducts();
  }

  //loadProducts is supposed to reach out to the API and get all the items from the products table
  loadProducts = () => {
    //API is the client side api under utils
    API.getProducts()
    //.then is the promise , but what is the "this.setState"??
      .then(res =>
        this.setState({ products: res.data })
        // console.log(res.data)
      )
      .catch(err => console.log(err));
  };
}


export default Detail;
