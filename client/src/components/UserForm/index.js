import React, { Component } from "react";

class UserForm extends Component {
  // Setting the component's initial state
  state = {
    userName: "",
    password: ""
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    // if (!this.state.userName) {
    //   alert("Fill out your username please!");
    // } else if (this.state.password.length < 6) {
    //   alert(
    //     `Choose a more secure password ${this.state.userName}`
    //   );
    // } else {
    //   alert(`Hello ${this.state.userName}`);
    // }

    this.setState({
      userName: "",
      password: ""
    });
  };

  render() {
    return (
      <div>
        <p>
          Hello, please input your user name and password
        </p>
        <form className="form">
          <input
            value={this.state.userName}
            name="userName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="User Name"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default UserForm;
