import { useState } from "react";
import styled from "styled-components";

export default function NumberBaseball() {
  let answerNumber: number[] = [];

  const [startButtonState, setStartButtonState] = useState<boolean>(true);
  const [inputNumber, setInputNumber] = useState<string>("");

  const handleOnChangeInputNumber = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputNumber(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (inputNumber.length === 3) {
      } else {
        alert("3개의 수만 입력할 수 있습니다.");
      }
    }
  };

  const onClickStartButton = () => {
    while (answerNumber.length <= 2) {
      const randomNumber = Math.floor(Math.random() * 10);
      if (!answerNumber.includes(randomNumber)) {
        answerNumber = [...answerNumber, randomNumber];
        console.log(answerNumber);
      }
    }
    console.log(answerNumber);
    setStartButtonState(false);
  };

  return (
    <Wrapper>
      <StartButton
        onClick={onClickStartButton}
        startButtonState={startButtonState}
      >
        시작
      </StartButton>
      <NumberInput
        type="text"
        value={inputNumber}
        onChange={handleOnChangeInputNumber}
        onKeyDown={handleKeyDown}
      ></NumberInput>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StartButton = styled.button<{ startButtonState: boolean }>`
  display: ${(props) => (props.startButtonState === false ? "none" : "")};
  width: 100px;
  height: 50px;
  border: 1px solid black;
  cursor: pointer;
`;

const NumberInput = styled.input`
  width: 500px;
`;