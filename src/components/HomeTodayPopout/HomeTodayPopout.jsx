import { useState, useEffect, useRef } from "react";

// styles
import { Wrapper, Container, PopoutContainer } from "./HomeTodayPopout.styles";

// image
import whiteMenuArrow from "../../images/menu-arrow-white.svg";
import blackMenuArrow from "../../images/menu-arrow.svg";

const HomeTodayPopout = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
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
                  <button className="home-btn">
                    <div className="popout-option-text">Home</div>
                  </button>
                </div>
                <div className="popout-today-option-container">
                  <button className="today-btn">
                    <div className="popout-option-text">Today</div>
                  </button>
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
