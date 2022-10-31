import Header from "../Header/Header";

import { ContentWrapper } from "./UnauthedView.styles";

// gif
import gif from "../../images/this-is-fine.gif";

const UnauthedView = () => {
  return (
    <>
      <Header />
      <ContentWrapper>
        <div className="error-container">
          <div className="error-title">
            <div className="error-text">Uh oh. Page not found.</div>
            <img src={gif} alt="gif" className="gif" />
          </div>
        </div>
      </ContentWrapper>
    </>
  );
};

export default UnauthedView;
