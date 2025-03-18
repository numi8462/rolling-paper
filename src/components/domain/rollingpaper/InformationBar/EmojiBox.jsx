import styled from "styled-components";
import { media, theme } from "../../../../styles/theme";
import Emoji from "../../../common/Emoji/Emoji";

const EmojiWrap = styled.div`
  position: absolute;
  top:49px; 
  right:0;
  border:1px solid ${theme.colors.gray[300]};
  border-radius: 8px;
  background-color: ${theme.colors.basic.white};
  padding:24px;
`;

const StyledEmojiList = styled.div`
    display:flex;
    flex-direction: column;
    gap: 10px;
  > ul{
    display:flex;
    gap: 8px;
  } 
`;

function EmojiBox({postId, refetch, reactions}) {

  return (
    <EmojiWrap>
      <StyledEmojiList>
        {reactions &&
          reactions
            .reduce((acc, _, i) => 
              i % 3 === 0 ? [...acc, reactions.slice(i, i + 3)] : acc, [])
            .map((group, index) => (
              <ul key={index}>
                {group.map((reaction) => (
                  <li key={reaction.id}>
                    <Emoji postId={postId} refetch={refetch} emoji={reaction.emoji} count={reaction.count} />
                  </li>
                ))}
              </ul>
            ))
        }
      </StyledEmojiList>
    </EmojiWrap>
  );
}

export default EmojiBox;
