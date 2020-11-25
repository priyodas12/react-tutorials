import React from 'react'

const Greet = (props) => {
  return (
    <>
      <h1>{props.children}</h1>
      <h3>Functional Component {props.name} = {props.val}</h3>
    </>
  )
}

export default Greet;
