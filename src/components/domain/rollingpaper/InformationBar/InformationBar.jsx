import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Emoji from '../../../common/Emoji/Emoji';
import useToast from '../../../common/Toast/useToast';
import Toast from '../../../common/Toast/Toast';
import { theme } from '../../../../styles/theme';
import { ShareButton } from '../../../common/Button/ShareButton';
import Options from './Options';
import useKakaoShare from '../../../common/hooks/kakao/useKakaoShare';

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

const ShareContainer = styled.div`
  position: relative;
`;

function InformationBar({ name, messageCount, emojis, reactionCount }) {
  const { toast, showToast, closeToast } = useToast();
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const shareKakao = useKakaoShare(name, 5, 4); // 카카오 공유

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

  return (
    <StyledInformationBar>
      <StyledName>To. {name}</StyledName>
      <Emoji emoji={'\u{1F600}'} count={2} />

      <ShareContainer>
        <ShareButton onClick={() => toggleOptions()} />
        {isOptionsOpen && (
          <Options
            handleKakaoClick={() => handleKakaoClick()}
            handleShareUrlClick={() => handleShareUrlClick()}
          />
        )}
      </ShareContainer>

      {toast && <Toast message={toast.message} onClose={closeToast} />}
    </StyledInformationBar>
  );
}

export default InformationBar;
