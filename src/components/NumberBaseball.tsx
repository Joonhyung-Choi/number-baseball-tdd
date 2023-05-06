import { useEffect, useState } from "react";
import styled from "styled-components";

export default function NumberBaseball() {
  const [answerNumberState, setAnswerNumberState] = useState<number[]>([]);
  const [startButtonState, setStartButtonState] = useState<boolean>(true);
  const [inputNumber, setInputNumber] = useState<string>("");
  const [userNumber, setUserNumber] = useState<string[]>([]);

  const handleOnChangeInputNumber = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputNumber(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (userNumber.length < 9) {
        if (inputNumber.length === 3 && !isNaN(Number(inputNumber))) {
          setUserNumber([...userNumber, inputNumber]);
          console.log(userNumber);
        } else {
          alert("3개의 정수만 입력할 수 있습니다.");
        }
      } else {
        alert("9회를 초과했습니다.");
      }
      setInputNumber("");
    }
  };

  const onClickStartButton = () => {
    let answerNumber: number[] = [];
    while (answerNumber.length <= 2) {
      const randomNumber = Math.floor(Math.random() * 10);
      if (!answerNumber.includes(randomNumber)) {
        answerNumber = [...answerNumber, randomNumber];
        console.log(answerNumber);
      }
    }

    setAnswerNumberState([...answerNumber]);
    console.log(answerNumberState);
    setStartButtonState(false);
  };

  const makeResultJudgemnet = (result: string) => {
    let outCount = 0;
    let strikeCount = 0;
    let ballCount = 0;
    console.log("makeResultJudgemnet");

    answerNumberState.forEach((item, index) => {
      if (result.includes(String(item))) {
        if (String(answerNumberState[index]) === result[index]) {
          strikeCount++;
        } else {
          ballCount++;
        }
      } else {
        outCount++;
      }
    });
    return {
      outCount: outCount,
      strikeCount: strikeCount,
      ballCount: ballCount,
    };
  };

  return (
    <Wrapper>
      <StartButton
        onClick={onClickStartButton}
        startButtonState={startButtonState}
      >
        시작
      </StartButton>
      {userNumber.length < 1 ? (
        <ResultWrapper startButtonState={startButtonState}>
          0~9 사이의 3자리 수를 입력하세요
        </ResultWrapper>
      ) : (
        <ResultWrapper startButtonState={startButtonState}>
          {userNumber.map((number, index) => (
            <ResultDiv key={index}>
              <ResultInnerDiv>
                {makeResultJudgemnet(number).strikeCount === 3
                  ? "정답입니다!"
                  : index + 1 + "회"}
              </ResultInnerDiv>
              <ResultInnerDiv>
                {makeResultJudgemnet(number).strikeCount === 3
                  ? `시도 횟수 : ${userNumber.length}회`
                  : number}
              </ResultInnerDiv>
              <ResultInnerDiv>
                {makeResultJudgemnet(number).strikeCount === 3
                  ? `정답 : ${answerNumberState[0]}${answerNumberState[1]}${answerNumberState[2]}`
                  : `${makeResultJudgemnet(number).strikeCount}스트라이크
                  ${makeResultJudgemnet(number).ballCount}볼
                  ${makeResultJudgemnet(number).outCount}아웃`}
              </ResultInnerDiv>
            </ResultDiv>
          ))}
        </ResultWrapper>
      )}
      <InputDiv>
        <InputLabel startButtonState={startButtonState}>
          3자리 수 입력
        </InputLabel>
        <NumberInput
          type="text"
          value={inputNumber}
          onChange={handleOnChangeInputNumber}
          onKeyDown={handleKeyDown}
          startButtonState={startButtonState}
        ></NumberInput>
      </InputDiv>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 935px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StartButton = styled.button<{ startButtonState: boolean }>`
  display: ${(props) => (props.startButtonState === false ? "none" : "")};
  width: 200px;
  height: 100px;
  border: 1px solid black;
  cursor: pointer;
  border-radius: 20px;
  font-size: 20px;
`;

const ResultWrapper = styled.div<{ startButtonState: boolean }>`
  display: ${(props) => (props.startButtonState === true ? "none" : "flex")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
  height: 905px;
  width: 100%;
`;

const ResultDiv = styled.div`
  background-color: black;
  height: 150px;
  width: 100%;
  border-bottom: 1px solid white;
`;

const ResultInnerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  font-size: 20px;
  color: white;
`;

const InputDiv = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
`;

const InputLabel = styled.div<{ startButtonState: boolean }>`
  display: ${(props) => (props.startButtonState === true ? "none" : "flex")};
  width: 15%;
  height: 30px;
  justify-content: center;
`;

const NumberInput = styled.input<{ startButtonState: boolean }>`
  display: ${(props) => (props.startButtonState === true ? "none" : "")};
  width: 85%;
  height: 30px;
`;

const ResultDiv2 = styled.div`
  background-color: black;
  height: 150px;
  width: 100%;
  border-bottom: 1px solid white;
`;
