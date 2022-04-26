// main component

import { useState } from "react";

import axios from "axios";

import {
  Wrapper,
  TitleContent,
  AnimatedTitle,
  AnimatedCarousel,
} from "./Main.styles";
import { useTransition, animated, config } from "react-spring";

// components
import AnimatedMainContent from "../AnimatedMainContent/AnimatedMainContent";
import BottomFade from "../BottomFade/BottomFade";

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

  // search for pins by category
  // useEffect(() => {
  //     let APICall = true
  //     if (APICall) {
  //         axios.get('http://127.0.0.1:8000/api/pins/category/',
  //         {
  //             params: {
  //                 "category": "Food"
  //             }
  //         })
  //         .then(res => {
  //             setPins(res.data);
  //         })
  //         return () => {
  //             APICall = false;
  //             console.log(pins)
  //         }
  //     }
  // }, [])

  console.log("Index: ", index);

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
    leave: { opacity: 0, transform: "translate3d(0, -50px, 0)", delay: 4000 },
    // trail: 100,
    config: { config: config.slow, duration: 500 },
    exitBeforeEnter: true,
    onRest: handleRest,
  });

  return (
    <Wrapper>
      <div className="main">
        <TitleContent>
          <div className="main-title-content">
            <div className="home-main-title">
              <h1>Get your next</h1>
            </div>
            <AnimatedTitle>
              {transitions((style, index) => {
                const item = listOfItems[index];
                return <animated.div style={style}>{item}</animated.div>;
              })}
            </AnimatedTitle>

            <AnimatedCarousel>
              <ul>
                <li>
                  <button className={item === 0 ? "dot-1" : "dot-0"}></button>
                </li>
                <li>
                  <button className={item === 1 ? "dot-2" : "dot-0"}></button>
                </li>
                <li>
                  <button className={item === 2 ? "dot-3" : "dot-0"}></button>
                </li>
                <li>
                  <button className={item === 3 ? "dot-4" : "dot-0"}></button>
                </li>
              </ul>
            </AnimatedCarousel>
          </div>
        </TitleContent>
        <AnimatedMainContent index={index} setIndex={setIndex} items={items} />
        <BottomFade/>
      </div>
    </Wrapper>
  );
};

export default Main;
