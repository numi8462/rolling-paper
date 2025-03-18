import styled from "styled-components";
import { media, theme } from "../../../styles/theme";
import Emoji from "./Emoji";


const StyledEmojiList = styled.ul`
  display:flex;
  gap: 8px;
  ${media.mobile`
    gap: 4px;
  `}
`;

export function TopEmojis ( {postId, refetch, topReactions} ) {
  return (
    <StyledEmojiList>
      {topReactions &&
        topReactions.map((Reaction) => {
          return (
          <li key={Reaction.id}><Emoji postId={postId} refetch={refetch} emoji={Reaction.emoji} count={Reaction.count} /></li>
          );
        })
      }
    </StyledEmojiList>
  )
}
