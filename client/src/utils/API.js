import axios from "axios";

//after get is the url, not the folder name/location
export default {
  // Gets all products
  getProducts: function() {
    return axios.get("/api/products");
  },
  // Gets the product with the given id
  getProductsID: function(id) {
    return axios.get("/api/products/" + id);
  },
  // Deletes the product with the given id
  deleteProducts: function(id) {
    return axios.delete("/api/products/" + id);
  },
  // Saves a product to the database
  saveProducts: function(productsData) {
    return axios.post("/api/products", productsData);
  }
};