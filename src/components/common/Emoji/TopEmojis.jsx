import styled from "styled-components";
import { media, theme } from "../../../styles/theme";
import Emoji from "./Emoji";


const StyledEmojiList = styled.div`
  display:flex;
  gap: 8px;
  ${media.tablet`
  `}
  ${media.mobile`
    gap: 4px;
  `}
`;

export function TopEmojis ( {topReactions} ) {
  return (
    <StyledEmojiList>
      {topReactions &&
        topReactions.map((Reaction) => {
          return (
          <li key={Reaction.id}><Emoji emoji={Reaction.emoji} count={Reaction.count} /></li>
          );
        })
      }
    </StyledEmojiList>
  )
}
