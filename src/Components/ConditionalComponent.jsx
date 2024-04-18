import Code from "./Code";
import Welcome from "./Welcome";

export default function ContidionalComponent() {
  let condition = true;
  //let message;
//   if (condition) {
//     message = <Welcome />;
//   } else {
//     message = <Code />;
//   }
  return condition?<Welcome />:<Code />;
}
