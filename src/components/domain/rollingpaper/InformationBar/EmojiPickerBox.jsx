import EmojiPicker from 'emoji-picker-react';
import useCreateReaction from '../../../common/hooks/reactions/useCreateReaction';
import styled from 'styled-components';
import { media } from '../../../../styles/theme';

const EmojiPickerWrap = styled.div`
  position: absolute;
  top: 48px;
  right: 0;
  ${media.mobile`
    right: -60px;
  `}
`;

function EmojiPickerBox({ postId, refetch, open, setOpen, emojiPickerRef }) {
  const { createReaction } = useCreateReaction(refetch);
  const chosenEmoji = {
    emoji: null,
    type: 'increase',
  };

  const onEmojiClick = emojiData => {
    createReaction(postId, {
      emoji: emojiData.emoji,
      type: chosenEmoji.type, // type은 그대로 유지
    });
    setOpen(false);
  };

  return (
    <EmojiPickerWrap ref={emojiPickerRef}>
      <EmojiPicker open={open} onEmojiClick={onEmojiClick} />
    </EmojiPickerWrap>
  );
}

export default EmojiPickerBox;
