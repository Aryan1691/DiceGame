import { styled } from "styled-components";

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;
const NumberSelectorConvertor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 24px;
  }
  div {
    font-size: 24px;
    font-weight: 700;
  }
  .error {
    color: red;
  }
`;
const NumberSelector = ({
  // eslint-disable-next-line react/prop-types
  error,
  // eslint-disable-next-line react/prop-types
  setError,
  // eslint-disable-next-line react/prop-types
  selectedNo,
  // eslint-disable-next-line react/prop-types
  setSelectedNo,
}) => {
  const array = [1, 2, 3, 4, 5];
  const numberSelectorHandler = (value)=>{
    setSelectedNo(value);
    setError("")
  }
  return (
    <NumberSelectorConvertor>
      <p className="error">{error}</p>
      <div className="flex">
        {array.map((val, index) => {
          return (
            <>
              <Box
                isSelected={val === selectedNo}
                key={index}
                onClick={() => {
                  numberSelectorHandler(val);
                }}
              >
                {val}
              </Box>
            </>
          );
        })}
      </div>
      <div>Selected Number</div>
    </NumberSelectorConvertor>
  );
};

export default NumberSelector;
