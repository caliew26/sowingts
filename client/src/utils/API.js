import axios from "axios";

export default {
  // Gets all products
  getProducts: function() {
    return axios.get("/../api/farmStand");
  },
  // Gets the product with the given id
  getProductsID: function(id) {
    return axios.get("/../api/farmStand/" + id);
  },
  // Deletes the product with the given id
  deleteProducts: function(id) {
    return axios.delete("/../api/farmStand/" + id);
  },
  // Saves a product to the database
  saveProducts: function(productsData) {
    return axios.post("/../api/farmStand", productsData);
  }
};