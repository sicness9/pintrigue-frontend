import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// styles
import { ModalLoginPageStyles } from "./ModalLoginPage.styles";

// icons
import logo from "../../../images/logo.svg";
import closeButton from "../../../images/close-button.svg";

// state management
import { setAuthed } from "../../../slices/authedSlice";
import { setToken } from "../../../slices/tokenSlice";
import {
  useLoginMutation,
  useVerifyMutation,
} from "../../../slices/authApiSlice";
import { setUser } from "../../../slices/userSlice";

const ModalLoginPage = (props) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.value);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const [verify] = useVerifyMutation();

  // handle state change as fields are filled in
  const handleUsernameInput = (e) => setUsername(e.target.value);
  const handlePasswordInput = (e) => setPassword(e.target.value);

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
      // login
      await handleLogin();
    } catch (err) {
      console.log(err);
    } finally {
      const user = await verify(token).unwrap();
      dispatch(setUser(user));
      setUsername("");
      setPassword("");
      navigate("/user-home");
    }
  };

  const handleCloseClick = () => {
    props.setOpen(false);
  };

  const handleSignupClick = () => {
    props.setIsSignup(true);
    props.setIsSignIn(false);
  };

  const content = isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <ModalLoginPageStyles>
      <div className="sign-in-container">
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
        <div className="login-modal-header">
          <div className="pintrigue-logo-container">
            <img className="logo-img" src={logo} alt="logo" />
          </div>
          <div className="title-container">
            <div className="title-text">Welcome to Pintrigue</div>
          </div>
        </div>
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="sign-in-form">
            <div className="username-input-container">
              <input
                className="signin-username-input-field"
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleUsernameInput}
                value={username}
              />
            </div>
            <div className="password-input-container">
              <input
                className="signin-password-input-field"
                type="password"
                name="password"
                placeholder="Password"
                onChange={handlePasswordInput}
                value={password}
              />
            </div>
          </div>
          <div className="forgot-password-link-container">
            <div className="forgot-password-link-text">
              Forgot your password?
            </div>
          </div>
          <div className="login-btn-container">
            {/* {credentials.username.length &&
              credentials.password.length > 3 ? (
                <button className="login-btn" onClick={OnSubmit}>
                  Log in
                </button>
              ) : (
                <button className="login-btn">Log in</button>
              )} */}
            <button className="login-btn" type="submit">
              Log in
            </button>
          </div>
        </form>
        <div className="divider"></div>
        <div className="sign-up-link-container">
          <div className="sign-up-text" onClick={handleSignupClick}>
            Not on Pintrigue? Sign up
          </div>
        </div>
      </div>
    </ModalLoginPageStyles>
  );

  return content;
};

export default ModalLoginPage;
