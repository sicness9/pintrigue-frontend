import { useContext } from "react";

import { DarkenBackgroundStyles } from "./DarkenBackground.styles";

import { SuggestionContext } from "../../Context/SuggestionContext";

const DarkenBackground = () => {
  const suggestionMenuOpen = useContext(SuggestionContext);
  console.log("Is menu open?", suggestionMenuOpen);

  return (
    <DarkenBackgroundStyles
      style={{ visibility: suggestionMenuOpen ? "visible" : "hidden " }}
    ></DarkenBackgroundStyles>
  );
};

export default DarkenBackground;
