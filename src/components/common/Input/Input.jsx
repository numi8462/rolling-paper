import React, { useState } from "react";
import styled from "styled-components";
import { Font } from "../../../styles/theme";

//에러메시지를 인풋의 바로 아래에 표시하기 위해서 만든 인풋컨테이너입니다.
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

//인풋의 스타일 컴포넌트구요.
//border를 삼항연산자를 이용해서 error가 있을경우 #dc3a3a를 그렇지 않은경우엔 #cccccc 색상을 가지도록 했습니다
//size 프롭을 전달하면 크기를 지정할수있습니다. 기본값은 20px로 지정해놨습니다
const StyledInput = styled.input`
  border-radius: 4px;
  border: 1px solid ${({ error }) => (error ? "#dc3a3a" : "#cccccc")};
  padding: 12px 16px;
  /* font-size: ${({ size }) => size || "20px"}; */
  /* 임시로 다시 작성했습니다. 수정하셔도 됩니다. */
  font-size: ${Font.f16};

  transition: border 0.2s ease-in-out;
  width: ${({ width }) => width || "100%"};
  max-width: ${({ maxWidth }) => maxWidth || "300px"};

    &:focus {
      border: 2px solid #555555;
      outline: none;
    }

    &:active {
      border: 2px solid #3a3a3a;
    }
    &:hover {
      border: 1px solid #555555;
    }

    &:disabled {
      color: #f6f6f6; 
      background-color: #eeeeee; 
      border: 1px solid #cccccc;
      cursor: not-allowed; 
    }
`;

const ErrorMessage = styled.span`
  color: #dc3a3a;
  font-size: 14px;
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
`;

const Input = ({ placeholder, size, width, maxWidth }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleBlur = () => {
    setError(!value.trim());
  };

  return (
    <InputContainer>
      <StyledInput
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleBlur}
        error={error}
        size={size}
        width={width}
        maxWidth={maxWidth}
      />
      <ErrorMessage show={error}>값을 입력해 주세요.</ErrorMessage>
    </InputContainer>
  );
};

export default Input;
