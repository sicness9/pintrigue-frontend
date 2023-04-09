import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// styles
import { SearchSuggestionsStyles } from "./SearchSuggestions.styles";

const SearchSuggestions = (props) => {
  const [data, setData] = useState([]);

  console.log("Search Suggestions", data);

  useEffect(() => {
    let APICall = true;
    if (APICall) {
      axios
        .get("http://127.0.0.1:8000/api/pins/category/", {
          params: { category: props.category },
        })
        .then((res) => {
          console.log("Response: ", res.data);
          if (res.data.length > 1) {
            setData(res.data[1]);
          } else if (res.data.length > 3) {
            setData(res.data[3]);
          } else {
            setData(res.data[0]);
          }
        });
    }
  }, [props.category]);

  return (
    <SearchSuggestionsStyles>
      <div className="search-suggestion-container">
        <div className="search-suggestion">
          <Link
            reloadDocument
            className="suggest-link"
            to={`/search/pins?category=${props.category}`}
          >
            <div className="suggestion-shape-controller">
              <div className="suggestion-image-title-container">
                <div
                  className="suggestion-background-img"
                  style={{
                    backgroundImage: `url(${process.env.REACT_APP_CDN_URL}${data?.image_id})`,
                  }}
                ></div>
                <div className="suggestion-title-container">
                  <div className="suggestion-title-background"></div>
                  <div className="suggestion-title-size-controller">
                    <div className="suggestion-title-space-controller">
                      <div className="suggestion-title-text">
                        {props.category}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </SearchSuggestionsStyles>
  );
};

export default SearchSuggestions;
