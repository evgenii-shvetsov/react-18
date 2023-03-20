import { data } from "../../../data.js";
import { useState } from "react";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    const newArr = people.filter((person) => id !== person.id);
    setPeople(newArr)
  };

  const clearAllItems = () => {
    setPeople([]);
  };

  return (
    <div>
      <h2>useState array example</h2>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type="button" onClick={()=> removeItem(id)}> remove</button>
          </div>
        );
      })}
      <button
        type="button"
        style={{ marginTop: "2rem" }}
        onClick={clearAllItems}
        className="btn"
      >
        clear items
      </button>
    </div>
  );
};

export default UseStateArray;
