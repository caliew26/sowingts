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
        </div>
        <div className="googleApiConnection">
          <img src="layneandmarlisbuilding.jpg" className="buildingPeas" alt="Layne and Marlis Building"></img>
        </div>
        <h1>Here are items we could have for sale:</h1>
        {this.state.products.map(product =>  (
          <div>
          <p key={product.id}>{product.department} : {product.product_name}</p>
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
