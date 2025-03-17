import React from 'react';
import styled from 'styled-components';
import { media, theme } from '../../../styles/theme';

const Input = ({
  value,
  onChange,
  onBlur,
  isError,
  placeholder,
  size,
  width,
  maxWidth,
  ...rest
}) => {
  return (
    <InputContainer>
      <StyledInput
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        $error={isError}
        size={size}
        $width={width}
        $maxWidth={maxWidth}
        {...rest}
      />
      <ErrorMessage $show={isError}>값을 입력해 주세요.</ErrorMessage>
    </InputContainer>
  );
};

export default Input;

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
  border: 1px solid
    ${({ $error }) =>
      $error ? theme.colors.basic.Error : theme.colors.gray[300]};
  padding: 12px 16px;
  font-size: ${({ size }) => size || theme.fs.xl};
  transition: border 0.2s ease-in-out;
  width: ${({ $width }) => $width || '100%'};
  height: 50px;
  max-width: ${({ $maxWidth }) => $maxWidth || '100%'};

  &:focus {
    border: 2px solid ${theme.colors.gray[500]};
    outline: none;
  }

  &:active {
    border: 2px solid ${theme.colors.gray[700]};
  }
  &:hover {
    border: 1px solid ${theme.colors.gray[500]};
  }

  &:disabled {
    color: ${theme.colors.gray[100]};
    background-color: ${theme.colors.gray[200]};
    border: 1px solid ${theme.colors.gray[300]};
    cursor: not-allowed;
  }
  ${media.tablet`
      width: 720px;
      height: 50px
      `}
  ${media.mobile`
      width: 320px;
      height: 50px
      `}
`;

const ErrorMessage = styled.span`
  color: ${theme.colors.basic.Error};
  font-size: 14px;
  visibility: ${({ $show }) => ($show ? 'visible' : 'hidden')};
`;
