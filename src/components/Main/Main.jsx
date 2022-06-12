// main component

import { useState } from "react";
import { useTransition, animated, config } from "react-spring";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// styles
import {
  Wrapper,
  TitleContent,
  AnimatedTitle,
  AnimatedCarousel,
  EntireScreenWrapper,
} from "./Main.styles";

// components
import AnimatedMainContent from "../AnimatedMainContent/AnimatedMainContent";
import BottomFade from "../BottomFade/BottomFade";
import SignupModalInspired from "../SignupModalInspired/SignupModalInspired";
import Header from "../Header/Header";

const Main = () => {
  const listOfItems = [
    <p className="home-page-food">weeknight dinner idea</p>,
    <p className="home-page-homeDecor">home decor idea</p>,
    <p className="home-page-fashion">new look outfit</p>,
    <p className="home-page-gardening">green thumb idea</p>,
  ];

  const listOfNums = [0, 1, 2, 3];

  const [items, setItems] = useState(listOfItems);
  const [index, setIndex] = useState(0);
  const item = listOfNums[index];

  const handleRest = () => {
    if (index === items.length - 0.5) {
      setIndex(0);
    } else {
      setIndex((prevIndex) => {
        return (prevIndex + 0.5) % items.length;
      });
    }
  };

  const transitions = useTransition(index, {
    from: { opacity: 0, transform: "translate3d(0, 50%, 0)", delay: 800 },
    enter: { opacity: 1, transform: "translate3d(0, 0px, 0)", delay: 2500 },
    leave: { opacity: 0, transform: "translate3d(0, -50px, 0)", delay: 2250 },
    // trail: 100,
    config: { config: config.slow, duration: 500 },
    exitBeforeEnter: true,
    onRest: handleRest,
  });

  return (
    <EntireScreenWrapper>
      <Header />
      <Wrapper>
        <div className="page-container">
          <Parallax
            pages={2}
            style={{ top: 0, left: 0 }}
            config={{ config: config.molasses, duration: 500 }}
          >
            <ParallaxLayer offset={0} speed={2.5}>
              <div className="main">
                <TitleContent>
                  <div className="home-main-title">Get your next</div>

                  {transitions((style, index) => {
                    const item = listOfItems[index];
                    return <AnimatedTitle style={style}>{item}</AnimatedTitle>;
                  })}

                  <AnimatedCarousel>
                    <ul>
                      <li>
                        <button
                          className={item === 0 ? "dot-1" : "dot-0"}
                        ></button>
                      </li>
                      <li>
                        <button
                          className={item === 1 ? "dot-2" : "dot-0"}
                        ></button>
                      </li>
                      <li>
                        <button
                          className={item === 2 ? "dot-3" : "dot-0"}
                        ></button>
                      </li>
                      <li>
                        <button
                          className={item === 3 ? "dot-4" : "dot-0"}
                        ></button>
                      </li>
                    </ul>
                  </AnimatedCarousel>
                </TitleContent>
                <AnimatedMainContent
                  index={index}
                  setIndex={setIndex}
                  items={items}
                />
                <BottomFade />
              </div>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={0.5}>
              <SignupModalInspired />
            </ParallaxLayer>
          </Parallax>
        </div>
      </Wrapper>
    </EntireScreenWrapper>
  );
};

export default Main;
