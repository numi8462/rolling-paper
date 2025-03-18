import EmojiPicker from "emoji-picker-react";
import useCreateReaction from "../../../common/hooks/reactions/useCreateReaction";
import styled from "styled-components";

const EmojiPickerWrap = styled.div`
  position: absolute;
  top:42px; 
  right:0;
`;

function EmojiPickerBox({postId, refetch, open, setOpen}) {
  
  const { createReaction } = useCreateReaction(refetch);
    const chosenEmoji = {
      "emoji": null,
      "type": "increase"
    };
  
    const onEmojiClick = (emojiData) => {
      createReaction(postId, {
        emoji: emojiData.emoji,
        type: chosenEmoji.type, // type은 그대로 유지
      });
      setOpen(false)
    };
  
  return (
    <EmojiPickerWrap>
      <EmojiPicker open={open} onEmojiClick={onEmojiClick} />
    </EmojiPickerWrap>
  );
}

export default EmojiPickerBox;
