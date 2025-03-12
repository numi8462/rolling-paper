import React from 'react';
import useRecipients from '../../components/common/hooks/recipients/useRecipients';
import { RollingPaperCard } from '../../components/domain/rollingpaper/RollingPaperCard/RollingPaperCard';
import { Container, Font, media, theme } from '../../styles/theme';
import styled from 'styled-components';
import { FilledButton } from '../../components/common/Button/FilledButton';
import { Link } from 'react-router-dom';

function RollingPaperList() {
  const { 
    rollingPapers: rollingPapers1, 
    loading: loading1, 
    error: error1, 
    refetch: refetch1 
  } = useRecipients();
  const { 
    rollingPapers: rollingPapers2, 
    loading: loading2, 
    error: error2, 
    refetch: refetch2 
  } = useRecipients();


  // if (rollingPapers1) {
  //   console.log(rollingPapers1);
  // }
  // if (rollingPapers2) {
  //   console.log(rollingPapers2);
  // }

  // 메세지 많은순 / 최신순  
  const sortedCount = rollingPapers1.sort((a, b) => b.messageCount - a.messageCount);
  const sortedCreate = rollingPapers2.sort((a, b) => a.createdAt - b.createdAt);

  return (
    <div>
      <Container>
        <PaperTitle $bold>인기 롤링 페이퍼 🔥</PaperTitle>
        <PaperCardList>
          {sortedCount &&
            sortedCount.map((rollingPaper) => {
              return (
                <RollingPaperCard key={rollingPaper.id} rollingPaper={rollingPaper} />
              );
            })}
        </PaperCardList>
        <PaperTitle $bold>최근에 만든 롤링 페이퍼 ⭐️️</PaperTitle>
        <PaperCardList>
          {sortedCreate &&
            sortedCreate.map((rollingPaper) => {
              return (
                <RollingPaperCard key={rollingPaper.id} rollingPaper={rollingPaper} />
              );
            })}
        </PaperCardList>
        <LinkBox>
          <Link to="/Post">
            <FilledButton w='280'>나도 만들어보기</FilledButton>
          </Link>
        </LinkBox>
      </Container>
    </div>
  );
}

export default RollingPaperList;


const PaperCardList = styled.ul`
  display:flex;
  gap:20px;
  white-space: nowrap;
  flex-wrap: nowrap;
  overflow: hidden;
  > li {
      min-width:calc( 25% - 15px);
      width:calc( 25% - 15px);
    
    ${media.tablet`
      min-width:calc( 40% - 15px);
      width:calc( 40% - 15px);
    `}

    ${media.mobile`
      min-width:calc( 60% - 15px);
      width:calc( 60% - 15px);
    `}
  }

`
const LinkBox = styled.div`
text-align: center;
${theme.mb[113]};
  button{
    margin:64px auto 0;
  }
`
const PaperTitle = styled.div`
  ${Font.f24};
  ${theme.mt[50]};
  ${theme.mb[16]};
`