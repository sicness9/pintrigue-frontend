import { useState, useEffect, useRef } from "react";

// styles
import { Wrapper, Container, PopoutContainer } from "./HomeTodayPopout.styles";

// image
import whiteMenuArrow from "../../../images/menu-arrow-white.svg";
import blackMenuArrow from "../../../images/menu-arrow.svg";

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
                  <Link className="home-link" to="/user-home">
                    <button className="home-btn" onClick={handleClose}>
                      <div className="popout-option-text">Home</div>
                    </button>
                  </Link>
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
