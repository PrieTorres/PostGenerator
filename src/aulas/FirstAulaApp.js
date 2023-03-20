import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) { //não precisa do constructor pode chamar direto o this.state gracas ao classfields
    super(); // pra chamar o constructor da classe extendida
    this.handleClick = this.handleClick.bind(this); // vai setar o this desse escopo como o parametro informado

    this.state = {
      name: 'Priscilittle',
      count: 0
    }
  }

  handleClick() {
    const { count } = this.state;
    this.setState({ count: count + 1 })
  }

  handleClick2 = (e) => { //não precisa de bind pq aqui o this sempre é herdado do pai
    e.preventDefault();

  }

  render() {
    const { name, count } = this.state;

    console.log('renderizou')
    return (
      <div style={{userSelect: 'none'}} onClick={this.handleClick}>
        Nome: {name} - {count}
        <div onClick={this.handleClick2}>
          <a href='www.youtube.com'>youtube</a>
          </div>
      </div>
    )

  }
}

export default App;
