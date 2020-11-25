import React, { Component } from 'react'

class Message extends Component {
  constructor(props) {
    super(props)

    this.state = {
      display: "Initial Message"
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

  //button event
  changeMessage = () => {
    this.setState(
      {
        display: "Thanks for changing the mind!"
      }
    )
  }

  render() {
    return (
      <div>
        <h1>{this.state.display}</h1>
        <button onClick={() => this.changeMessage()} >change message</button>
        <h1>Lets change the state</h1>
      </div>
    )
  }
}

export default Message;