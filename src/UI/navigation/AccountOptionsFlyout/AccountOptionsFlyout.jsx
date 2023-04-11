import { useRef, useEffect } from "react";
import { useSpring } from "react-spring";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// styles
import { Wrapper, AnimatedPopoutMenu } from "./AccountOptionsFlyout.styles";

// images
import checkMark from "../../../assets/checkmark.svg";

// state
import { clearToken } from "../../../slices/tokenSlice";
import { setAuthed } from "../../../slices/authedSlice";

const AccountOptionsFlyout = (props) => {
  const ref = useRef(null);
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(clearToken());
    dispatch(setAuthed(false));
  };

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
                                              fontSize="40px"
                                              fill="#111"
                                              dy="0.35em"
                                              textAnchor="middle"
                                            >
                                              {user.username[0].toUpperCase()}
                                            </text>
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="userinfo-title-container">
                                    <div className="userinfo-users-name">
                                      {user.username}
                                    </div>
                                    <div className="userinfo-accounttype-container">
                                      <div className="userinfo-account-type">
                                        Personal
                                      </div>
                                    </div>
                                    <div className="userinfo-email-container">
                                      <div className="userinfo-user-email">
                                        {user.email}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="check-image-container">
                          <img src={checkMark} alt="checkmark menu icon"></img>
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
                      <Link
                        className="settings-link"
                        to="/settings/"
                        onClick={() => props.setOpen(false)}
                      >
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
                      </Link>
                    </div>
                  </div>
                  <div className="menuitem-logout-container">
                    <div className="logout-space-controller">
                      <Link className="logout-link" to="/" onClick={logOut}>
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
                      </Link>
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
