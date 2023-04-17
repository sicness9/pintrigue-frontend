// styles
import { PinViewSmallStyles } from "./PinViewSmall.styles";

// components
import PinDisplay from "../PinDisplay/PinDisplay";
import PinDetails from "../PinDetails/PinDetails";

const PinViewSmall = (props) => {
  return (
    <PinViewSmallStyles>
      <PinDisplay
        image_id={{
          url: `${import.meta.env.VITE_CDN_URL}${props.pin?.image_id}`,
        }}
      />
      <PinDetails pin={props.pin} />
    </PinViewSmallStyles>
  );
};

export default PinViewSmall;
