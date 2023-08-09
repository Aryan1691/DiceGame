import { useState } from "react";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import TotalScore from "./TotalScore";
import { styled } from "styled-components";
import Rules from "./Rules";
const GameStarted = () => {
  const [score, setScore] = useState(0);
  const [currentDice, setCurrentDice] = useState(1);
  const [selectedNo, setSelectedNo] = useState();
  const [error, setError] = useState("");
  const[show,setShow]=useState(false);
  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
const reset = ()=>{
  setScore(0);
}
  const roleDice = () => {
    if (!selectedNo) {
      setError("You have not selected any number");
      return;
    }
    const randomNumber = generateRandomNumber(1, 6);
    setCurrentDice(randomNumber);
    if (selectedNo === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - randomNumber);
    }
    setSelectedNo(undefined);
  };
const Show = ()=>{
  setShow((prev)=>!prev);
}
  const Button = styled.button`
    background-color: black;
    color: white;
    padding: 10px 18px;
    border-radius: 10px;
    min-width: 215px;
    transition: 0.6s;
    /* border: none; */
    display: flex;
    justify-content: center;
    align-items: center;
    /* text-align: center; */
    margin-bottom: 30px;
    gap:20px;
    margin: auto;
    cursor: pointer;
    &:hover {
      background-color: white;
      color: black;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
  `;
  return (
    <MainContainer>
      <div className="top">
        <TotalScore score={score} />
        <NumberSelector
          setError={setError}
          error={error}
          selectedNo={selectedNo}
          setSelectedNo={setSelectedNo}
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btn">
        <Button onClick={reset}>Reset</Button>
        <Button onClick={Show}>Instruction</Button>
      </div>
      {show ? <Rules/>: ""}
    </MainContainer>
  );
};
const MainContainer = styled.div`
  .top {
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: space-around;
  margin-top:-7%;
  }
`;

export default GameStarted;
