import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ fname: "", lname: "" });

  function handleClick(e) {
    e.preventDefault();
    console.log(name);
  }
  return (
    <div>
      <form>
        <label>Firstname</label>
        <input
          type="text"
          value={name.fname}
          onChange={(e) => setName({ ...name, fname: e.target.value })}
        />
        <br />
        <label>Lastname</label>
        <input
          type="text"
          value={name.lname}
          onChange={(e) => setName({ ...name, lname: e.target.value })}
        />
        <button onClick={(e) => handleClick(e)}>Submit</button>
      </form>
    </div>
  );
}
