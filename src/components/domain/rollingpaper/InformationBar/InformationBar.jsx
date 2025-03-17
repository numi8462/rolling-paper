import React, { useState } from 'react';
import styled from 'styled-components';
import Toast from '../../../common/Toast/Toast';
import { Container, theme } from '../../../../styles/theme';
import { ShareButton } from '../../../common/Button/ShareButton';
import Options from './Options';
import useKakaoShare from '../../../common/hooks/kakao/useKakaoShare';
import { TopEmojis } from '../../../common/Emoji/TopEmojis';
import { Profiles } from '../../../common/Profile/Profiles';
import { AddEmojiButton } from '../../../common/Button/AddEmojiButton';
import useReactions from '../../../common/hooks/reactions/useReactions';
import EmojiPickerBox from './EmojiPickerBox';
import useToast from '../../../common/Toast/useToast';


const StyledInformationBar = styled.div`
  position: sticky;
  top: 0;
  z-index: 99;
  ${theme.center}
  height: 68px;
  background-color: ${theme.colors.basic.white};
`;

const StyledName = styled.div`
  font-size: 28px;
  font-weight: 700;
`;

const RelativeBox = styled.div`
  position: relative;
`;
const FlexBox = styled.div`
  display:flex;
  justify-content: space-between;
`;
const RightBox = styled.div`
  display:flex;
  align-items: center;
`;
const PaperCardCount = styled.div`
  display:flex;
`;

function InformationBar({ postId , rollingPaper }) {
  const {
    name,
    messageCount,
    recentMessages,
  } = rollingPaper;
  
  const { reactions, refetch } = useReactions(postId);
  const [ isEmojiPickerOpen, setIsEmojiPickerOpen ] = useState(false);
  const { toast, showToast, closeToast } = useToast();
  const [ isOptionsOpen, setIsOptionsOpen ] = useState(false);
  const shareKakao = useKakaoShare(name, 5, 4); // 카카오 공유 useKakaoShare(이름, 메세지 수, 반응 수)

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  const toggleEmojiPicker = () => {
    setIsEmojiPickerOpen(!isEmojiPickerOpen);
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

  const topReactions = reactions.slice(0, 3);

  return (
    <StyledInformationBar>
      <Container>
        <FlexBox>
          <StyledName>To. {name}</StyledName>
          <RightBox>
            <Profiles
              recentMessages={recentMessages}
              totalLength={messageCount}
            />
            <PaperCardCount>
              <b>{messageCount}</b>명이 작성했어요!
            </PaperCardCount>
            <TopEmojis topReactions={topReactions}/>
            <RelativeBox>
              <AddEmojiButton onClick={toggleEmojiPicker}/>
              <EmojiPickerBox postId={postId} refetch={refetch} open={isEmojiPickerOpen} setOpen={setIsEmojiPickerOpen}/>
            </RelativeBox>
            <RelativeBox>
              <ShareButton onClick={() => toggleOptions()} />
              {isOptionsOpen && (
                <Options
                  handleKakaoClick={() => handleKakaoClick()}
                  handleShareUrlClick={() => handleShareUrlClick()}
                />
              )}
            </RelativeBox>
          </RightBox>
        </FlexBox>
      </Container>
      {toast && <Toast message={toast.message} onClose={closeToast} />}
    </StyledInformationBar>
  );
}

export default InformationBar;
