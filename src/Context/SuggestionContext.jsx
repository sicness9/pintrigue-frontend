import { useState, createContext, useEffect } from "react";

export const SuggestionContext = createContext();

const SuggestionContextProvider = ({ children }) => {
  const [openSuggestion, setOpenSuggestion] = useState(false);
  const [suggestionMenuOpen, setSuggestionMenuOpen] = useState(false);

  useEffect(() => {
    if (openSuggestion) {
      setSuggestionMenuOpen(true);
    } else {
      setSuggestionMenuOpen(false);
    }
  }, [openSuggestion, setSuggestionMenuOpen]);

  return (
    <SuggestionContext.Provider
      value={[
        openSuggestion,
        setOpenSuggestion,
        suggestionMenuOpen,
        setSuggestionMenuOpen,
      ]}
    >
      {children}
    </SuggestionContext.Provider>
  );
};

export default SuggestionContextProvider;
