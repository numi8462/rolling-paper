import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const StyledEmoji = styled.div`
  width: 70px;
  height: 36px;
  line-height: 20px;
  ${theme.p[7][12]};
  background-color: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  border-radius: 32px;
  text-align: center;
`;

function Emoji({ emoji, count }) {
  return <StyledEmoji>{`${emoji} ${count}`}</StyledEmoji>;
}

export default Emoji;
