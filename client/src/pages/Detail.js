//cali - do something to this page

import React, { Component } from "react";
import API from "../utils/API";

class Detail extends Component {
  state = {
    products: []
  };

  render(){
    return (
    <div>
      <h1>This is the details page</h1>
      {this.state.products.map(product =>  (
        <p key={product.id}>Product name {product.product_name}</p>
      ))}
    </div>
    
    //i need a for loop to loop through all the data in the database and render it on the page
    //I need to create an array...?
    //I'm not sure I understand all I did below
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
