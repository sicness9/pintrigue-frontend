import styled from "styled-components";

export const PinViewSmallStyles = styled.div`
  margin: 85px auto 20px auto;
  display: none;
  box-shadow: rgb(0, 0, 0, 0.5) 0px 3px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 1250px;
  width: 800px;
  border-radius: 30px;
  overflow: hidden;

  @media screen and (max-width: 1250px) {
    display: flex;
  }
`;
