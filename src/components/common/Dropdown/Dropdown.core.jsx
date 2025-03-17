import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Font, theme } from '../../../styles/theme.jsx';
import topArrow from '../../../assets/Icons/topArrow.svg';
import downArrow from '../../../assets/Icons/downArrow.svg';

const gray_900 = theme.colors.gray[900];
const gray_500 = theme.colors.gray[500];
const gray_300 = theme.colors.gray[300];
const gray_200 = theme.colors.gray[200];
const error_color = theme.colors.basic.Error;

const DropdownWrap = styled.div`
  position: relative;
  /* width 값은 여기서만 조정하고 하위태그는 100%  */
  width: 320px; 
`;

const DropdownButton = styled.button`
  display: flex;
  width: 100%;
  ${theme.p[12][16]};
  border: 1px solid ${({ $error }) => ($error ? error_color : gray_300)};
  border-radius: 8px;

  ${Font.f16};
  text-align: left;
  color: ${gray_500};
  background-color: ${theme.colors.basic.white};

  /* outline은 다 필요없을꺼 같아서 꺼냈어요 */
  outline: none; 

  &:focus {
    border: 1px solid ${gray_500};
    color: ${gray_900};
  }
  &:hover {
    border: 1px solid ${gray_500};
  }
  
  background-image: ${({ $isopen }) => `url(${$isopen ? topArrow : downArrow})`};
  background-repeat: no-repeat;
  background-position: right 16px center;

  img {
    position: absolute;
    width:16px;
    height: 16px;
    top:16px;
    right:16px;
  }
  
  /* isopen이 true일 때 */
  ${({ $isopen }) => $isopen && `
    border: 1px solid ${gray_500};
  `}

  cursor: pointer;
`;

const OptionsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  position: absolute; 
  top: 58px;      
  left: 0;
  width: 100%;
  padding: 10px 0;

  background-color: ${theme.colors.basic.white};
  border: 1px solid ${gray_300};
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 999;     
  
  transform-origin: top;
  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
  
  /* isopen이 true일 때 */
  ${({ $isopen }) => 
    $isopen
      ? `
        transform: scaleY(1);
        opacity: 1;
        visibility: visible;
      ` 
      : `
        transform: scaleY(0);
        opacity: 0;
        visibility: hidden;
      `}
`;

const OptionItem = styled.li`
  padding: 12px 16px;
  ${Font.f16}
  color: ${gray_900};
  cursor: pointer;

  &:hover {
    background-color: ${gray_200};
  }
`;

export function DropdownContainer({ options , setLocalError, Items, onBlur, localError }) {
  const [isopen, setIsopen] = useState(false);  
  // options 배열가지고 와서 인덱스와 키값만 가지고 컨트롤
  const [value, setValue] = useState(options[0].label);      

  const dropdownRef = useRef(null);

  const handleToggle = (e) => {
    e.preventDefault()
    setIsopen((prev) => !prev);
  };

  const handleOptionClick = (idx) => {
    // 옵션 내용이 다를 경우를 대비해서 
    // 셀렉트 옵션 클릭했을때 인뎃스 값을 가져와서 키값 전달
    setValue(options[idx].label);
    setIsopen(false);
    setLocalError(''); 
    Items(options[idx].value);
  };

  // 외부 클릭 감지 및 클리어 처리
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

  return (
    <DropdownWrap ref={dropdownRef}>
      <DropdownButton 
        onClick={handleToggle} 
        onBlur={onBlur} 
        $isopen={isopen} 
        $error={!!localError}
      >
        {value || '하나를 선택해 주세요.'} 
        {isopen ? 
         <img src={topArrow} alt="open"/>
         : 
         <img src={downArrow} alt="close"/>
         }
      </DropdownButton>
      <OptionsList $isopen={isopen}>
        {options.map((option, idx) => (
          <OptionItem
            key={idx}
            onClick={() => handleOptionClick(idx)}
          >
            {option.label}
          </OptionItem>
        ))}
      </OptionsList>
    </DropdownWrap>
  );
}