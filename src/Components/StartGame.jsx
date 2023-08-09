import React from "react";
import { styled } from "styled-components";
import diceImg from "/Images/dices.png";
const Container = styled.div`
  max-width: 1180px;
  display: flex;
  height: 100vh;
  margin: 0 auto;
  align-items: center;
  .content {
    div {
      font-size: 90px;
      white-space: nowrap;
    }
  }
`;
const Button = styled.button`
  background-color: black;
  color: white;
  margin-bottom: 70px;
  padding: 10px 18px;
  border-radius: 10px;
  min-width: 220px;
  transition: 0.6s;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;
// eslint-disable-next-line react/prop-types
const StartGame = ({toggle}) => {
  return (
    <React.Fragment>
      <Container>
        <div>
          {" "}
          <img src={diceImg} alt="" width={"90%"} />
        </div>
        <div className="content">
          <div>Dice Game</div>
          <Button onClick={toggle}>Play Now</Button>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default StartGame;
