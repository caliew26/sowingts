//been trying to get this page to work -no idea what is suppose to be here

import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import CarouselBootstrap from "../components/Carousel";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
    products: [],
    product_name: "",
    department: "",
    price: "",
    stock_quantity: ""
    }
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = () => {
    API.getProducts()
      .then(res =>
        this.setState({ products_name: res.data, department: "", price: "", stock_quantity: "" })
      )
      .catch(err => console.log(err));
  };

  deleteProducts = id => {
    API.deleteproducts(id)
      .then(res => this.loadproducts())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({[name]: value});
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.product_name && this.state.department) {
      API.saveproducts({
        product_name: this.state.product_name,
        department: this.state.department,
        price: this.state.price,
        stock_quantity: this.state.stock_quantity
      })
        .then(res => this.loadproducts()
        )
        .catch(err => console.log(err));
    }
  };

  render() {
    return(
      <CarouselBootstrap />
    )
  }
}

export default Products;
