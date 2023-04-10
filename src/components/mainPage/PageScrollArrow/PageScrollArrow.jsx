import { PageScrollArrowStyle } from "./PageScrollArrrow.styles";

import { useSpring } from "react-spring";

// images
import arrowImage from "../../../assets/page-arrow.svg";

const PageScrollArrow = () => {
  const styles = useSpring({
    loop: true,
    from: { y: 200 },
    to: [{ y: 175 }, { y: 200 }],
    config: { duration: 1000 },
  });

  return (
    <PageScrollArrowStyle style={styles}>
      <button className="page-scroll-arrow" style={{ backgroundColor: "red" }}>
        <img src={arrowImage} alt="page-scroll-arrow" />
      </button>
    </PageScrollArrowStyle>
  );
};

export default PageScrollArrow;
