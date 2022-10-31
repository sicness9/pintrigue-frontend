import { useSearchParams } from "react-router-dom";

// components
import AuthedHeader from "../AuthedHeader/AuthedHeader";
import SearchResultGrid from "../SearchResultGrid/SearchResultGrid";
import UserHomeFooter from "../UserHomeFooter/UserHomeFooter";

// styles
import { Wrapper } from "./SearchResultPage.styles";

const SearchResultPage = (props) => {
  const params = new URLSearchParams(document.location.search);
  console.log("Search Result Page", params);
  let category = params.get("category");
  console.log("Category:", category);

  return (
    <>
      <Wrapper>
        <SearchResultGrid category={category} />
      </Wrapper>
      <UserHomeFooter />
    </>
  );
};

export default SearchResultPage;
