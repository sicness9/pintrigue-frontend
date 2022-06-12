// styles
import { Wrapper, PopoutWindowContent } from "./PopoutAboutusWindow.styles";

const PopoutAboutusWindow = () => {
  return (
    <Wrapper>
      <PopoutWindowContent>
        <div className="popout-window-space-controller">
          <div className="aboutus-btn-container">
            <button className="aboutus-btn">
              <div className="aboutus-text-container">
                <div className="aboutus-text">About</div>
              </div>
            </button>
          </div>
        </div>
      </PopoutWindowContent>
    </Wrapper>
  );
};

export default PopoutAboutusWindow;
