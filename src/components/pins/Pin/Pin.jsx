// Pin component
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// styles
import { PinStyles } from "./Pin.styles";

// components
import DarkenPinOverlay from "../DarkenPinOverlay/DarkenPinOverlay";
import SaveButton from "../SaveButton/SaveButton";
// mutations
import {
  useAddSaveMutation,
  useRemoveSaveMutation,
  useGetAllSavesMutation,
} from "../../../slices/saveApiSlice";

const Pin = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  // state of user's saved pins
  const [savedPins, setSavedPins] = useState([]);
  // is the current pin on user's saved pin list
  const [isSaved, setIsSaved] = useState(false);
  // current signed in user
  const user = useSelector((state) => state.user.value);

  return (
    <PinStyles>
      <div
        className="home-pin"
        style={{
          height: props.height,
          width: props.width,
        }}
      >
        <div
          className="pin-height-controller"
          style={{
            height: props.height,
            width: props.width,
          }}
          onMouseOver={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered && <DarkenPinOverlay pin_id={props.pin_id} />}
          {isHovered && <SaveButton />}
          <div
            className="pin"
            role="img"
            style={{
              backgroundImage: `url(${props.image_id.url})`,
              height: props.height,
              width: props.width,
            }}
          ></div>
        </div>
      </div>
    </PinStyles>
  );
};

export default Pin;
