import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  state = { firstName: "", email: "" };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const contact = this.state;
    axios
      .post("/api/contact", { contact })
      .then(res => {
        console.log("it worked");
      })
      .catch(res => {
        console.log(res);
      });
  };

  render() {
    const { firstName, email } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
          />
          <input value={email} name="email" onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
