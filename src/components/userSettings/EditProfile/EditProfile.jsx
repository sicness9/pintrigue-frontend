import { useSelector } from "react-redux";

// components
import TempUserImage from "../../RandomComponents/TempUserImage/TempUserImage";

// styles
import { ContentWrapper } from "./EditProfile.styles";

const EditProfile = () => {
  const user = useSelector((state) => state.user.value);
  return (
    <ContentWrapper>
      <div className="settings-page-container">
        <div className="side-nav-container">
          <ul className="settings-options-list">
            <li>Public profile</li>
            <li>Personal information</li>
            <li>Account Manangement</li>
            <li>Tune your home feed</li>
          </ul>
        </div>
        <div className="page-content-container">
          <div className="title-container">
            <h1>Public Profile</h1>
            <p>People visiting your profile will see the following info</p>
          </div>
          <div className="manage-photo-container">
            <div className="photo-title">Photo</div>
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
