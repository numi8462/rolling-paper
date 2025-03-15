import React, { useState } from 'react';
import styled from 'styled-components';
import { DropdownContainer } from './Dropdown.core';
import { theme } from '../../../styles/theme';

function Dropdown({
  options,                // 옵션 리스트
  errorMessage = '', // 에러 메세지
  setSelectItem
}) {

// 상위에서 보내주는 에러메세지 기본값
const [localError, setLocalError] = useState('');

/** ▼ 에러 메시지 스타일 */
const ErrorMessage = styled.span`
  margin-top: 4px;
  font-size: 14px;
  color: ${theme.colors.basic.Error};
`;

  return (
    <>
      <DropdownContainer options={options} setLocalError={setLocalError} Items={setSelectItem}/>  
      {/* ▼ 에러 메시지 */}
      {localError === '' ? null : <ErrorMessage>{localError}</ErrorMessage>}
    </>
  );
}

export default Dropdown;
