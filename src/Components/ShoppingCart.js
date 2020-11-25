import React, { Component } from 'react'

class ShoppingCart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }

    this.handleEvent = this.handleEvent.bind(this)
  }

  componentDidMount() {

  }

  componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

  componentWillUnmount() {

  }

  // Prototype methods, Bind in Constructor (ES2015)
  handleEvent() { }

  // Class Properties (Stage 3 Proposal)
  handler = () => { this.setState() }

  IncrementHandler = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  DecrementHandler = () => {
    this.setState({
      count: this.state.count > 0 ? this.state.count - 1 : 0
    });
  }

  ResetHandler = () => {
    this.setState({
      count: 0
    });
  }

  render() {
    return (
      <div>
        <h1>Product Count</h1>
        <h3>{this.state.count}</h3>
        <button onClick={() => this.IncrementHandler()}>+</button>
        <button onClick={() => this.ResetHandler()}>Reset</button>
        <button onClick={() => this.DecrementHandler()}>-</button>
      </div>
    )
  }
}

export default ShoppingCart;
