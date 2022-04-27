// styles
import { SignupModalInspiredStyle } from "./SignupModalInspired.styles";

import logo from "../../images/logo.svg";

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
                <div className="modal-box">
                  <div className="modal-logo-container">
                    <img
                      className="modal-logo"
                      alt="modal-logo"
                      src={logo}
                    ></img>
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
                      <div className="form-container2">
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
                                <label
                                  className="password-label"
                                  htmlFor="password"
                                >
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
                          <div className="ageInputField">
                            <fieldset>
                              <div className="age-label-container">
                                <label className="age-label" htmlFor="age">
                                  Enter your name
                                </label>
                              </div>
                              <span>
                                <div className="age-input-container">
                                  <input
                                    className="age-input"
                                    id="age"
                                    name="age"
                                    placeholder="Age"
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
                        <p className="other-options">OR</p>
                        <div>
                          <button className="already-have-account-button">
                            Already a member? Log in
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SignupModalInspiredStyle>
  );
};

export default SignupModalInspired;
