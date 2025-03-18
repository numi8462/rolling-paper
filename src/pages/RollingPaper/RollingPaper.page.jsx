import React from 'react';
import InformationBar from '../../components/domain/rollingpaper/InformationBar/InformationBar';
import { useParams } from 'react-router-dom';
import MessageCardList from '../../components/domain/rollingpaper/MessageCardList/MessageCardList';
import styled from 'styled-components';
import useRecipient from '../../components/common/hooks/recipients/useRecipeint';
import { theme } from '../../styles/theme';
import NotFound from '../NotFound/NotFound.page';
import { Helmet } from 'react-helmet';

const StyledRollingPaper = styled.div`
  height: calc(100dvh - 65px);
  background-color: ${props => theme.colors[props.$bgColor]?.[200]};
  background-image: url(${props => props.$bgUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${theme.breakpoints.t}) {
    height: 100dvh;
  }
`;

function RollingPaper() {
  const { id } = useParams();
  const { rollingPaper, loading, error, refetch } = useRecipient(id);
  const {
    backgroundColor,
    backgroundImageURL,
  } = rollingPaper;

  if (error) {
    return <NotFound />;
  }
  
  return (
    <StyledRollingPaper $bgColor={backgroundColor} $bgUrl={backgroundImageURL}>
      <Helmet>
        <title>메인 - 롤링페이퍼</title>
        <meta name="description" content="롤링페이퍼 메인페이지" />
      </Helmet>
      {!loading && (
        <div>
          <InformationBar 
            postId={id}
            rollingPaper={rollingPaper} 
          />
          <MessageCardList postId={id} />
        </div>
      )}
    </StyledRollingPaper>
  );
}

export default RollingPaper;
