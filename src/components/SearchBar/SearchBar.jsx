import { useState, useEffect } from "react";

// styles
import { SearchBarStyles } from "./SearchBar.styles";

// images
import searchLogo from "../../images/search-logo.svg";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <SearchBarStyles>
      <div className="nav-search-container">
        <div className="nav-search-container-for-container">
          <div className="nav-search-item-container">
            <div className="search-logo-container">
              <img className="search-logo" src={searchLogo} alt="search" />
            </div>
            <input
              autoCapitalize="off"
              autoComplete="off"
              autoCorrect="off"
              className="nav-search"
              type="search"
              placeholder="Search"
              onChange={(event) => {
                setSearchValue(event.currentTarget.value);
              }}
              value={searchValue}
            ></input>
          </div>
        </div>
      </div>
    </SearchBarStyles>
  );
};

export default SearchBar;
