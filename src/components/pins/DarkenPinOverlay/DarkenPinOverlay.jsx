// component
import SaveButton from "../SaveButton/SaveButton";

// styles
import { OverlayStyle } from "./DarkenPinOverlay.styles";

const DarkenPinOverlay = (props) => {
  return (
    <OverlayStyle href={`/pin/${props.pin_id}`}>
      {/* <SaveButton /> */}
    </OverlayStyle>
  );
};

export default DarkenPinOverlay;
