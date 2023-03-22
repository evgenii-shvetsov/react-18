import { useState } from "react";

const ToggleChallenge = () => {
  const [value, setValue] = useState(false)

  const toggleBtn = () => {
    setValue(prev => !prev)
  }

  return (
    <>
    <h2>toggle challenge</h2>
    <button className="btn" onClick={toggleBtn}>Toggle Alert</button>
    {value && <div>
      you clicked the button
    </div> }
    </>
  )
  
};

export default ToggleChallenge;
