import styled from "styled-components";
import { media, theme } from "../../../../styles/theme";
import Emoji from "../../../common/Emoji/Emoji";
import { useEffect, useState } from "react";

const EmojiWrap = styled.div`
  position: absolute;
  top:49px; 
  right:0;
  border:1px solid ${theme.colors.gray[300]};
  border-radius: 8px;
  background-color: ${theme.colors.basic.white};
  padding:24px;
  ${media.mobile`
    right: auto;
    left:-10px;
  `}
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
  const [groupSize, setGroupSize] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1200) {
        setGroupSize(3); 
      } else {
        setGroupSize(4); 
      }
    };

    handleResize(); // 초기 사이즈 설정
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <EmojiWrap>
      <StyledEmojiList>
        {reactions &&
          reactions
            .reduce((acc, _, i) =>
              i % groupSize === 0
                ? [...acc, reactions.slice(i, i + groupSize)]
                : acc,
              []
            )
            .slice(0, 2)
            .map((group, index) => (
              <ul key={index}>
                {group.map((reaction) => (
                  <li key={reaction.id}>
                    <Emoji
                      postId={postId}
                      refetch={refetch}
                      emoji={reaction.emoji}
                      count={reaction.count}
                    />
                  </li>
                ))}
              </ul>
            ))}
      </StyledEmojiList>
    </EmojiWrap>
  );
}

export default EmojiBox;
