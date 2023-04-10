// Pin component
import { useState } from "react";

// styles
import { PinStyles } from "./Pin.styles";

// components
import DarkenPinOverlay from "../DarkenPinOverlay/DarkenPinOverlay";

const Pin = (props) => {
  const [isHovered, setIsHovered] = useState(false);

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
        >
          <div
            className="pin"
            role="img"
            style={{
              backgroundImage: `url(${props.image_id.url})`,
              height: props.height,
              width: props.width,
            }}
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered && <DarkenPinOverlay />}
          </div>
        </div>
      </div>
    </PinStyles>
  );
};

export default Pin;
