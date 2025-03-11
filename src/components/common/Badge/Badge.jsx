import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const StyledBadge = styled.div`
  width: 42px;
  height: 20px;
  ${theme.p[0][8]};
  ${theme.fs.xs};
  font-weight: 400;
  line-height: 20px;
  color: ${(props) => props.fontColor};
  background-color: ${(props) => props.bgColor};
  border-radius: 4px;
  text-align: center;
`;

const relationshipColors = {
  지인: {
    bgColor: `${theme.colors.beige[100]}`,
    fontColor: `${theme.colors.beige[500]}`,
  },
  동료: {
    bgColor: `${theme.colors.purple[100]}`,
    fontColor: `${theme.colors.purple[500]}`,
  },
  가족: {
    bgColor: `${theme.colors.green[100]}`,
    fontColor: `${theme.colors.green[500]}`,
  },
  친구: {
    bgColor: `${theme.colors.blue[100]}`,
    fontColor: `${theme.colors.blue[500]}`,
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
