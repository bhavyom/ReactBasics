import Hello from "./Components/Hello";
import HelloWithProps from "./Components/HelloWithProps";
import Fruits from './Components/Fruits'
import ContidionalComponent from "./Components/ConditionalComponent";
import Message from "./Components/Message";
import Counter from "./Components/Counter";
import Form from "./Components/Form";
import InclineComponent from "./Components/InlineComponent";
import CssModule from "./Components/CssModule";
function App() {
  let seatNumber = [1,5,9]
  let person = {
    name:"Tom",
    message:"Hello",
    seatNumber: seatNumber
  }
  return (
    <>
      {/* <Hello /> */}
      {/* <HelloWithProps person={person}/>
      <Fruits />

      <ContidionalComponent/>

      <Message/> */}
      {/* <Counter/> */}
      <Form/>

      <InclineComponent/>

    <CssModule/>
    </>
  );
}

export default App;
