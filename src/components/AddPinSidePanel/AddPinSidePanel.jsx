import { useState, useContext } from "react";

//components
import SidepanelPinFeed from "../SidepanelPinFeed/SidepanelPinFeed";

// context
import { CreatePinContext } from "../../Context/newPinContext";

// styles
import { Wrapper, Content, Divider } from "./AddPinSidePanel.styles";

// icons
import addSign from "../../images/add-sign.svg";

const AddPinSidePanel = () => {
  const [newPin, setNewPin] = useContext(CreatePinContext);

  const createNewPin = () => {
    setNewPin(true);
  };

  return (
    <>
      <Wrapper>
        <Content>
          <div className="add-new-pin-container" onClick={createNewPin}>
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
