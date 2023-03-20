import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    hobby: "Bouldering",
  });

  const setupPerson = () => {
    setPerson({ name: "Joe", age: 30, hobby: "Climbing" });
    //if we want to changenot all properties, destructure first, then setup new key-value pair
    setPerson({ ...person, name: "Bob" });
  };

  return (
    <>
      <h2>useState object example</h2>
      <div>
        <h3>{person.name}</h3>
        <h3>{person.age}</h3>
        <h3>Enjoys: {person.hobby}</h3>
        <button type="button" onClick={setupPerson} className="btn">
          Show Joe
        </button>
      </div>
    </>
  );
};

export default UseStateObject;
