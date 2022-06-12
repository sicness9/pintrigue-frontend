// styles
import { Wrapper } from "./ModalSignupView.styles";

// icons
import logo from "../../images/logo.svg";
import closeButton from "../../images/close-button.svg";

const ModalSignUpView = (props) => {
  const handleCloseClick = () => {
    props.setOpen(false);
  };

  const handleSignInClick = () => {
    props.setIsSignIn(true);
    props.setIsSignup(false);
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
        <div className="modal-box">
          <div className="modal-logo-container">
            <img className="modal-logo" alt="modal-logo" src={logo}></img>
          </div>
          <div className="modal-title-container">
            <h1 className="modal-title">Welcome to Pintrigue</h1>
          </div>
          <div className="container-for-sub-title">
            <div className="sub-title-container">
              <div className="sub-title">Find new ideas to try</div>
            </div>
          </div>
          <div className="signup-options">
            <div className="form-container">
              <form className="register-form">
                <div className="emailInputField">
                  <fieldset>
                    <div className="email-label-container">
                      <label className="email-label" htmlFor="email">
                        Continue with email
                      </label>
                    </div>
                    <span>
                      <div className="email-input-container">
                        <input
                          autoComplete="email"
                          className="email-input"
                          id="email"
                          name="id"
                          placeholder="Email"
                          type="email"
                        ></input>
                      </div>
                    </span>
                  </fieldset>
                </div>
                <div className="passwordInputField">
                  <fieldset>
                    <div className="password-label-container">
                      <label className="password-label" htmlFor="password">
                        Create a password
                      </label>
                    </div>
                    <span>
                      <div className="password-input-container">
                        <input
                          autoComplete="new-password"
                          className="password-input"
                          id="password"
                          name="password"
                          placeholder="Create a password"
                          type="password"
                        ></input>
                      </div>
                    </span>
                  </fieldset>
                </div>
                <div className="usernameInputField">
                  <fieldset>
                    <div className="username-label-container">
                      <label className="username-label" htmlFor="username">
                        Enter your name
                      </label>
                    </div>
                    <span>
                      <div className="username-input-container">
                        <input
                          className="username-input"
                          id="username"
                          name="username"
                          placeholder="Username"
                        ></input>
                      </div>
                    </span>
                  </fieldset>
                </div>
                <div className="registerFormSubmitButton">
                  <button className="signup-button" type="submit">
                    Continue
                  </button>
                </div>
              </form>
              <div className="divider"></div>
              <div className="active-account-container">
                <button
                  className="already-have-account-button"
                  onClick={handleSignInClick}
                >
                  Already a member? Log in
                </button>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default ModalSignUpView;
