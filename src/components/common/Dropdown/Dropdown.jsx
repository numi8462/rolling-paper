import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Font, theme } from '../../../styles/theme.jsx';
import topArrow from '../../../assets/Icons/topArrow.svg';
import downArrow from '../../../assets/Icons/downArrow.svg';
import disabledArrow from '../../../assets/Icons/disabledArrow.svg';

// theme 색상 모음 (사용 상황에 맞게 수정하세요!)
const gray_900 = theme.colors.gray[900];
const gray_700 = theme.colors.gray[700];
const gray_500 = theme.colors.gray[500];
const gray_400 = theme.colors.gray[400];
const gray_300 = theme.colors.gray[300];
const gray_200 = theme.colors.gray[200];
const gray_100 = theme.colors.gray[100];
const error_color = theme.colors.basic.Error;

/** ▼ 컨테이너 (버튼 + 옵션 목록 + 에러 메시지) 전체 래퍼 */
const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 320px;
`;

/** ▼ 에러 메시지 스타일 */
const ErrorMessage = styled.span`
  margin-top: 4px;
  font-size: 14px;
  color: ${error_color};
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
`;

/** ▼ 드롭다운 토글 버튼 */
const DropdownButton = styled.button`
    display: flex;
    justify-content: center;
    width: 320px;
    height: 50px;
    ${theme.p[12][16]};
    border: 1px solid ${({ $error }) => ($error ? error_color : gray_300)};
    border-radius: 8px;

    ${Font.f16};
    text-align: left;

    color: ${({ $hasValue }) => ($hasValue ? gray_900 : gray_500)};
    background-color: ${theme.colors.basic.white};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    /* ▼ isOpen 상태 / disabled 상태에 따라 다른 배경이미지 */
    background: url(${({ disabled, $isOpen }) => (disabled ? disabledArrow : $isOpen ? topArrow : downArrow)}) 
        no-repeat center center;

    background-size: 16px;
    
    &:disabled {
        cursor: not-allowed;
        /* 필요하면 배경이미지 말고 다른 스타일도 변경 가능 */
    }  
   ;

    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    /* 애니메이션/포커스/호버 상태 */
    transition: border 0.2s ease-in-out;

    &:focus {
        outline: none;
        border: 2px solid ${gray_500};
    }

    &:hover {
        border: 1px solid ${gray_500};
    }

    &:disabled {
        border: 1px solid ${gray_300};
        background-color: ${gray_100};
        color: ${gray_400};
    }
`;


/** ▼ 옵션 리스트 ( ul ) */
const OptionsList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    position: absolute;  /* 부모 기준으로 절대 위치 */
    top: 54px;          /* 버튼 아래 살짝 띄우기 */
    left: 0;
    width: 320px;
    max-height: 240px;    /* 스크롤 대응 */
    overflow-y: auto;
    margin: 4px 0 0;
    padding: 0;
    list-style: none;

    background-color: ${theme.colors.basic.white};
    border: 1px solid ${gray_300};
    border-radius: 8px;
    box-shadow: 0px 2px 12px 0px #00000014;

    z-index: 999;         /* 혹시 다른 요소들과 겹칠까봐 */
`;

/** ▼ 개별 옵션 ( li ) */
const OptionItem = styled.li`
  padding: 12px 16px;
  ${Font.f16}
  color: ${gray_900};
  cursor: pointer;

  &:hover {
    background-color: ${gray_200};
  }
`;

function Dropdown({
  placeholder = 'PlaceHolder', // 기본 플레이스홀더
  options = [],                // 옵션 리스트
  disabled = false,            // 비활성화
  isError = false,             // 외부에서 에러 상태
  onChange,                    // 선택 시 부모에 넘겨줄 콜백
  errorMessage = '하나를 선택해주세요', // 에러 메세지
}) {
  const [isopen, setIsopen] = useState(false);   // 드롭다운 열림/닫힘 상태
  const [value, setValue] = useState('');        // 선택된 값
  const [localError, setLocalError] = useState(false);

  const dropdownRef = useRef(null);

  // 버튼 클릭 시 토글
  const handleToggle = () => {
    if (disabled) return; // 비활성화 시 클릭 막기
    setIsopen((prev) => !prev);
  };

  // 옵션 클릭 시
  const handleOptionClick = (option) => {
    setValue(option.value);
    onChange && onChange(option.value);
    setIsopen(false); // 목록 닫기
    setLocalError(false); // 선택이 되면 에러 해제
  };

  // blur 시, 값이 없으면 에러
  const handleBlur = () => {
    if (!value) {
      setLocalError(true);
    }
  };

  // 클릭이 바깥으로 나가면 닫기
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsopen(false);
      }
    }
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // 에러는 부모에서 내려준 isError가 우선, 없다면 로컬상태 localError
  const showError = isError || localError;

  /** ▼ 현재 보여줄 텍스트 (값이 있으면 해당 라벨, 없으면 placeholder) */
  const buttonText = value
    ? options.find((opt) => opt.value === value)?.label || ''
    : placeholder;

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton
        type="button"
        onClick={handleToggle}
        onBlur={handleBlur}
        $error={showError}
        disabled={disabled}
        $isOpen={isopen}
        $hasValue={!!value}
      >
        {buttonText}
      </DropdownButton>

      {/* ▼ 드롭다운 옵션 목록 */}
      {isopen && !disabled && (
        <OptionsList>
          {options.map((option, idx) => (
            <OptionItem
              key={idx}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </OptionItem>
          ))}
        </OptionsList>
      )}

      {/* ▼ 에러 메시지 */}
      <ErrorMessage show={showError}>{errorMessage}</ErrorMessage>
    </DropdownContainer>
  );
}

export default Dropdown;
