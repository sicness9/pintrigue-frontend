// components
import PinBoardPreview from "../PinBoardPreview/PinBoardPreview";

// images
import darkFilter from "../../../images/filter-dark.svg";
import lightFilter from "../../../images/filter-light.svg";
import addSign from "../../../images/add-sign.svg";
import addSignLight from "../../../images/add-sign-white.svg";

// styles
import { SavedBoardsContainer } from "./ProfileSaveBoards.styles";

const ProfileSaveBoards = () => {
  return (
    <>
      <SavedBoardsContainer>
        <div className="filter-bar">
          <button className="filter-btn">
            <img
              className="filter-btn-img"
              alt="filter-button"
              src={darkFilter}
            />
          </button>
          <button>
            <img alt="add-pin-btn" src={addSign} />
          </button>
        </div>
      </SavedBoardsContainer>
      <PinBoardPreview />
    </>
  );
};

export default ProfileSaveBoards;
