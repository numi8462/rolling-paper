import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useRecipients from '../../components/common/hooks/recipients/useRecipients';
import { Font, media, theme } from '../../styles/theme';
import { FilledButton } from '../../components/common/Button/FilledButton';
import { PaperCardList } from '../../components/domain/rollingpaper/PaperCardList/PaperCardList';
import { Helmet } from 'react-helmet';

function RollingPaperList() {
  const {
    rollingPapers: rollingPapers1,
    loading: loading1,
    error: error1,
    refetch: refetch1,
  } = useRecipients();
  const {
    rollingPapers: rollingPapers2,
    loading: loading2,
    error: error2,
    refetch: refetch2,
  } = useRecipients();

  // if (rollingPapers1) {
  //   console.log(rollingPapers1);
  // }
  // if (rollingPapers2) {
  //   console.log(rollingPapers2);
  // }

  // 메세지 많은순 / 최신순
  const sortedCount = rollingPapers1.sort(
    (a, b) => b.messageCount - a.messageCount
  );
  const sortedCreate = rollingPapers2.sort((a, b) => a.createdAt - b.createdAt);

  return (
    <div>
      <Helmet>
        <title>목록 - 롤링페이퍼</title>
        <meta name="description" content="롤링페이퍼 목록" />
      </Helmet>
      <Container>
        <PaperTitle $bold>인기 롤링 페이퍼 🔥</PaperTitle>
        <PaperCardList rollingPapers={sortedCount} />
        <PaperTitle $bold>최근에 만든 롤링 페이퍼 ⭐️</PaperTitle>
        <PaperCardList rollingPapers={sortedCreate} />
        <LinkBox>
          <Link to="/post">
            <FilledButton w="280">나도 만들어보기</FilledButton>
          </Link>
        </LinkBox>
      </Container>
    </div>
  );
}

export default RollingPaperList;

const LinkBox = styled.div`
  text-align: center;
  ${theme.mb[113]};
  button {
    margin: 64px auto 0;
  }
`;
const PaperTitle = styled.div`
  ${Font.f24};
  ${theme.mt[50]};
  ${theme.mb[16]};
  ${media.tablet`
    padding:0 24px;
  `}
  ${media.mobile`
    padding:0 20px;
  `}
`;
const Container = styled.div`
  background-color: white;
  max-width: 1200px;
  margin: 0 auto;
`;
