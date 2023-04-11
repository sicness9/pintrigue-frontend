// animated main content for home page

import { Suspense, lazy } from "react";
import { animated, useTransition } from "react-spring";

// styles
import { AnimatedMainContentStyles } from "./AnimatedMainContent.styles";

const Pin = lazy(() => import("../../../components/pins/Pin/Pin"));

const AnimatedMainContent = (props) => {
  const animationDuraton = 400;

  const listOfCategories = ["food", "decor", "fashion", "gardening"];

  const homePinTransition = useTransition(props.index, {
    from: { opacity: 0, transform: "translate3d(0, 0px, 0)", zIndex: 0 },
    enter: {
      opacity: 1,
      transform: "translate3d(0, -60px, 0)",
      zIndex: 2,
      delay: 250,
    },
    leave: {
      opacity: 0,
      transform: "translate3d(0, -80px, 0)",
      delay: 750,
      zIndex: 0,
    },
    // trail: 100,
    config: { duration: animationDuraton },
    exitBeforeEnter: true,
  });

  const homePinTransition2 = useTransition(props.index, {
    from: { opacity: 0, transform: "translate3d(0, 0px, 0)", zIndex: 0 },
    enter: {
      opacity: 1,
      transform: "translate3d(0, -60px, 0)",
      zIndex: 2,
      delay: 500,
    },
    leave: {
      opacity: 0,
      transform: "translate3d(0, -80px, 0)",
      delay: 1000,
      zIndex: 0,
    },
    // trail: 200,
    config: { duration: animationDuraton },
    exitBeforeEnter: true,
  });

  const homePinTransition3 = useTransition(props.index, {
    from: { opacity: 0, transform: "translate3d(0, 0px, 0)", zIndex: 0 },
    enter: {
      opacity: 1,
      transform: "translate3d(0, -60px, 0)",
      zIndex: 2,
      delay: 600,
    },
    leave: {
      opacity: 0,
      transform: "translate3d(0, -80px, 0)",
      delay: 1250,
      zIndex: 0,
    },
    // trail: 300,
    config: { duration: animationDuraton },
    exitBeforeEnter: true,
  });

  const homePinTransition4 = useTransition(props.index, {
    from: { opacity: 0, transform: "translate3d(0, 0px, 0)", zIndex: 0 },
    enter: {
      opacity: 1,
      transform: "translate3d(0, -60px, 0)",
      zIndex: 2,
      delay: 700,
    },
    leave: {
      opacity: 0,
      transform: "translate3d(0, -80px, 0)",
      delay: 1500,
      zIndex: 0,
    },
    // trail: 400,
    config: { duration: animationDuraton },
    exitBeforeEnter: true,
  });

  const homePinTransition5 = useTransition(props.index, {
    from: { opacity: 0, transform: "translate3d(0, 0px, 0)", zIndex: 0 },
    enter: {
      opacity: 1,
      transform: "translate3d(0, -60px, 0)",
      zIndex: 2,
      delay: 800,
    },
    leave: {
      opacity: 0,
      transform: "translate3d(0, -80px, 0)",
      delay: 1750,
      zIndex: 0,
    },
    // trail: 500,
    config: { duration: animationDuraton },
    exitBeforeEnter: true,
  });

  const homePinTransition6 = useTransition(props.index, {
    from: { opacity: 0, transform: "translate3d(0, 0px, 0)", zIndex: 0 },
    enter: {
      opacity: 1,
      transform: "translate3d(0, -60px, 0)",
      zIndex: 2,
      delay: 900,
    },
    leave: {
      opacity: 0,
      transform: "translate3d(0, -80px, 0)",
      delay: 2000,
      zIndex: 0,
    },
    // trail: 600,
    config: { duration: animationDuraton },
    exitBeforeEnter: true,
  });

  const homePinTransition7 = useTransition(props.index, {
    from: { opacity: 0, transform: "translate3d(0, 0px, 0)", zIndex: 0 },
    enter: {
      opacity: 1,
      transform: "translate3d(0, -60px, 0)",
      zIndex: 2,
      delay: 1000,
    },
    leave: {
      opacity: 0,
      transform: "translate3d(0, -80px, 0)",
      delay: 2250,
      zIndex: 0,
    },
    // trail: 700,
    config: { duration: animationDuraton },
    exitBeforeEnter: true,
  });

  return (
    <AnimatedMainContentStyles>
      <div className="column-container">
        <div className="presentation">
          <div
            className="home-pin-container all-pins"
            style={{ marginTop: "0px" }}
          >
            {homePinTransition((style, index) => {
              const item = listOfCategories[index];
              return (
                <animated.div style={style} className="home-page-usecase">
                  <Suspense fallback={<div>Loading...</div>}>
                    <Pin
                      image_id={{
                        url: `${import.meta.env.VITE_CDN_URL}${item}1.webp`,
                      }}
                    />
                    <Pin
                      image_id={{
                        url: `${import.meta.env.VITE_CDN_URL}${item}2.webp`,
                      }}
                    />
                    <Pin
                      image_id={{
                        url: `${import.meta.env.VITE_CDN_URL}${item}3.webp`,
                      }}
                    />
                    <Pin
                      image_id={{
                        url: `${import.meta.env.VITE_CDN_URL}${item}4.webp`,
                      }}
                    />
                    <Pin
                      image_id={{
                        url: `${import.meta.env.VITE_CDN_URL}${item}5.webp`,
                      }}
                    />
                  </Suspense>
                </animated.div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="column-container">
        <div className="presentation">
          <div
            className="home-pin-container all-pins"
            style={{ marginTop: "160px" }}
          >
            {homePinTransition2((style, index) => {
              const item = listOfCategories[index];
              return (
                <animated.div style={style} className="home-page-food-usecase">
                  <Suspense fallback={<div>Loading...</div>}>
                    <Pin
                      image_id={{
                        url: `${import.meta.env.VITE_CDN_URL}${item}6.webp`,
                      }}
                    />
                    <Pin
                      image_id={{
                        url: `${import.meta.env.VITE_CDN_URL}${item}7.webp`,
                      }}
                    />
                    <Pin
                      image_id={{
                        url: `${import.meta.env.VITE_CDN_URL}${item}8.webp`,
                      }}
                    />
                    <Pin
                      image_id={{
                        url: `${import.meta.env.VITE_CDN_URL}${item}9.webp`,
                      }}
                    />
                    <Pin
                      image_id={{
                        url: `${import.meta.env.VITE_CDN_URL}${item}10.webp`,
                      }}
                    />
                  </Suspense>
                </animated.div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="column-container">
        <div className="presentation">
          <div
            className="home-pin-container all-pins"
            style={{ marginTop: "240px" }}
          >
            {homePinTransition3((style, index) => {
              const item = listOfCategories[index];
              return (
                <animated.div style={style} className="home-page-food-usecase">
                  <Suspense fallback={<div>Loading...</div>}>
                    <Pin
                      image_id={{
                        url: `${import.meta.env.VITE_CDN_URL}${item}11.webp`,
                      }}
                    />
                    <Pin
                      image_id={{
                        url: `${import.meta.env.VITE_CDN_URL}${item}12.webp`,
                      }}
                    />
                    <Pin
                      image_id={{
                        url: `${import.meta.env.VITE_CDN_URL}${item}13.webp`,
                      }}
                    />
                    <Pin
                      image_id={{
                        url: `${import.meta.env.VITE_CDN_URL}${item}14.webp`,
                      }}
                    />
                    <Pin
                      image_id={{
                        url: `${import.meta.env.VITE_CDN_URL}${item}15.webp`,
                      }}
                    />
                  </Suspense>
                </animated.div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="column-container">
        <div className="presentation">
          <div
            className="home-pin-container all-pins"
            style={{ marginTop: "400px" }}
          >
            {homePinTransition4((style, index) => {
              const item = listOfCategories[index];
              return (
                <animated.div style={style} className="home-page-food-usecase">
                  <Suspense fallback={<div>Loading...</div>}>
                    <Pin
                      image_id={{
                        url: `${import.meta.env.VITE_CDN_URL}${item}16.webp`,
                      }}
                    />
                    <Pin
                      image_id={{
                        url: `${import.meta.env.VITE_CDN_URL}${item}17.webp`,
                      }}
                    />
                    <Pin
                      image_id={{
                        url: `${import.meta.env.VITE_CDN_URL}${item}18.webp`,
                      }}
                    />
                    <Pin
                      image_id={{
                        url: `${import.meta.env.VITE_CDN_URL}${item}19.webp`,
                      }}
                    />
                    <Pin
                      image_id={{
                        url: `${import.meta.env.VITE_CDN_URL}${item}20.webp`,
                      }}
                    />
                  </Suspense>
                </animated.div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="column-container">
        <div className="presentation">
          <div
            className="home-pin-container all-pins"
            style={{ marginTop: "240px" }}
          >
            {homePinTransition5((style, index) => {
              const item = listOfCategories[index];
              return (
                <animated.div style={style} className="home-page-food-usecase">
                  <Suspense fallback={<div>Loading...</div>}>
                    <Pin
                      image_id={{
                        url: `${import.meta.env.VITE_CDN_URL}${item}21.webp`,
                      }}
                    />
                    <Pin
                      image_id={{
                        url: `${import.meta.env.VITE_CDN_URL}${item}22.webp`,
                      }}
                    />
                    <Pin
                      image_id={{
                        url: `${import.meta.env.VITE_CDN_URL}${item}23.webp`,
                      }}
                    />
                    <Pin
                      image_id={{
                        url: `${import.meta.env.VITE_CDN_URL}${item}24.webp`,
                      }}
                    />
                    <Pin
                      image_id={{
                        url: `${import.meta.env.VITE_CDN_URL}${item}25.webp`,
                      }}
                    />
                  </Suspense>
                </animated.div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="column-container">
        <div className="presentation">
          <div
            className="home-pin-container all-pins"
            style={{ marginTop: "160px" }}
          >
            {homePinTransition6((style, index) => {
              const item = listOfCategories[index];
              return (
                <animated.div style={style} className="home-page-food-usecase">
                  <Suspense fallback={<div>Loading...</div>}>
                    <Pin
                      image_id={{
                        url: `${import.meta.env.VITE_CDN_URL}${item}26.webp`,
                      }}
                    />
                    <Pin
                      image_id={{
                        url: `${import.meta.env.VITE_CDN_URL}${item}27.webp`,
                      }}
                    />
                    <Pin
                      image_id={{
                        url: `${import.meta.env.VITE_CDN_URL}${item}28.webp`,
                      }}
                    />
                    <Pin
                      image_id={{
                        url: `${import.meta.env.VITE_CDN_URL}${item}29.webp`,
                      }}
                    />
                    <Pin
                      image_id={{
                        url: `${import.meta.env.VITE_CDN_URL}${item}30.webp`,
                      }}
                    />
                  </Suspense>
                </animated.div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="column-container">
        <div className="presentation">
          <div
            className="home-pin-container all-pins"
            style={{ marginTop: "0px" }}
          >
            {homePinTransition7((style, index) => {
              const item = listOfCategories[index];
              return (
                <animated.div style={style} className="home-page-food-usecase">
                  <Suspense fallback={<div>Loading...</div>}>
                    <Pin
                      image_id={{
                        url: `${import.meta.env.VITE_CDN_URL}${item}31.webp`,
                      }}
                    />
                    <Pin
                      image_id={{
                        url: `${import.meta.env.VITE_CDN_URL}${item}32.webp`,
                      }}
                    />
                    <Pin
                      image_id={{
                        url: `${import.meta.env.VITE_CDN_URL}${item}33.webp`,
                      }}
                    />
                    <Pin
                      image_id={{
                        url: `${import.meta.env.VITE_CDN_URL}${item}34.webp`,
                      }}
                    />
                    <Pin
                      image_id={{
                        url: `${import.meta.env.VITE_CDN_URL}${item}35.webp`,
                      }}
                    />
                  </Suspense>
                </animated.div>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedMainContentStyles>
  );
};

export default AnimatedMainContent;
