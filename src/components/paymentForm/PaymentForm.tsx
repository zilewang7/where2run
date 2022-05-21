import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { Input } from "antd";
import styles from "./PaymentForm.module.css";

export class PaymentForm extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "name",
    name: "",
    number: "",
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div id="PaymentForm" style={{ marginTop: 50 }}>
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus as "name"}
          name={this.state.name}
          number={this.state.number}
        />
        <form className={styles["payment-form"]}>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <Input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />

          <Input
            type="tel"
            name="expiry"
            placeholder="Valid Thru"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <Input
            type="text"
            name="cvc"
            placeholder="CVC"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
        </form>
      </div>
    );
  }
}
