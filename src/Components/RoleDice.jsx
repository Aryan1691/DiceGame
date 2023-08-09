import  { useState } from "react";
import styled from "styled-components";

const DiceContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  p {
    font-size: 20px;
  }

  .dice {
    cursor: pointer;
    transition: transform 0.5s;
  }

  .rotate {
    transform: rotate(180deg);
  }
`;

// eslint-disable-next-line react/prop-types
const RoleDice = ({currentDice,roleDice}) => {
  const [isRotated, setIsRotated] = useState(false);

  

  const toggleRotation = () => {
    setIsRotated((prev) => !prev);
  };

  return (
    <DiceContainer>
      <div className={`dice ${isRotated ? "rotate" : ""}`} onClick={toggleRotation} >
        <img src={`/Images/dice_${currentDice}.png`} alt={`dice_${currentDice}`}  onClick={roleDice}/>
      </div>
      <p>Click on the dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;
