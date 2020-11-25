import logo from './logo.svg';
import './App.css';
import Greet from "./Components/Greet"
import Welcome from "./Components/Welcome"
import JSXDemo from "./Components/JSXDemo"
import Message from "./Components/Message"
import ShoppingCart from "./Components/ShoppingCart"

function App() {
  return (
    <div className="App">
      {/*<Greet name="a" val="97">A</Greet>
      <Greet name="b" val="98">B</Greet>
      <Greet name="c" val="99">C</Greet>
      <Welcome name="well"></Welcome>
      <JSXDemo></JSXDemo>
      <Message></Message>*/}
      <ShoppingCart></ShoppingCart>
    </div>
  );
}

export default App;
