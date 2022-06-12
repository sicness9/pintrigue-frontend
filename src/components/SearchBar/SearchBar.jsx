import { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";

// styles
import { SearchBarStyles } from "./SearchBar.styles";

// images
import searchLogo from "../../images/search-logo.svg";

// components
import PopoutSuggestionBox from "../PopoutSuggestionBox/PopoutSuggestionBox";
import SearchButton from "../SearchButton/SearchButton";

// Context
import { SuggestionContext } from "../../Context/SuggestionContext";

// data
import { useFetchAllPins } from "../../hooks/useFetchAllPins";

const SearchBar = (props) => {
  const handleOpenSuggestion = () => setOpenSuggestion(true);
  const [searchValue, setSearchValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [openSuggestion, setOpenSuggestion] = useContext(SuggestionContext);
  const ref = useRef(null);
  const suggestions = useFetchAllPins();
  const navigate = useNavigate();

  console.log("Suggestions: ", suggestions);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        openSuggestion &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setOpenSuggestion(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openSuggestion, setOpenSuggestion]);

  const handleChange = (e) => {
    const { value } = e.target;

    const unLinked = suggestions.filter((suggestion) => {
      return suggestion._id.toLowerCase().indexOf(value.toLowerCase()) > -1;
    });
    setSearchValue(value);
    setFilteredSuggestions(unLinked);
    setActiveSuggestionIndex(0);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate(`/search/pins?category=${searchValue}`, { replace: true });
      setOpenSuggestion(false);
      window.location.reload(false);
    }
  };

  return (
    <>
      <SearchButton />
      <SearchBarStyles style={{ display: openSuggestion && "block" }} ref={ref}>
        <div className="nav-search-container">
          <div className="nav-search-item-container">
            <div className="search-logo-container">
              <img className="search-logo" src={searchLogo} alt="search" />
            </div>
            <input
              ref={ref}
              autoCapitalize="off"
              autoComplete="off"
              autoCorrect="off"
              className="nav-search"
              type="search"
              placeholder="Search"
              onChange={handleChange}
              value={searchValue}
              onClick={handleOpenSuggestion}
              onKeyDown={handleKeyDown}
            />
            {openSuggestion && (
              <div>
                <PopoutSuggestionBox
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  filteredSuggestions={filteredSuggestions}
                  activeSuggestionIndex={activeSuggestionIndex}
                  setFilteredSuggestions={setFilteredSuggestions}
                  setActiveSuggestionIndex={setActiveSuggestionIndex}
                  setOpenSuggestion={setOpenSuggestion}
                />
              </div>
            )}
          </div>
        </div>
      </SearchBarStyles>
    </>
  );
};

export default SearchBar;
