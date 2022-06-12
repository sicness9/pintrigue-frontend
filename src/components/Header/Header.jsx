// Header component

import { useState } from "react";

//styles
import { Content } from "./Header.styles";

// images
import logo from "../../images/logo.svg";

//components
import Modal from "../Modal/Modal";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <>
      <Content>
        <nav className="nav-bar">
          <div className="logo-nav">
            <img className="logo" src={logo} alt="logo" />
            <h1>Pintrigue</h1>
          </div>
          <div className="header-btn-container">
            <button className="log-in-btn" onClick={handleOpen}>
              Log In
            </button>
            <button className="sign-up-btn">Sign Up</button>
          </div>
        </nav>
      </Content>
      <Modal open={open} setOpen={setOpen} />
    </>
  );
};

export default Header;
