import React from 'react';
import styled from 'styled-components';

const StyledEmoji = styled.div`
  box-sizing: border-box;
  width: 66px;
  height: 36px;
  padding: 8px 12px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  border-radius: 32px;
  text-align: center;
`;

function Emoji({ emoji, count }) {
  return <StyledEmoji>{`${emoji} ${count}`}</StyledEmoji>;
}

export default Emoji;
