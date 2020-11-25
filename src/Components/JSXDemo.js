import React from 'react'

const JSXDemo = (props) => {

  //return (
  //  <div>
  //    <h3>Hello JSX</h3>
  // </div>
  // )

  return React.createElement('div', { id: "jsx", className: 'jsx-component' }, React.createElement('h1', null, 'hello jsx'));
}

export default JSXDemo;
