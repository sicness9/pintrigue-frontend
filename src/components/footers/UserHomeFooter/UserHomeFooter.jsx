import { useState, useEffect, useRef } from "react";
// styles
import { Wrapper, FooterContent } from "./UserHomeFooter.styles";

// images
import addSign from "../../../assets/add-sign.svg";
import aboutusSign from "../../../assets/aboutus-sign.svg";

// components
import PopoutAddPinWindow from "../PopoutAddPinWindow/PopoutAddPinWindow";
import PopoutAboutusWindow from "../PopoutAboutusWindow/PopoutAboutusWindow";

const UserHomeFooter = () => {
  const addPinRef = useRef(null);
  const aboutusRef = useRef(null);
  const [openAddPinPopoutWindow, setOpenAddPinPopoutWindow] = useState(false);
  const handleOpenPopoutWindow = () => setOpenAddPinPopoutWindow(true);
  const [openAboutusPopoutWindow, setOpenAboutusPopoutWindow] = useState(false);
  const handleOpenAboutusPopoutWindow = () => setOpenAboutusPopoutWindow(true);

  // function that will change state when clicked outside the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        openAddPinPopoutWindow &&
        addPinRef.current &&
        !addPinRef.current.contains(event.target)
      ) {
        setOpenAddPinPopoutWindow(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openAddPinPopoutWindow]);
  // function that will change state when clicked outside the menu
  useEffect(() => {
    const handleClickOutsideAboutus = (event) => {
      if (
        openAboutusPopoutWindow &&
        aboutusRef.current &&
        !aboutusRef.current.contains(event.target)
      ) {
        setOpenAboutusPopoutWindow(false);
      }
    };

    document.addEventListener("click", handleClickOutsideAboutus);

    return () => {
      document.removeEventListener("click", handleClickOutsideAboutus);
    };
  }, [openAboutusPopoutWindow]);

  // const startAnimation = useSpring({
  //   from: { transform: "translate3d(0, 0px, 0)", zIndex: -1 },
  //   to: [
  //     { transform: "translate3d(0, 60px, 0)", zIndex: 1 },
  //     { transform: "translate3d(0, 0px, 0)", zIndex: 1 },
  //   ],
  // });

  return (
    <Wrapper>
      <FooterContent>
        <div className="footer-btns-container">
          <div className="create-pin-btn-container">
            <div className="create-pin-btn-space-controller">
              <button
                className="create-pin-btn"
                onClick={handleOpenPopoutWindow}
              >
                <div className="create-pin-btn-image-container">
                  <img src={addSign} alt="add a pin button"></img>
                </div>
              </button>
            </div>
            {openAddPinPopoutWindow && (
              <div ref={addPinRef}>
                <PopoutAddPinWindow />
              </div>
            )}
          </div>
          <div className="aboutus-btn-container">
            <div className="aboutus-btn-space-controller">
              <button
                className="aboutus-btn"
                onClick={handleOpenAboutusPopoutWindow}
              >
                <div className="aboutus-btn-image-container">
                  <img src={aboutusSign} alt="about us button"></img>
                </div>
              </button>
            </div>
            {openAboutusPopoutWindow && (
              <div ref={aboutusRef}>
                <PopoutAboutusWindow />
              </div>
            )}
          </div>
        </div>
      </FooterContent>
    </Wrapper>
  );
};

export default UserHomeFooter;
