import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import Carousel from "../components/Carousel";

class Produce extends Component {
  state = {
    produce: [],
    product_name: "",
    department: "",
    price: "",
    stock_quantity: ""
  };

  componentDidMount() {
    this.loadProduce();
  }

  loadProduce = () => {
    API.getProduce()
      .then(res =>
        this.setState({ product_name: res.data, department: "", price: "", stock_quantity: "" })
      )
      .catch(err => console.log(err));
  };

  deleteProduce = id => {
    API.deleteProduce(id)
      .then(res => this.loadProduce())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.product_name && this.state.department) {
      API.saveProduce({
        product_name: this.state.product_name,
        department: this.state.department,
        price: this.state.price,
        stock_quantity: this.state.stock_quantity
      })
        .then(res => this.loadProduce())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Carousel>
              <h1>What Books Should I Read?</h1>
            </Carousel>
            <form>
              <Input
                value={this.state.produce}
                onChange={this.handleInputChange}
                name="Produce"
                placeholder="Produce (required)"
              />
              <Input
                value={this.state.department}
                onChange={this.handleInputChange}
                name="department"
                placeholder="department (required)"
              />
              <TextArea
                value={this.state.price}
                onChange={this.handleInputChange}
                name="price"
                placeholder="price (Optional)"
              />
              <TextArea
                value={this.state.stock_quantity}
                onChange={this.handleInputChange}
                name="stock_quantity"
                placeholder="stock_quantity (Optional)"
              />
              <FormBtn
                disabled={!(this.state.produce && this.state.department)}
                onClick={this.handleFormSubmit}
              >
                Submit Produce
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Carousel>
              <h1>Produce On My List</h1>
            </Carousel>
            {/* {this.state.produce.length ? (
              <List>
                {this.state.farmStand_db.map(book => (
                  <ListItem key={farmStand_db._id}>
                    <Link to={"/farmStand/" + farmStand_db._id}>
                      <strong>
                        {farmStand_db.produce} in {farmStand_db.department}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteProduce(farmStand_db._id)} />
                  </ListItem>
                ))}
              </List> */}
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Produce;
