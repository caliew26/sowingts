//this is the page that will show all of the items for sale

import React, { Component } from "react";
import API from "../utils/API";

class Detail extends Component {
  state = {
    products: []
  };

  getHeader(){
    if (this.state.products.length == 0){
      return <h1>Sorry, we are closed, come back tomorrow</h1>
    } else {
      return <h1>Items available today: </h1>
    }
  }

  render(){
    // console.log(JSON.Stringify(process.env))
    return (
      <div className="container  aboutUS">
        <div className="activeDetails">
          {this.getHeader()}

          {this.state.products.map(product =>  (
          <div className="detailProdImg">
            <p key={product.id}>{product.department} : {product.product_name} </p>
            {/* <span>{product.available}</span> */}
            <img src={"./images/" + product.imagefilename} width="100%" alt="farming images"></img>
          </div>
        ))}
        </div>
        <div className="openHours">
          <h3>We are Open:</h3>
          <h3>Days: Thursday & Friday</h3>
          <h3>Hours: 10-6</h3>
          {/* <h3 className="myClass"><input type="date">Date: </input></h3> */}
          <h5>*hours and dates may vary from day to day</h5>
        </div>
        <div id="map">
          <img src="https://maps.googleapis.com/maps/api/staticmap?markers=47.1377147,-122.1020025&zoom=14&key=AIzaSyBDyPaAKUz0YX65pN1bEmsXLxGYI4jIN8s&size=1800x400&scale=1" alt="google map"></img>
        </div>

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
    API.getActiveProducts()
    //.then is the promise , but what is the "this.setState"??
      .then(res =>
        this.setState({ products: res.data })
        // console.log(res.data)
      )
      .catch(err => console.log(err));
  };
}


export default Detail;
