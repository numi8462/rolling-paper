import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Font, theme } from '../../../../styles/theme';
import { TopEmojis } from '../../../common/Emoji/TopEmojis';
import { Profiles } from '../../../common/Profile/Profiles';

export function RollingPaperCard({ rollingPaper, refetch }) {
  const {
    id,
    name,
    backgroundColor,
    backgroundImageURL,
    topReactions,
    messageCount,
    recentMessages,
  } = rollingPaper;
  return (
    <li>
      <Link to={`/post/${id}`}>
        <PaperCard $color={backgroundColor} $image={backgroundImageURL}>
          <HiddenBox></HiddenBox>
          <PaperBox>
            <NameBox>
              <PaperCardName $bold>To. {name}</PaperCardName>
              <Profiles
                recentMessages={recentMessages}
                totalLength={messageCount}
              />
              <PaperCardCount>
                <b>{messageCount}</b>명이 작성했어요!
              </PaperCardCount>
            </NameBox>
            {topReactions.length ? (
              <PaperCardEmoji>
                <TopEmojis  postId={id} refetch={refetch} topReactions={topReactions} />
              </PaperCardEmoji>
            ) : null}
          </PaperBox>
        </PaperCard>
      </Link>
    </li>
  );
}

// background 이미지가 있을때 배경이미지설정 아닐때 color로 배경설정
const bgSetting = css`
  ${({ $image, $color }) =>
    $image
      ? css`
          background-image: url(${$image});
          background-size: cover;
          background-position: center;
          z-index: 0;
          &:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1;
          }
          color: ${theme.colors.basic.white};
        `
      : css`
          color: ${theme.colors.gray[700]};
          background-color: ${theme.colors[$color]?.[200]};
        `}
`;
// 롤링페이퍼 카드 styled
const HiddenBox = styled.div`
  content: '';
  width: 100%;
  padding: 0 0 100%;
  height: 0;
`;
const PaperCard = styled.div`
  position: relative;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  overflow: hidden;
  ${bgSetting}
`;
const PaperBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  padding: 30px 24px 20px;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  z-index: 2;
`;
const NameBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
// 카드의 이모지 영역 styled
const PaperCardEmoji = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  padding-top: 16px;
`;
const PaperCardName = styled.div`
  ${Font.f24}
`;
const PaperCardCount = styled.div`
  ${Font.f16}
  display:block;
`;
