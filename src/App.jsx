import Hello from "./Components/Hello";
import HelloWithProps from "./Components/HelloWithProps";
import Fruits from './Components/Fruits'
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
      <HelloWithProps person={person}/>
      <Fruits />
    </>
  );
}

export default App;
