import React from 'react';
import InformationBar from '../../components/domain/rollingpaper/InformationBar/InformationBar';
import { useParams } from 'react-router-dom';
import MessageCardList from '../../components/domain/rollingpaper/MessageCardList/MessageCardList';
import styled from 'styled-components';
import useRecipient from '../../components/common/hooks/recipients/useRecipeint';
import { theme } from '../../styles/theme';

const StyledRollingPaper = styled.div`
  height: calc(100vh - 65px);
  background-color: ${(props) => theme.colors[props.$bgColor]?.[200]};
  background-image: url(${(props) => props.$bgUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function RollingPaper() {
  const { id } = useParams();
  const { rollingPaper, loading, error, refetch } = useRecipient(id);
  const {
    name,
    backgroundColor,
    backgroundImageURL,
    createdAt,
    messageCount,
    recentMessages,
  } = rollingPaper;

  return (
    <StyledRollingPaper $bgColor={backgroundColor} $bgUrl={backgroundImageURL}>
      <InformationBar />
      <MessageCardList postId={id} />
    </StyledRollingPaper>
  );
}

export default RollingPaper;
