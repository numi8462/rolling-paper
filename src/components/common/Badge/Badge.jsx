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

const relationshipColors = {
  지인: {
    bgColor: '#FFF0D6',
    fontColor: '#FF8832',
  },
  동료: {
    bgColor: '#F8F0FF',
    fontColor: '#9935FF',
  },
  가족: {
    bgColor: '#E4FBDC',
    fontColor: '#2BA600',
  },
  친구: {
    bgColor: '#E2F5FF',
    fontColor: '#00A2FE',
  },
};

function Badge({ relationship }) {
  const { fontColor, bgColor } = relationshipColors[relationship];
  return (
    <StyledBadge fontColor={fontColor} bgColor={bgColor}>
      {relationship}
    </StyledBadge>
  );
}

export default Badge;
