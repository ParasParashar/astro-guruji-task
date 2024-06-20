import { createContext, useContext, useState } from "react";

const FormContext = createContext({});

export const FormProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => setIsOpen(false);

  return (
    <FormContext.Provider value={{ isOpen, handleClose, handleOpen }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormHook = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("context not found");
  }
  return context;
};
