import { useSelector } from "react-redux";
import { useState } from "react";

// components
import TempUserImage from "../../RandomComponents/TempUserImage/TempUserImage";

// styles
import { ContentWrapper } from "./EditProfile.styles";

// images
import darkFilter from "../../../images/filter-dark.svg";
import lightFilter from "../../../images/filter-light.svg";
import addSign from "../../../images/add-sign.svg";
import addSignLight from "../../../images/add-sign-white.svg";

const EditProfile = () => {
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
    <ContentWrapper>
      <div className="settings-page-container">
          <div className="manage-photo-container">
            <div className="photo-n-btn-container">
              <div className="photo-example">
                <TempUserImage user={user} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default EditProfile;
