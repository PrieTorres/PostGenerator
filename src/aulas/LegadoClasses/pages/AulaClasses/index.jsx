import React from "react";
import { Component } from "react";

export class AulaClasses extends Component {
  state = {
    counter: 0,
  };

  handleClick = () => {
    /*this.setState({ counter: this.state.counter + 1 }, () => {
      console.log(this.state.counter); // atualizado
    }); // é melhor chamar o this.state dentro do setState pra garantir o state atualizado
    */

    // outra maneira seria
    this.setState((prevState, prevProps) => { 
      console.log("PROPSSSS ---> ", prevProps);
      return {counter: prevState.counter + 1}
     }, () => {
      console.log(this.state.counter); // atualizado
    });

    console.log(this.state.counter); // desatualizado
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}
