import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const StyledEmoji = styled.div`
  width: 66px;
  height: 36px;
  ${theme.p[8][12]};
  line-height: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  color: ${theme.colors.basic.white};
  border-radius: 32px;
  text-align: center;
  font-size: 16px;
  white-space: nowrap;
`;

function Emoji({ emoji, count }) {
  return <StyledEmoji>{`${emoji} ${count}`}</StyledEmoji>;
}

export default Emoji;
