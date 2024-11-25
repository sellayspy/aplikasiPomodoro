import { createContext, useState } from "react";
export const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [waktuKerja, setWaktuKerja] = useState(25 * 60);
  const [peregangan, setPeregangan] = useState(5 * 60);
  const [istirahat, setIstirahat] = useState(30 * 60);

  const [initialWaktu, setInitialWaktu] = useState(0);

  const [activeJudul, setActiveJudul] = useState(0);
  const [progress, setProgress] = useState(55);
  const [time, setTime] = useState(500);
  const [isActive, setIsActive] = useState(false);
  return (
    <StateContext.Provider
      value={{
        activeJudul,
        setActiveJudul,
        progress,
        setProgress,
        isActive,
        setIsActive,
        time,
        setTime,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
