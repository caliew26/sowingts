import React, { Component } from "react";
import API from "../utils/API";

class Admin extends Component {
  state = {
    products: []
  };
  
  availableItem (valueAvailfromDB, idAvailfromDB){
    console.log("This is avail" + valueAvailfromDB, "This is the product id " + idAvailfromDB)
    if(valueAvailfromDB == 1) {
      // console.log("checked")
    return <button type="button" id={idAvailfromDB} value="0" onClick={(event) => this.checkboxClicked(event)}  >Deactivate</button>
    } 
    return <button type="button" id={idAvailfromDB} value="1" onClick={(event) => this.checkboxClicked(event)}  >Activate</button>

  }

  //need an event listener that will have an 'onChange' that will listen for when the checkbox is clicked and when it is clicked do an alert
  checkboxClicked(event){
    const btnEvent = event.target
    alert("you've clicked something ")
    console.log(btnEvent.id)
    console.log(btnEvent.value)
    console.log(event.currentTarget)
    API.updateToggle(btnEvent.id, btnEvent.value)
    if (btnEvent.value == 0){
      btnEvent.value = 1
      btnEvent.innerHTML = "Activate"
    } else {
      btnEvent.value = 0
      btnEvent.innerHTML = "Deactivate"
    }
  }

  render(){
    console.log("rendering")

    return (
      <div>
        <h1>Here are all of our items:</h1>
        {/* {buildCategory("Veggies","veggie")} */}
        
            <div className="productsStuff">
                <h3>Veggies</h3>
                {this.state.products.filter(product => (
                    product.department == 'veggie'
                )).map(product => (
                    <div>
                      {this.availableItem(product.available, product.id)}
                        {/* <input type="checkbox" className="myCheckbox" {...this.availableItem(1)}></input>*/}
                      <p key={product.id}> {product.product_name}</p> 
                    </div>
                ))}
            </div>            
            <div className="productsStuff">
                <h3>Flowers</h3>
                {this.state.products.filter(product => (
                    product.department == 'flower'
                )).map(product => (
                    <div>
                      {this.availableItem(1)}
                        <input type="checkbox" className="myCheckbox"></input><p key={product.id}> {product.product_name}</p>
                    </div>
                ))}
            </div>
            <div className="productsStuff">
                <h3>Pies</h3>
                {this.state.products.filter(product => (
                    product.department == 'pie'
                )).map(product => (
                    <div>
                        <input type="checkbox" className="myCheckbox"></input>
                        <p key={product.id}> {product.product_name}</p>
                    </div>
                ))}
            </div>
            {/* below code will populate all from "findAll" */}
        {/* {this.state.products.map(product =>  (
          <div>
            <input type="checkbox" className="myCheckbox"></input><p key={product.id}>{product.department} {product.product_name}</p>
          </div>
        ))} */}
        
      </div>
    );
  }

  //on page load, I want it to load all the things in the products table in the farmstand_db
  componentDidMount() {
    this.loadProducts();
    // event.preventDefault();
  }

  //loadProducts is supposed to reach out to the API and get all the items from the products table
  loadProducts = () => {
    //API is the client side api under utils
    API.getProducts()
    //.then is the promise , but what is the "this.setState"??
      .then(res =>
        this.setState({ products: res.data})
        // console.log(res.data)
      )
      .catch(err => console.log(err));
  };
}


export default Admin;