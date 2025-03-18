import React from 'react';
import styled from 'styled-components';
import { media, theme } from '../../../styles/theme';
import useCreateReaction from '../hooks/reactions/useCreateReaction';

const StyledEmoji = styled.div`
  width: 70px;
  height: 36px;
  line-height: 20px;
  ${theme.p[8][12]};
  background-color: rgba(0, 0, 0, 0.5);
  color: ${theme.colors.basic.white};
  border-radius: 32px;
  text-align: center;
  font-size: 16px;
  white-space: nowrap;
  cursor: pointer;

  @media (max-width: ${theme.breakpoints.m}) {
    width: 59px;
    height: 28px;
    font-size: 14px;
    ${theme.p[4][8]};
  }
`;

function Emoji({ postId, emoji, count, refetch }) {
  const { createReaction } = useCreateReaction(refetch);
  const chosenEmoji = {
    emoji: null,
    type: 'increase',
  };

  const onEmojiClick = e => {
    e.preventDefault();
    createReaction(postId, {
      emoji: emoji,
      type: chosenEmoji.type, // type은 그대로 유지
    });
  };
  return (
    <StyledEmoji onClick={onEmojiClick}>{`${emoji} ${count}`}</StyledEmoji>
  );
}

export default Emoji;
