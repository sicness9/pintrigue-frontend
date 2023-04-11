// components
import SearchResultGrid from "../SearchResultGrid/SearchResultGrid";
import UserHomeFooter from "../../../UI/footer/UserHomeFooter/UserHomeFooter";

// styles
import { Wrapper } from "./SearchResultPage.styles";

const SearchResultPage = () => {
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
