export default function HelloWithProps({person}) {
    console.log(person)
    // let name = prop.name
    // let message = prop.message
  return (
    <div>
      <h1>{person.message} {person.name} {person.seatNumber}</h1>
    </div>
  );
}
