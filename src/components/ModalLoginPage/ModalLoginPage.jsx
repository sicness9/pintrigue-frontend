import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// context
import { UserContext } from "../../Context/userContext";

// hooks
import useLogin from "../../hooks/useLogin";

// styles
import { ModalLoginPageStyles } from "./ModalLoginPage.styles";

// icons
import logo from "../../images/logo.svg";
import closeButton from "../../images/close-button.svg";

const ModalLoginPage = (props) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const login = useLogin(credentials);

  // handle state change as fields are filled in
  const handleChange = (e) => {
    const { name, value } = e.target;

    setCredentials((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const OnSubmit = async (e) => {
    if (e) {
      e.preventDefault();
    }
    await login;
    // navigate("/user-home");
  };

  const handleCloseClick = () => {
    props.setOpen(false);
  };

  const handleSignupClick = () => {
    props.setIsSignup(true);
    props.setIsSignIn(false);
  };

  console.log("credentials entered: ", credentials);

  return (
    <>
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
          <div className="form-container">
            <form className="sign-in-form">
              <div className="username-input-container">
                <input
                  className="signin-username-input-field"
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={handleChange}
                  value={credentials.username}
                />
              </div>
              <div className="password-input-container">
                <input
                  className="signin-password-input-field"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  value={credentials.password}
                />
              </div>
            </form>
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
              <button className="login-btn" onClick={OnSubmit}>
                Log in
              </button>
            </div>
          </div>
          <div className="divider"></div>
          <div className="sign-up-link-container">
            <div className="sign-up-text" onClick={handleSignupClick}>
              Not on Pintrigue? Sign up
            </div>
          </div>
        </div>
      </ModalLoginPageStyles>
    </>
  );
};

export default ModalLoginPage;
