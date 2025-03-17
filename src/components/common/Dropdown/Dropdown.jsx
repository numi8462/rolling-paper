import React from 'react';
import { DropdownContainer } from './Dropdown.core';

function Dropdown({
  options, // 옵션 리스트
  onChange,
}) {
  return (
    <>
      <DropdownContainer options={options} onChange={onChange} />
    </>
  );
}

export default Dropdown;
