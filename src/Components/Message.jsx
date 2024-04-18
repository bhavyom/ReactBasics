export default function Message() {
  function handleClick() {
    console.log("button is clicked");
  }
  return <button onClick={handleClick}>Click here to see the message</button>;
}
