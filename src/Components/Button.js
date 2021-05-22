import React, { Component } from "react";
import "./Button.css";
class Button extends Component {
  isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
  };
//   {`button ${this.isOperator(this.props.children)? "":"operator"}`}
  render() {
    return <div styleName={`button ${this.isOperator (this.props.children) ? "" : "operator"}` }
    onClick={()=>this.props.handleClick(this.props.children)}>
        {this.props.children}
        </div>;
  }
}
export default Button;
