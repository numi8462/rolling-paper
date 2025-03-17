import React, { useState } from 'react';
import { DropdownContainer } from './Dropdown.core';

function Dropdown({
  options,                // 옵션 리스트
  setSelectItem
}) {

  return (
    <>
      <DropdownContainer 
        options={options} 
        Items={setSelectItem}
        />  
    </>
  );
}

export default Dropdown;
