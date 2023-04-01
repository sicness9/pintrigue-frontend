import { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

//components
import AccountOptionsFlyout from "../AccountOptionsFlyout/AccountOptionsFlyout";
import SearchBar from "../SearchBar/SearchBar";
import HomeTodayPopout from "../HomeTodayPopout/HomeTodayPopout";

// styles
import { Wrapper, Content } from "./AuthedHeader.styles";

// images
import logo from "../../../images/logo.svg";
import notificationBell from "../../../images/notification-bell.svg";
import inbox from "../../../images/inbox.svg";
import menuArrow from "../../../images/menu-arrow.svg";

// context
import { SuggestionContext } from "../../../Context/SuggestionContext";

const AuthedHeader = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [openSuggestion, setOpenSuggestion] = useContext(SuggestionContext);
  const user = useSelector((state) => state.user.value);

  return (
    <Wrapper>
      <Content>
        <div className="header-background">
          <div className="nav-container-container">
            <div className="nav-space-controller-container">
              <div className="nav-bar-container">
                <nav className="nav-bar">
                  <div className="logo-nav">
                    <a href="/">
                      <img className="logo" src={logo} alt="logo" />
                    </a>
                  </div>
                  <div className="home-today-btn-container">
                    <div className="home-btn-container">
                      <NavLink className="nav-home-btn" to="/user-home">
                        <div className="home-btn-text">Home</div>
                      </NavLink>
                    </div>
                    <div className="today-btn-container">
                      <button className="nav-today-btn">Today</button>
                    </div>
                  </div>
                  {!openSuggestion && <HomeTodayPopout />}
                  <SearchBar />
                  <div className="btns-container">
                    <div className="notification-bell-container">
                      <div className="bell-btn">
                        <img
                          className="bell-logo"
                          src={notificationBell}
                          alt="bell"
                        />
                        <div className="bell-notification-counter">
                          <div className="bell-notification-text">1</div>
                        </div>
                      </div>
                    </div>

                    <div className="notification-inbox-container">
                      <div className="inbox-btn">
                        <img className="inbox-logo" src={inbox} alt="inbox" />
                        <div className="inbox-notification-counter">
                          <div className="inbox-notification-text">1</div>
                        </div>
                      </div>
                    </div>

                    <div className="user-home-container">
                      <div className="header-profile">
                        <Link className="profile-link" to="/settings/">
                          <div className="profile-img-container">
                            <div className="profile-image-wrapper">
                              <div className="profile-button-size-controller">
                                <div className="profile-btn">
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
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="header-accounts-options-button">
                      <button
                        className="accounts-options-btn"
                        onClick={handleOpen}
                      >
                        <div className="menu-space-controller-contianer">
                          <div className="options-image-container">
                            <img src={menuArrow} alt="menu-arrow"></img>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </Content>
      <AccountOptionsFlyout open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default AuthedHeader;
