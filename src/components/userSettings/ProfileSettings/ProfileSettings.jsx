import { useSelector } from "react-redux";
import { useState } from "react";

// components
import TempUserImage from "../../RandomComponents/TempUserImage/TempUserImage";
import ProfileSaveBoards from "../ProfileSavedBoards/ProfileSaveBoards";

// styles
import { ContentWrapper } from "./ProfileSettings.styles";

const ProfileSettings = () => {
  const user = useSelector((state) => state.user.value);
  const [createdActive, setCreatedActive] = useState(false);
  const [savedActive, setSavedActive] = useState(true);

  // toggles created button to show if active
  const selectCreateButton = () => {
    if (savedActive) {
      setSavedActive(false);
      setCreatedActive(true);
    }
  };

  // toggles saved button to show if active
  const selectSavedButton = () => {
    if (createdActive) {
      setCreatedActive(false);
      setSavedActive(true);
    }
  };

  return (
    <>
      <ContentWrapper>
        <div className="settings-page-container">
          <div className="manage-photo-container">
            <div className="photo-n-btn-container">
              <div className="photo-example">
                <TempUserImage user={user} />
              </div>
            </div>
          </div>
          <div className="user-info-container">
            <div className="user-handle">@{user.username}</div>
            <div className="follower-count">
              {user.follower_count} following
            </div>
          </div>
          <div className="share-edit-container">
            <button>Share</button>
            <button>Edit Profile</button>
          </div>
          <div className="user-pin-mgmt-container">
            <div className="pin-mgmt-nav">
              <div className="created-btn-container">
                <button onClick={selectCreateButton}>Created</button>
                {createdActive && <div className="under-btn"></div>}
              </div>
              <div className="saved-btn-container">
                <button onClick={selectSavedButton}>Saved</button>
                {savedActive && <div className="under-btn"></div>}
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
      <ProfileSaveBoards />
    </>
  );
};

export default ProfileSettings;
