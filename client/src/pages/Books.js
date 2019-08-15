//been trying to get this page to work -no idea what is suppose to be here

import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import Carousel from "../components/Carousel";

class Products extends Component {
  state = {
    products: [],
    product_name: "",
    department: "",
    price: "",
    stock_quantity: ""
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = () => {
    API.getProducts()
      .then(res =>
        this.setState({ product_name: res.data, department: "", price: "", stock_quantity: "" })
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
      <Carousel />
    )
  }
}

//   render() {
//     return (
//       <Container fluid>
//         <Row>
//           <Col size="md-6">
//             <Carousel>
//               <h1>What Books Should I Read?</h1>
//             </Carousel>
//             <form>
//               <Input
//                 value={this.state.product_name}
//                 onChange={this.handleInputChange}
//                 name="products"
//                 placeholder="products (required)"
//               />
//               <Input
//                 value={this.state.department}
//                 onChange={this.handleInputChange}
//                 name="department"
//                 placeholder="department (required)"
//               />
//               <TextArea
//                 value={this.state.price}
//                 onChange={this.handleInputChange}
//                 name="price"
//                 placeholder="price (Optional)"
//               />
//               <TextArea
//                 value={this.state.stock_quantity}
//                 onChange={this.handleInputChange}
//                 name="stock_quantity"
//                 placeholder="stock_quantity (Optional)"
//               />
//               <FormBtn
//                 disabled={!(this.state.product_name && this.state.department)}
//                 onClick={this.handleFormSubmit}
//               >
//                 Submit products
//               </FormBtn>
//             </form>
//           </Col>
//           <Col size="md-6 sm-12">
//             <Carousel>
//               <h1>products
//                  On My List</h1>
//             </Carousel>
//             {/* {this.state.products.length ? (
//               <List>
//                 {this.state.products.map(products=> (
//                   <ListItem key={products._id}>
//                     <Link to={"/farmStand/" + products._id}>
//                       <strong>
//                         {products.product_name
//                         } in {products.department}
//                       </strong>
//                     </Link>
//                   </ListItem>
//                 ))}
//               </List>
//             ) : ( */}
//               <h3>No Results to Display</h3>
//             )}
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

export default Products;
