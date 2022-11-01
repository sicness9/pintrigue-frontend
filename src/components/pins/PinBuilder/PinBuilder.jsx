import { useState, useEffect, useContext } from "react";
import { useDispatch } from "react-redux";

// state managemtn
import { resetPinFeed } from "../../../slices/pinFeedSlice";

// components
import UserHomeFooter from "../../footers/UserHomeFooter/UserHomeFooter";
import AddPinSidePanel from "../AddPinSidePanel/AddPinSidePanel";
import PinBuilderBlueprint from "../PinBuilderBlueprint/PinBuilderBlueprint";

// context
import { CreatePinContext } from "../../../Context/newPinContext";

// styles
import { Wrapper, PinBuilderContent } from "./PinBuilder.styles";

const PinBuilder = () => {
  const dispatch = useDispatch();

  const [components, setComponents] = useState([<PinBuilderBlueprint />]);
  const [newPin, setNewPin] = useContext(CreatePinContext);

  const [createPinPageActive, setCreatePinPageActive] = useState(true);
  const [cancelPageActive, setCancelPageActive] = useState(false);

  // toggles the menu items to show if active or not
  const selectPinPage = () => {
    if (cancelPageActive) {
      setCancelPageActive(false);
      setCreatePinPageActive(true);
    }
  };
  // toggles the menu items to show if active or not
  const selectCancelPage = () => {
    if (createPinPageActive) {
      setCreatePinPageActive(false);
      setCancelPageActive(true);
    }
  };

  // appends a new pin builder to the view
  const createPinBuilderBlueprint = () => {
    setComponents([...components, <PinBuilderBlueprint />]);
  };

  // creates a new pin creation window
  useEffect(() => {
    if (newPin) {
      setNewPin(false);
      createPinBuilderBlueprint();
    }
  }, [newPin, setNewPin]);

  const resetPins = () => {
    dispatch(resetPinFeed());
  };

  return (
    <>
      <Wrapper>
        <PinBuilderContent
          createPinPageActive={createPinPageActive}
          cancelPageActive={cancelPageActive}
        >
          <div className="pin-builder-header-container">
            <div className="create-pin-btn-container" onClick={selectPinPage}>
              <button className="create-pin-btn">
                <div className="create-pin-text">Create a Pin</div>
              </button>
              {createPinPageActive && <div className="under-button"></div>}
            </div>
            <div className="cancel-btn-container" onClick={selectCancelPage}>
              <button className="cancel-btn" onClick={resetPins}>
                <div className="cancel-btn-text">Cancel</div>
              </button>
              {cancelPageActive && <div className="under-button"></div>}
            </div>
          </div>
          {components}
        </PinBuilderContent>
      </Wrapper>
      <AddPinSidePanel />
      <UserHomeFooter />
    </>
  );
};

export default PinBuilder;
