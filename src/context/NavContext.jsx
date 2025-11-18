import { createContext,useState } from "react";


export const NavContext = createContext();
export const NavContextProvider = ({ children }) => {
    const [nav,setNav]=useState("#")
  return (
    <NavContext.Provider
      value={{nav,setNav}}
    >
      {children}
    </NavContext.Provider>
  );
};
