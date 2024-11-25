import { createContext, useState } from "react";
export const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [activeTag, setActiveTag] = useState(0);
  const [progress, setProgress] = useState(55);
  return (
    <StateContext.Provider value={{ activeTag, setActiveTag }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
