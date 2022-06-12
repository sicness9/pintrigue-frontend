import { useState, useContext } from "react";

// styles
import { Wrapper, Container } from "./SearchButton.styles";

// icon
import searchIcon from "../../images/search-logo.svg";

// context
import { SuggestionContext } from "../../Context/SuggestionContext";

// components
import PopoutSuggestionBox from "../PopoutSuggestionBox/PopoutSuggestionBox";

const SearchButton = (props) => {
  const handleOpenSuggestion = () => setOpenSuggestion(true);
  const [openSuggestion, setOpenSuggestion] = useContext(SuggestionContext);

  return (
    <Wrapper style={{ display: openSuggestion && "none" }}>
      <Container>
        <button className="search-btn" onClick={handleOpenSuggestion}>
          <div className="search-btn-image-container">
            <img src={searchIcon} alt="search icon"></img>
          </div>
        </button>
      </Container>
    </Wrapper>
  );
};

export default SearchButton;
