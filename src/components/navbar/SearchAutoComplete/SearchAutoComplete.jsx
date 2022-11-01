import { Link } from "react-router-dom";

// styles
import { AutoCompleteList } from "./SearchAutoComplete.styles";

// icons
import searchLogo from "../../../images/search-logo.svg";

const SearchAutoComplete = (props) => {
  const handleClick = (e) => {
    props.setFilteredSuggestions([]);
    props.setSearchValue(e.target.innerText);
    props.setActiveSuggestionIndex(0);
    props.setOpenSuggestion(false);
  };
  return props.filteredSuggestions.length ? (
    <AutoCompleteList>
      <ul className="suggestions">
        {props.filteredSuggestions.map((suggestion, i) => {
          return (
            <li
              key={i}
              className={
                i === props.activeSuggestionIndex ? "suggestion-active" : null
              }
              onClick={handleClick}
            >
              <div className="auto-suggestion">
                <img
                  src={searchLogo}
                  alt="search-logo"
                  className="search-logo"
                />
                <Link
                  reloadDocument
                  to={`/search/pins?category=${suggestion._id}`}
                  className="suggestion-item"
                >
                  {suggestion._id}
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </AutoCompleteList>
  ) : (
    <div className="no-suggestions"></div>
  );
};

export default SearchAutoComplete;
