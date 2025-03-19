import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Toast from '../../../common/Toast/Toast';
import { media, theme } from '../../../../styles/theme';
import { ShareButton } from '../../../common/Button/ShareButton';
import Options from './Options';
import useKakaoShare from '../../../common/hooks/kakao/useKakaoShare';
import { TopEmojis } from '../../../common/Emoji/TopEmojis';
import { Profiles } from '../../../common/Profile/Profiles';
import { AddEmojiButton } from '../../../common/Button/AddEmojiButton';
import useReactions from '../../../common/hooks/reactions/useReactions';
import EmojiPickerBox from './EmojiPickerBox';
import useToast from '../../../common/Toast/useToast';
import EmojiBox from './EmojiBox';
import Icon from '../../../../assets/Icons/Icons';

const StyledInformationBar = styled.div`
  position: sticky;
  top: 0;
  z-index: 99;
  ${theme.center}
  height: 68px;
  background-color: ${theme.colors.basic.white};
  @media (max-width: ${theme.breakpoints.m}) {
    height: 104px;
  }
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  z-index: 999;
`;

const StyledName = styled.div`
  font-size: 28px;
  font-weight: 700;
  line-height: 42px;
  color: ${theme.colors.gray[800]};

  @media (max-width: ${theme.breakpoints.m}) {
    padding: 10px 20px;
    line-height: 32px;
    font-size: 18px;
    border-bottom: 1px solid #ededed;
  }
`;

const RelativeBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;

  ${media.tablet`
    padding:0 24px;
  `}
  ${media.mobile`
    padding:0 0px;
    flex-direction: column;
  `}
`;
const RightBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  ${media.mobile`
    padding:0 20px;
  `}
`;
const MobileFlex = styled.div`
  display: flex;
  gap: 8px;
  ${media.mobile`
    width: 100%;
    display:flex;
    justify-content: space-between;
  `}
`;

const PaperCardCount = styled.div`
  display: flex;
`;
const ReactionButton = styled.div`
  padding: 13px;
  cursor: pointer;
`;
const CardCountBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  ${media.tablet`
    display:none;
  `}
`;

const Bar = styled.div`
  margin: 0 10px;
  background-color: ${theme.colors.gray[200]};
  width: 1px;
  height: 28px;
  ${media.mobile`
    display:none;
  `}
`;

function InformationBar({ postId, rollingPaper }) {
  const { name, messageCount, recentMessages } = rollingPaper;
  const { reactions, refetch } = useReactions(postId);
  const { toast, showToast, closeToast } = useToast();
  const [isEmojiListOpen, setIsEmojiListOpen] = useState(false);
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const shareKakao = useKakaoShare(name, 5, 4); // 카카오 공유 useKakaoShare(이름, 메세지 수, 반응 수)
  const optionsRef = useRef(null);
  const emojiPickerRef = useRef(null);

  const toggleEmojiList = () => {
    setIsEmojiListOpen(!isEmojiListOpen);
  };

  const toggleEmojiPicker = () => {
    setIsEmojiPickerOpen(!isEmojiPickerOpen);
  };

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  const handleShareUrlClick = () => {
    const currentUrl = window.location.href;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        showToast('URL이 복사되었습니다.');
      })
      .catch(err => {
        console.error('URL 복사에 실패했습니다.', err);
        showToast('URL 복사에 실패했습니다.');
      });
  };

  const handleKakaoClick = () => {
    console.log('kakao');
    shareKakao();
  };

  useEffect(() => {
    const handleClickOutside = e => {
      if (optionsRef.current && !optionsRef.current.contains(e.target)) {
        setIsOptionsOpen(false);
      }
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(e.target)
      ) {
        console.log('emoji', isEmojiPickerOpen);
        setIsEmojiPickerOpen(false);
      }
    };

    if (isOptionsOpen || isEmojiPickerOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOptionsOpen, isEmojiPickerOpen]);

  const topReactions = reactions.slice(0, 3);
  return (
    <StyledInformationBar>
      <FlexBox>
        <StyledName>To. {name}</StyledName>
        <RightBox>
          <CardCountBox>
            <Profiles
              recentMessages={recentMessages}
              totalLength={messageCount}
            />
            <PaperCardCount>
              <b>{messageCount}</b>명이 작성했어요!
            </PaperCardCount>
            <Bar />
          </CardCountBox>
          <MobileFlex>
            <RelativeBox>
              <TopEmojis
                postId={postId}
                refetch={refetch}
                topReactions={topReactions}
              />
              {reactions.length !== 0 && (
                <ReactionButton onClick={toggleEmojiList}>
                  {isEmojiListOpen ? (
                    <Icon name="topArrow" alt="close reaction" size="12px" />
                  ) : (
                    <Icon name="downArrow" alt="open reaction" size="12px" />
                  )}
                </ReactionButton>
              )}
              {isEmojiListOpen && (
                <EmojiBox
                  postId={postId}
                  refetch={refetch}
                  reactions={reactions}
                />
              )}
            </RelativeBox>
            <RelativeBox>
              <AddEmojiButton onClick={toggleEmojiPicker} />
              <EmojiPickerBox
                emojiPickerRef={emojiPickerRef}
                postId={postId}
                refetch={refetch}
                open={isEmojiPickerOpen}
                setOpen={setIsEmojiPickerOpen}
              />
            </RelativeBox>
          </MobileFlex>
          <Bar />
          <RelativeBox>
            <ShareButton onClick={() => toggleOptions()} />
            {isOptionsOpen && (
              <Options
                optionsRef={optionsRef}
                handleKakaoClick={() => handleKakaoClick()}
                handleShareUrlClick={() => handleShareUrlClick()}
              />
            )}
          </RelativeBox>
        </RightBox>
      </FlexBox>
      {toast && <Toast message={toast.message} onClose={closeToast} />}
    </StyledInformationBar>
  );
}

export default InformationBar;
