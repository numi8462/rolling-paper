import React, { useState } from 'react';
import styled from 'styled-components';
import { DropdownContainer } from './Dropdown.core';
import { theme } from '../../../styles/theme';

/** ▼ 에러 메시지 스타일 */
const ErrorMessage = styled.span`
  margin-top: 4px;
  font-size: 14px;
  color: ${theme.colors.basic.Error};
`;

function Dropdown({
  options,                // 옵션 리스트
  errorMessage = '', // 에러 메세지
  setSelectItem
}) {

  // 상위에서 보내주는 에러메세지 기본값
  const [localError, setLocalError] = useState('');


  const handleBlur = () => {
    setLocalError('하나를 선택해 주세요.');
  };

  return (
    <>
      <DropdownContainer 
        options={options} 
        setLocalError={setLocalError} 
        Items={setSelectItem}
        onBlur={handleBlur}
        localError={localError}
        />  
      {/* ▼ 에러 메시지 */}
      {localError === '' ? null : <ErrorMessage>{errorMessage||localError}</ErrorMessage>}
    </>
  );
}

export default Dropdown;
