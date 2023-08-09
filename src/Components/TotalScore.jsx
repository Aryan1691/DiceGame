import { styled } from "styled-components";

const ScoreContainer = styled.div`
text-align: center;
max-width: 200px;

  h1 {
    font-size: 100px;
    margin-bottom: -50px;
  }
  p {
    font-size: 24px;
    font-weight: 500px;
  }
`;

// eslint-disable-next-line react/prop-types
const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;
