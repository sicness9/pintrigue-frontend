import { useState, useContext } from "react";
import { Link } from "react-router-dom";

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
import userLogo from "../../../images/temp-user-profile.svg";
import menuArrow from "../../../images/menu-arrow.svg";

// context
import { SuggestionContext } from "../../../Context/SuggestionContext";

const AuthedHeader = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [openSuggestion, setOpenSuggestion] = useContext(SuggestionContext);

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
                      <Link to="/user-home">
                        <button className="nav-home-btn">Home</button>
                      </Link>
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
                        <a className="profile-link" href="#">
                          <div className="profile-img-container">
                            <div className="profile-image-wrapper">
                              <div className="profile-button-size-controller">
                                <div className="profile-btn">
                                  <div className="img-container">
                                    <img
                                      className="user-logo"
                                      src={userLogo}
                                      alt="user"
                                    ></img>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
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
