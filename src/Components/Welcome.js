import React, { Component } from 'react'

export default class Welcome extends Component {
  constructor(props) {
    super(props)

    this.state = {

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

  render() {
    return (
      <>
        <h1>Class Component! {this.props.name}</h1>
      </>
    )
  }
}
