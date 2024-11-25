import { createContext, useEffect, useState } from "react";
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

  useEffect(() => {
    switch (activeJudul) {
      case 0:
        setTime(waktuKerja);
        setInitialWaktu(waktuKerja);
        break;
      case 1:
        setTime(peregangan);
        setInitialWaktu(peregangan);
        break;
      case 2:
        setTime(istirahat);
        setInitialWaktu(istirahat);
        break;
      default:
        break;
    }
  }, [activeJudul, waktuKerja, peregangan, istirahat]);

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
        initialWaktu,
        setInitialWaktu,
        waktuKerja,
        setWaktuKerja,
        peregangan,
        setPeregangan,
        istirahat,
        setIstirahat,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
