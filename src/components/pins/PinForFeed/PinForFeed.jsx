// styles
import { FeedPin } from "./PinForFeed.styles";

// icons
import noImage from "../../../images/noimage-icon.svg";

const PinForFeed = (props) => {
  return (
    <FeedPin>
      <div className="image-container" id="preview">
        <img src={noImage} alt="new pin" />
      </div>
    </FeedPin>
  );
};

export default PinForFeed;
