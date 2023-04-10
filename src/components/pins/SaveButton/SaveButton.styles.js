import styled from "styled-components";

export const SaveButtonStyles = styled.button`
  height: 50px;
  width: 65px;
  margin: 10px 0 0 165px;
  background-color: var(--primary-color);
  position: absolute;
  border: none;
  border-radius: 27px;
  z-index: 100;
  cursor: pointer;

  &:hover {
    background-color: var(--colorRedHovered);
    transition: background-color 0.1s;
  }

  .btn-text {
    color: white;
    font-weight: 600;
    font-size: 16px;
  }
`;
