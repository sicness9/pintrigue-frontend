import { DisplayedPinStyles } from "./PinDisplay.styles";

const PinDisplay = (props) => {
  return (
    <DisplayedPinStyles>
      <div className="pin-shape-controller">
        <div
          className="pin"
          role="img"
          style={{
            backgroundImage: `url(${props.image_id.url})`,
          }}
        ></div>
      </div>
    </DisplayedPinStyles>
  );
};

export default PinDisplay;
