import React from 'react';
import styled from 'styled-components';

const StyledBadge = styled.div`
  width: 40px;
  height: 20px;
  padding: 0 8px;
  font-size: 14px;
  color: ${(props) => props.fontColor};
  background-color: ${(props) => props.bgColor};
  border-radius: 4px;
  text-align: center;
`;

function Badge({ children, fontColor, bgColor }) {
  return (
    <StyledBadge fontColor={fontColor} bgColor={bgColor}>
      {children}
    </StyledBadge>
  );
}

export default Badge;
