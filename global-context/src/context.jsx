import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

//custom hook
export const useGlobalContext = () => useContext(GlobalContext)

const AppContext = ({children}) => {
  const [name, setName] = useState("Peter");
  return (
    <GlobalContext.Provider value={{ name, setName }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
