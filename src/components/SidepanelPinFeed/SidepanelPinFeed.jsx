import { useState, useEffect, useContext } from "react";

// components
import PinForFeed from "../PinForFeed/PinForFeed";

//styles
import { Wrapper, Content } from "./SidepanelPinFeed.styles";

// context
import { CreatePinContext } from "../../Context/newPinContext";

const SidepanelPinFeed = (props) => {
  // const [image, setImage] = useContext(CreatePinContext);
  const [components, setComponents] = useState([<PinForFeed />]);

  const createPin = () => {
    setComponents([...components, <PinForFeed />]);
  };

  useEffect(() => {
    if (props.newPin) {
      props.setNewPin(false);
      createPin();
    }
  }, [props.newPin, props.setNewPin, props]);

  return (
    <Wrapper>
      <Content>
        {components.map((item, i) => (
          <PinForFeed key={i} item={item} />
        ))}
      </Content>
    </Wrapper>
  );
};

export default SidepanelPinFeed;
