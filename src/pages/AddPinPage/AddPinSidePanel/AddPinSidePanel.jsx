import { useContext } from "react";

//components
import SidepanelPinFeed from "../SidepanelPinFeed/SidepanelPinFeed";

// context
import { CreatePinContext } from "../../../Context/newPinContext";

// styles
import { Wrapper, Content, Divider } from "./AddPinSidePanel.styles";

// assets
import addSign from "../../../assets/add-sign.svg";

const AddPinSidePanel = () => {
  const [newPin, setNewPin] = useContext(CreatePinContext);

  const createNewPin = () => {
    setNewPin(true);
  };

  return (
    <>
      <Wrapper>
        <Content onClick={createNewPin}>
          <div className="add-new-pin-container">
            <button className="add-new-pin-btn">
              <img src={addSign} alt="new pin" />
            </button>
          </div>
        </Content>
        <Divider></Divider>
      </Wrapper>
      <SidepanelPinFeed newPin={newPin} setNewPin={setNewPin} />
    </>
  );
};

export default AddPinSidePanel;
