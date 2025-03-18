import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const StyledBadge = styled.div`
  width: 45px;
  height: 20px;
  ${theme.p[0][8]};
  ${theme.fs.xs};
  font-weight: 400;
  line-height: 20px;
  color: ${props => props.color};
  background-color: ${props => props.$bg};
  border-radius: 4px;
  text-align: center;
`;

const relationshipColors = {
  지인: {
    bg: `${theme.colors.beige[100]}`,
    color: `${theme.colors.beige[500]}`,
  },
  동료: {
    bg: `${theme.colors.purple[100]}`,
    color: `${theme.colors.purple[500]}`,
  },
  가족: {
    bg: `${theme.colors.green[100]}`,
    color: `${theme.colors.green[500]}`,
  },
  친구: {
    bg: `${theme.colors.blue[100]}`,
    color: `${theme.colors.blue[500]}`,
  },
};

function Badge({ relationship }) {
  const { color, bg } = relationshipColors[relationship];
  return (
    <StyledBadge color={color} $bg={bg}>
      {relationship}
    </StyledBadge>
  );
}

export default Badge;
