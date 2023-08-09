import { styled } from "styled-components";
const RulesContent = styled.div`
  background-color: #fbf1f1;
  padding: 20px;
  width: 70vw;
  border: 2px solid black;
  margin: 0 auto;
  margin-top: 10%;
  margin-bottom: 10%;
  h2 {
    font-size: 24px;
    font-weight: bold;
  }
  .text {
    margin-top: 20px;
  }
`;

const Rules = () => {
  return (
    <RulesContent>
      <h2>How to play dice game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get some point as dice{" "}
        </p>
        <p>if you get wrong guess then 2 point will be deducted</p>
      </div>
    </RulesContent>
  );
};

export default Rules;
