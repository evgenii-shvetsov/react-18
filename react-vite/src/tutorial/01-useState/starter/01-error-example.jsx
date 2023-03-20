import { useState } from "react";

const ErrorExample = () => {
  const [count, setCount] = useState(0);

  const increaseHandler = () => {
    setCount((prev) => (prev += 1));
  };
  const decreaseHandler = () => {
    setCount((prev) => (prev -= 1));
  };
  return (
    <div>
      <h2>useState error example</h2>
      <h2>{count}</h2>
      <button type="button" className="btn" onClick={increaseHandler}>
        increase value
      </button>
      <button type="button" className="btn" onClick={decreaseHandler}>
        decrease value
      </button>
    </div>
  );
};

export default ErrorExample;
