import React, { Component } from 'react'

class Destructureclass extends Component {
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
    const { name, surname } = this.props;
    return (
      <>
        <h1>{name},{surname}</h1>
      </>
    )
  }
}

export default Destructureclass;