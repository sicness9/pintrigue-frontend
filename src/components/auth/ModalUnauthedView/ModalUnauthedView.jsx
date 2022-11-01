// styles
import { Wrapper } from "./ModalUnauthedView.styles";

// icons
import logo from "../../../images/logo.svg";
import closeButton from "../../../images/close-button.svg";

const ModalUnauthedView = (props) => {
  const handleLoginClick = (e) => {
    e.preventDefault();
    props.setIsSignIn((prevState) => !prevState);
  };

  const handleCloseClick = () => {
    props.setOpen(false);
  };

  const handleSignInClick = () => {
    props.setIsSignIn(true);
    props.setIsSignup(false);
  };

  const handleSignupClick = () => {
    props.setIsSignup(true);
    props.setIsSignIn(false);
  };

  return (
    <>
      <Wrapper>
        <div className="close-modal-button-container">
          <button className="clode-modal-button" onClick={handleCloseClick}>
            <div className="close-button-image-container">
              <img
                className="close-btn-image"
                src={closeButton}
                alt="close button"
              />
            </div>
          </button>
        </div>
        <div className="modal-top-content">
          <img className="-modal-logo" src={logo} alt="logo" />
          <h1>Welcome back, User!</h1>
          <h2>Image will be there</h2>
          <button className="login-button" onClick={handleLoginClick}>
            Log in
          </button>
        </div>
        <div>
          <hr />
        </div>
        <div className="modal-bottom-content">
          <div className="login-switch-account">
            <div className="signin-dif-account" onClick={handleSignInClick}>
              Not you? Log in with different account
            </div>
          </div>
          <div className="login-sign-up">
            <div className="signup-tag" onClick={handleSignupClick}>
              Don't have an account? Sign up
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default ModalUnauthedView;
