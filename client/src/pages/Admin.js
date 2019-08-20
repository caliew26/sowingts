import React, { Component } from "react";
import API from "../utils/API";

class Admin extends Component {
  state = {
    products: []
  };

  render(){
    return (
      <div>
        <h1>Here are items we could have for sale:</h1>
        {this.state.products.map(product =>  (
          <div>
          <p key={product.id}>{product.department} {product.product_name}</p>
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


export default Admin;