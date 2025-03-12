import React from 'react';
import styled from 'styled-components';
import Emoji from '../../../common/Emoji/Emoji';
import useToast from '../../../common/Toast/useToast';
import Toast from '../../../common/Toast/Toast';
import { theme } from '../../../../styles/theme';
import Badge from '../../../common/Badge/Badge';

const StyledInformationBar = styled.div`
  ${theme.center}
  height: 68px;
`;

const StyledName = styled.div`
  font-size: 28px;
  font-weight: 700;
`;

function InformationBar({ name, messageCount, emojis }) {
  const { toast, showToast, closeToast } = useToast();

  const handleClick = () => {
    const currentUrl = window.location.href;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        showToast('URL이 복사되었습니다.');
      })
      .catch((err) => {
        console.error('URL 복사에 실패했습니다.', err);
        showToast('URL 복사에 실패했습니다.');
      });
  };

  return (
    <StyledInformationBar>
      <StyledName>To. {name}</StyledName>
      <Emoji emoji={'\u{1F600}'} count={2} />
      <button onClick={handleClick}>URL복사</button>
      {toast && <Toast message={toast.message} onClose={closeToast} />}
      <Badge relationship="가족" />
    </StyledInformationBar>
  );
}

export default InformationBar;
