import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

// styles
import { Wrapper, Container, PopoutContainer } from "./HomeTodayPopout.styles";

// image
import whiteMenuArrow from "../../../images/menu-arrow-white.svg";
import blackMenuArrow from "../../../images/menu-arrow.svg";
import checkMark from "../../../images/checkmark.svg";

const HomeTodayPopout = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (open && ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  return (
    <>
      <Wrapper>
        <Container open={open}>
          <div className="btn-container" onClick={handleOpen}>
            <button className="home-btn">Home</button>
            <img
              src={open ? whiteMenuArrow : blackMenuArrow}
              alt="drop down arrow"
            ></img>
          </div>
        </Container>
      </Wrapper>
      {open && (
        <PopoutContainer ref={ref}>
          <div className="popout-shape-controller">
            <div className="popout-space-controller">
              <div className="popout-options-container">
                <div className="popout-home-option-container">
                  <NavLink
                    className="home-btn"
                    to="/user-home"
                    onClick={handleClose}
                  >
                    <div className="popout-option-text">
                      Home
                      <NavLink
                        to="/user-home"
                        style={({ isActive }) => {
                          return {
                            display: isActive ? "flex" : "none",
                          };
                        }}
                      >
                        <img
                          alt="checkmark"
                          className="nav-checkmark"
                          src={checkMark}
                        />
                      </NavLink>
                    </div>
                  </NavLink>
                </div>
                <div className="popout-today-option-container">
                  <Link className="today-link">
                    <button className="today-btn" onClick={handleClose}>
                      <div className="popout-option-text">Today</div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </PopoutContainer>
      )}
    </>
  );
};

export default HomeTodayPopout;
