// styles
import { PinStyle } from "./LandingPagePin.styles";

const LandingPagePin = (props) => {
  return (
    <PinStyle>
      <div className="pin-size-controller">
        <div
          className="pin"
          role="img"
          style={{
            backgroundImage: `url(${props.image_id.url})`,
          }}
        ></div>
      </div>
    </PinStyle>
  );
};

export default LandingPagePin;
