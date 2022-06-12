// components
import ModalSignUpView from "../ModalSignupView/ModalSignupView";

// styles
import { SignupModalInspiredStyle } from "./SignupModalInspired.styles";

const SignupModalInspired = () => {
  return (
    <SignupModalInspiredStyle>
      <div className="second-page-container">
        <div className="signup-modal">
          <div className="modal-container">
            <div className="modal-content">
              <div className="modal-message-container">
                <h2 className="modal-message">Sign up to get your ideas</h2>
              </div>
              <div className="signup-default-modal">
                <ModalSignUpView />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SignupModalInspiredStyle>
  );
};

export default SignupModalInspired;
