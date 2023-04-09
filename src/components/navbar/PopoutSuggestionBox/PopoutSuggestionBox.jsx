// components
import SearchSuggestions from "../SearchSuggestions/SearchSuggestions";
import SearchAutoComplete from "../SearchAutoComplete/SearchAutoComplete";

// styles
import { PopoutSuggestionBoxStyles } from "./PopoutSuggestionBox.styles";

// hooks
import { useFetchPopularCategories } from "../../../hooks/useFetchPopularCategories";

const PopoutSuggestionBox = (props) => {
  const data = useFetchPopularCategories();

  return (
    <PopoutSuggestionBoxStyles>
      <div className="suggestion-box-container">
        <div className="suggestion-box-size-controller">
          <div className="suggestion-box-space-controller">
            <div className="suggestion-box-header-container">
              {!props.searchValue.length && (
                <div className="header-title-container">
                  <div className="header-title-text">Popular on Pintrigue</div>
                </div>
              )}
              {!props.searchValue.length ? (
                <div className="suggestion-result-container">
                  {data.map((pin, i) => (
                    <SearchSuggestions
                      key={i}
                      category={pin._id}
                      setOpenSuggestion={props.setOpenSuggestion}
                      openSuggestion={props.openSuggestion}
                    />
                  ))}
                </div>
              ) : (
                <div className="search-result-container">
                  <SearchAutoComplete
                    searchValue={props.searchValue}
                    setSearchValue={props.setSearchValue}
                    setFilteredSuggestions={props.setFilteredSuggestions}
                    activeSuggestionIndex={props.activeSuggestionIndex}
                    setActiveSuggestionIndex={props.setActiveSuggestionIndex}
                    setOpenSuggestion={props.setOpenSuggestion}
                    filteredSuggestions={props.filteredSuggestions}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </PopoutSuggestionBoxStyles>
  );
};

export default PopoutSuggestionBox;
