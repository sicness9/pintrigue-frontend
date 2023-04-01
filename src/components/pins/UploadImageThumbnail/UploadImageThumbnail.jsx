import { useDispatch } from "react-redux";

//styles
import { ThumbnailStyles } from "./UploadImageThumbnail.styles";

// icons
import trashCan from "../../../images/trashcan.svg";

// state
import { removePinFromFeed } from "../../../slices/pinFeedSlice";

const UploadImageThumbnail = (props) => {
  const dispatch = useDispatch();

  const removePin = () => {
    props.setImage(null);
    props.setThumbnail(null);
    dispatch(removePinFromFeed(props.thumbnail.src));
  };

  return (
    <ThumbnailStyles>
      <div
        className="image-output"
        id="preview"
        style={{ display: props.thumbnail ? "block" : "none" }}
      >
        <img
          className="obj"
          alt=""
          src={props.thumbnail ? props?.thumbnail?.src : ""}
        />
        <button className="trash-btn" onClick={removePin}>
          <div className="trash-btn-image-container">
            <img src={trashCan} alt="trash can" />
          </div>
          <span className="delete-tooltip">Delete image</span>
        </button>
      </div>
    </ThumbnailStyles>
  );
};

export default UploadImageThumbnail;
