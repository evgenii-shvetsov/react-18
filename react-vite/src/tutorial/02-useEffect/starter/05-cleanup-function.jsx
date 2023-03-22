import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  const toggleFunc = () =>{
    setToggle(prev => !prev)
  }
  return (
    <>
      <h2>cleanup function</h2>
      <button className="btn" onClick={toggleFunc}>toggle component</button>
      {toggle && <RandomComomponent />}
    </>
  );
};

const RandomComomponent = ()=>{
  useEffect(()=>{
      console.log("This is interesting")
      const intId = setInterval(()=>{
        console.log("Hello from interval");
      },1000)
      return ()=>{
        clearInterval(intId)
      }
  },[])
  return <h1>hello there</h1>
}

export default CleanupFunction;
