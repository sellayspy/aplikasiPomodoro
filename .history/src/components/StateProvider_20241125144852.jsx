import { createContext, useState } from "react";
const StateContext = createContext();

const StateProvider = (children) => {
  const [activeTag, setActiveTag] = useState(0);
  return (
    <StateContext.Provider value={{ activeTag, setActiveTag }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
