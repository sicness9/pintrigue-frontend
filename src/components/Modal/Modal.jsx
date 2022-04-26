// Modal component

import { useRef, useState, useEffect } from "react"
import { useSpring, animated } from "react-spring"

import { AnimatedModal, Content } from "./Modal.styles"

import logo from "../../images/logo.svg"

const Modal = (props) => {
    const ref = useRef(null)

    
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (props.open && ref.current && !ref.current.contains(event.target)) {
              props.setOpen(false);
          }
        }
  
          document.addEventListener("click", handleClickOutside);
  
          return () => {
              document.removeEventListener("click", handleClickOutside);
          }
    }, [props, props.open])

    const animateModal = useSpring({ opacity: props.open ? 1 : 0, duration: 800 })

    return (
        <Content>
            <div className="modal" ref={ref}>
            {props.open &&
                <AnimatedModal style={animateModal}>
                    <animated.div className="modal-box">
                        <div className="modal-top-content">
                            <img className="-modal-logo" src={logo} alt="logo" />
                            <h1>Welcome back, User!</h1>
                            <h2>Image will be there</h2>
                            <button>Log in</button>
                        </div>
                        <div>
                            <hr/>
                        </div>
                        <div className="modal-bottom-content">
                            <div className="login-switch-account">
                                <a href="#">Not you? Log in with different account</a>
                            </div>
                            <div className="login-sign-up">
                                <a href="#">Don't have an account? Sign up</a>
                            </div>
                        </div>
                    </animated.div>
                </AnimatedModal>
            }
            </div>
        </Content>
        
    )
}

export default Modal
