import styled from "styled-components";
import { animated } from "react-spring";

export const PageScrollArrowStyle = styled(animated.div)`
    .page-scroll-arrow {
        z-index: 1;
        pointer-events: none;
        position: fixed;
        border-radius: 50%;
        border-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        width: 50px;
        outline: none;
        cursor: pointer;
        left: calc(50% - 25px);
        bottom: 32px;

        .img {
            height: 24px;
            width: 24px;
            display: block;
        }
    }
`