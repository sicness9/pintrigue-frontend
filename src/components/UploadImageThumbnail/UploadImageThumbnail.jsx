import { useState, useEffect } from "react";

//styles
import { ThumbnailStyles } from "./UploadImageThumbnail.styles";

// icons
import trashCan from "../../images/trashcan.svg";

const UploadImageThumbnail = (props) => {
  const [thisThumbnail, setThisThumbnail] = useState(props.thumbnail);
  console.log("received thumbnail", thisThumbnail);

  useEffect(() => {
    setThisThumbnail(props.thumbnail);
  }, [props.thumbnail]);

  return (
    <ThumbnailStyles>
      <div
        className="image-output"
        id="preview"
        style={{ display: props.image.length > 0 ? "block" : "none" }}
      >
        <img className="obj" alt="" src={thisThumbnail.src} />
        <button className="trash-btn">
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
