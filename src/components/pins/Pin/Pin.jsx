// Pin component
import { useState } from "react";

import { PinStyles } from "./Pin.styles";

const Pin = (props) => {
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
          ></div>
        </div>
      </div>
    </PinStyles>
  );
};

export default Pin;
