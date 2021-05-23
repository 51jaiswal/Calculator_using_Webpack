import React, { Component } from "react";
import Button from "./Components/Button";
import "./app.css";
import Input from "./Components/Input"
import ClearButton from "./Components/ClearButton";
class App extends Component {
    constructor(props){
        super(props);
        this.state={
            input:"",
            previousNumber:"",
            currentNumber:"",
            operator:""
        };
    }
    addToInput=(val)=>{
        this.setState({input:this.state.input+val})
    }
    addZeroToInput=val=>{
        if(this.state.input !==""){
            this.setState({input:this.state.input+val})
        }
    }
    addDecimal=val=>{
        if(this.state.input.indexOf(".")===-1 ){
            this.setState({input:this.state.input+val})
        }
    }
    clearInput=()=>{
        this.setState({input:""})
    }
    add=()=>{
        this.state.previousNumber=this.state.input
        this.setState({input:""})
        this.state.operator="plus";
    }
    multiply=()=>{
        this.state.previousNumber=this.state.input
        this.setState({input:""})
        this.state.operator="multiply";
    }
    divide=()=>{
        this.state.previousNumber=this.state.input
        this.setState({input:""})
        this.state.operator="divide";
    }
    minus=()=>{
        this.state.previousNumber=this.state.input
        this.setState({input:""})
        this.state.operator="minus";
    }
    evaluate=()=>{
        this.state.currentNumber= this.state.input;

        if(this.state.operator=="plus"){
            this.setState({
                input:parseInt(this.state.previousNumber)+
                parseInt(this.state.currentNumber)
            })
        }
        else if(this.state.operator=="multiply"){
            this.setState({
                input:(this.state.previousNumber)*
               (this.state.currentNumber)
            })
        }
        else if(this.state.operator=="divide"){
            this.setState({
                input:parseInt(this.state.previousNumber)/
                parseInt(this.state.currentNumber)
            })
        }
        else if(this.state.operator=="minus"){
            this.setState({
                input:parseInt(this.state.previousNumber)*
                parseInt(this.state.currentNumber)
            })
        }
    }
  render() {
    return (
        
      <div styleName="App">
          <div styleName="heading">
            My Calculator
        </div>
        <div styleName="calc-wrapper">
            <div styleName="row">
                <Input>{this.state.input}</Input>
            </div>
          <div styleName="row">
              
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.divide}>/</Button>
          </div>
          <div styleName="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.multiply}>*</Button>
          </div>
          <div styleName="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button  handleClick={this.add}>+</Button>
          </div>

          <div styleName="row">
            <Button handleClick={this.addDecimal}>.</Button>
            <Button handleClick={this.addZeroToInput}>0</Button>
            <Button handleClick={this.evaluate}>=</Button>
            <Button handleClick={this.minus}>-</Button>
          </div>
          <div styleName="row">
              <ClearButton handleClick={this.clearInput}>Clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
