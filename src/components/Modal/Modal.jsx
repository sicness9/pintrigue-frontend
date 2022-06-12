// Modal component

import { useRef, useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";

// components
import ModalUnauthedView from "../ModalUnauthedView/ModalUnauthedView";
import ModalLoginPage from "../ModalLoginPage/ModalLoginPage";
import SignupModalInspired from "../SignupModalInspired/SignupModalInspired";
import ModalSignUpView from "../ModalSignupView/ModalSignupView";

// styles
import { AnimatedModal, Content } from "./Modal.styles";

// icons
import logo from "../../images/logo.svg";

// context
import { UserContext } from "../../Context/userContext";

const Modal = (props) => {
  const ref = useRef(null);
  const [isSignIn, setIsSignIn] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (props.open && ref.current && !ref.current.contains(event.target)) {
        props.setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [props, props.open]);

  const animateModal = useSpring({
    opacity: props.open ? 1 : 0,
    duration: 800,
  });

  return (
    <Content>
      {props.open && (
        <div className="modal">
          <AnimatedModal style={animateModal}>
            {!isSignIn && !isSignup && (
              <ModalUnauthedView
                isSignIn={isSignIn}
                setIsSignIn={setIsSignIn}
                isSignup={isSignup}
                setIsSignup={setIsSignup}
                ref={ref}
                setOpen={props.setOpen}
              />
            )}
            {isSignIn && (
              <ModalLoginPage
                setOpen={props.setOpen}
                isSignIn={isSignIn}
                setIsSignIn={setIsSignIn}
                isSignup={isSignup}
                setIsSignup={setIsSignup}
              />
            )}
            {isSignup && (
              <ModalSignUpView
                setOpen={props.setOpen}
                isSignIn={isSignIn}
                setIsSignIn={setIsSignIn}
                isSignup={isSignup}
                setIsSignup={setIsSignup}
              />
            )}
          </AnimatedModal>
        </div>
      )}
    </Content>
  );
};

export default Modal;
