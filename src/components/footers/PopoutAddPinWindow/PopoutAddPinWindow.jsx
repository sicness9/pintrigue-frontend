import { Link } from "react-router-dom";

// styles
import { Wrapper, PopoutWindowContent } from "./PopoutAddPinWindow.styles";

//images
import addSign from "../../../images/add-sign.svg";

const PopoutAddPinWindow = () => {
  return (
    <Wrapper>
      <PopoutWindowContent>
        <div className="popout-window-space-controller">
          <div className="add-pin-btn-container">
            <Link className="link-class" to="/pin-builder">
              <button className="add-pin-btn">
                <div className="add-pin-img-container">
                  <img src={addSign} alt="add sign"></img>
                </div>
                <div className="add-pin-text-container">
                  <div className="add-pin-text">Create a Pin</div>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </PopoutWindowContent>
    </Wrapper>
  );
};

export default PopoutAddPinWindow;
