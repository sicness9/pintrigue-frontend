// Pin component

import { PinStyles } from "./Pin.styles";

const Pin = (props) => {
  return (
    <PinStyles>
      <div className="home-pin">
        <div className="pin-height-controller">
          <div
            className="pin"
            role="img"
            style={{
              backgroundImage: `url(${props.image_id.url})`,
              aspectRatio: "236/355",
            }}
          ></div>
        </div>
      </div>
    </PinStyles>
  );
};

export default Pin;
