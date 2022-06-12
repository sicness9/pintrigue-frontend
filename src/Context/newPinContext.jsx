import { useState, createContext, useEffect } from "react";

export const CreatePinContext = createContext();

const CreatePinContextProvider = ({ children }) => {
  const [newPin, setNewPin] = useState(false);
  // const [image, setImage] = useState({});

  return (
    <CreatePinContext.Provider value={[newPin, setNewPin]}>
      {children}
    </CreatePinContext.Provider>
  );
};

export default CreatePinContextProvider;
