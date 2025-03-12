import React from 'react';
import styled from 'styled-components';

const StyledEmoji = styled.div`
  display:flex;
  box-sizing: border-box;
  width: 66px;
  height: 36px;
  line-height: 20px;
  padding: 8px 12px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  border-radius: 32px;
  text-align: center;
  font-size: 16px;
  white-space: nowrap;
`;

function Emoji({ emoji, count }) {
  return <StyledEmoji>{`${emoji} ${count}`}</StyledEmoji>;
}

export default Emoji;
