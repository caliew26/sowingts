import React, { Component } from "react";
import API from "../utils/API";

class Admin extends Component {
  state = {
    products: []
  };
  
  availableItem (valueAvailfromDB){
    console.log("This is avail" + valueAvailfromDB)
    if(valueAvailfromDB == 1) {
      console.log("checked")
      return <input type="checkbox" className="myCheckbox" checked></input>
    } 
    return <input type="checkbox" className="myCheckbox" ></input>
  }
  render(){
    console.log("rendering")

    // function buildCategory (displayName, deptName){
    //   return(
    //     <div className="productsStuff">
    //       <h3>{displayName}</h3>
    //       {this.state.products.filter(product => (
    //           product.department == deptName
    //       )).map(product => (
    //           <div>
    //               <input type="checkbox" className="myCheckbox"></input><p key={product.id}> {product.product_name}</p>
    //           </div>
    //       ))}
    //     </div> 
    //   )
    // }

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
                      {this.availableItem(product.available)}
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