import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// styles
import { Wrapper } from "./ModalSignupView.styles";

// icons
import logo from "../../../assets/logo.svg";
import closeButton from "../../../assets/close-button.svg";

// state management
import { useSignupMutation } from "../../../slices/userApiSlice";
import {
  useLoginMutation,
  useVerifyMutation,
} from "../../../slices/authApiSlice";
import { setToken } from "../../../slices/tokenSlice";
import { setAuthed } from "../../../slices/authedSlice";
import { setUser } from "../../../slices/userSlice";

const ModalSignUpView = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [signup] = useSignupMutation();
  const [login] = useLoginMutation();
  const [verify] = useVerifyMutation();
  const token = useSelector((state) => state.token.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // handle state change for input fields
  const handleEmailInput = (e) => setEmail(e.target.value);
  const handlePasswordInput = (e) => setPassword(e.target.value);
  const handleUsernameInput = (e) => setUsername(e.target.value);

  const handleCloseClick = () => {
    props.setOpen(false);
  };

  const handleSignInClick = () => {
    props.setIsSignIn(true);
    props.setIsSignup(false);
  };

  const handleSignUp = async () => {
    const data = {
      username: username,
      password: password,
      email: email,
      image_id: "",
    };
    await signup(data).unwrap();
  };

  const handleLogin = async () => {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    const response = await login(formData).unwrap();
    dispatch(setToken(response.access_token));
    dispatch(setAuthed(true));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // sign up
      await handleSignUp();

      // log in
      await handleLogin();
      setUsername("");
      setPassword("");
      setEmail("");

      // verify user with token
      const user = await verify(token).unwrap();
      dispatch(setUser(user));
      navigate("/user-home");
    } catch (err) {
      console.log(err);
    }
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
              <form className="register-form" onSubmit={handleSubmit}>
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
                          onChange={handleEmailInput}
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
                          onChange={handlePasswordInput}
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
                          onChange={handleUsernameInput}
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
