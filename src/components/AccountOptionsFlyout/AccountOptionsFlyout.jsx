import { useRef, useEffect } from "react";
import { useSpring, animated } from "react-spring";

// styles
import { Wrapper, AnimatedPopoutMenu } from "./AccountOptionsFlyout.styles";

// images
import userProfile from "../../images/temp-user-profile.svg";
import checkMark from "../../images/checkmark.svg";

const AccountOptionsFlyout = (props) => {
  const ref = useRef(null);

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

  const animateMenu = useSpring({
    opacity: props.open ? 1 : 0,
    duration: 800,
  });

  return (
    <Wrapper>
      {props.open && (
        <AnimatedPopoutMenu style={animateMenu} ref={ref}>
          <div className="menu-box">
            <div className="menu-contents-container">
              <div className="contents-space-controller">
                <div className="currently-in-container">
                  <div className="title-container">
                    <div className="currently-in-title">Currently in</div>
                  </div>
                  <div className="header-accountoptionsflyout-container">
                    <div className="header-spacing-controller">
                      <div className="user-info-container">
                        <div className="user-info-box">
                          <div className="user-info-spacing">
                            <div className="user-info-alignment">
                              <a className="user-link" href="#">
                                <div className="user-profile-container">
                                  <div className="image-userinfo-containers">
                                    <div className="user-image-container">
                                      <div className="user-image-shape-controller">
                                        <div className="user-image-space-controller">
                                          <svg
                                            width="100%"
                                            viewBox="-50 -50 100 100"
                                            preserveAspectRatio="xMidYMid meet"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <text
                                              className="user-initial"
                                              font-size="40px"
                                              fill="#111"
                                              dy="0.35em"
                                              text-anchor="middle"
                                            >
                                              N
                                            </text>
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="userinfo-title-container">
                                    <div className="userinfo-users-name">
                                      Nelson Torres
                                    </div>
                                    <div className="userinfo-accounttype-container">
                                      <div className="userinfo-account-type">
                                        Personal
                                      </div>
                                    </div>
                                    <div className="userinfo-email-container">
                                      <div className="userinfo-user-email">
                                        mrnelsontorres@gmail.com
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="check-image-container">
                          <img src={checkMark}></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="more-options-container">
                  <div className="presentation">
                    <div className="title">More Options</div>
                  </div>
                  <div className="menuitem-settings-container">
                    <div className="settings-space-controller">
                      <a className="settings-link" href="#">
                        <div className="settings-link-direction-controller">
                          <div className="settings-link-space-controller">
                            <div className="settings-more-space-controller">
                              <div className="settings-link-alignment">
                                <span className="settings-link-text">
                                  Settings
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="menuitem-logout-container">
                    <div className="logout-space-controller">
                      <a className="logout-link" href="#">
                        <div className="logout-link-direction-controller">
                          <div className="logout-link-space-controller">
                            <div className="logout-more-space-controller">
                              <div className="logout-link-alignment">
                                <span className="logout-link-text">
                                  Log out
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedPopoutMenu>
      )}
    </Wrapper>
  );
};

export default AccountOptionsFlyout;
