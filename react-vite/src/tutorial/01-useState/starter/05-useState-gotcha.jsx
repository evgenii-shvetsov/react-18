import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setTimeout(() => setValue((prev) => (prev += 1)), 3000);
  };

  return (
    <>
      <h2>useState "gotcha"</h2>
      <p>{value}</p>
      <button onClick={handleClick}>increase</button>
    </>
  );
};

export default UseStateGotcha;
