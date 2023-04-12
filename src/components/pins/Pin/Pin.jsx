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
  // state used to show/hide button and filter over the pin
  const [isHovered, setIsHovered] = useState(false);
  // state of user's saved pins
  const [savedPins, setSavedPins] = useState([]);
  // is the current pin on user's saved pin list
  const [isSaved, setIsSaved] = useState(false);

  // queries to handle the save button
  const [addSave, { isLoading }] = useAddSaveMutation();
  const [removeSave] = useRemoveSaveMutation();
  const [getAllSaves] = useGetAllSavesMutation();

  // current signed in user
  const user = useSelector((state) => state.user.value);

  // on initial page load, get all of the signed in user's saved pins
  useEffect(() => {
    getAllSaves({ user_id: user.user_id })
      .unwrap()
      .then((res) => setSavedPins(res));
  }, []);

  // set saved state if user_id found in array
  useEffect(() => {
    // find entry with matching pin_id and user_id
    const isFound = savedPins.find(
      (save) => save.user_id === user.user_id && save.pin_id === props.pin_id
    );
    if (isFound !== undefined) {
      setIsSaved(true);
    } else {
      setIsSaved(false);
    }
  }, [savedPins]);

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
