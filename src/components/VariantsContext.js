import { createContext } from "react";

export const VariantsContext = createContext();

export const VariantsProvider = ({ children }) => {
  const values = {
    hidden: {
      opacity: 1,
      y: 10,
    },
  };
  return (
    <VariantsContext.Provider value={{ values }}>
      {children}
    </VariantsContext.Provider>
  );
};
