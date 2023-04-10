// styles
import { FeedPin } from "./PinForFeed.styles";

// assets
import noImage from "../../../assets/noimage-icon.svg";

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
