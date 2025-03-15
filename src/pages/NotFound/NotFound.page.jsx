import styled from 'styled-components';
import { Container, Font, theme } from '../../styles/theme';
import Icon from '../../assets/Icons/Icons';
import { Button } from '../../components/common/Button/Button';
import { Link } from 'react-router-dom';

const S = {
  NotFoundContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 80px 0;
  `,

  Title: styled.h2`
    ${Font.f24};
    margin: 20px 0 5px;
  `,
  Message: styled.p`
    color: ${theme.colors.gray[400]};
  `,
  HomeButton: styled(Button)`
    width: 160px;
    height: 56px;
    margin-top: 50px;
  `,
};

function NotFound() {
  return (
    <Container>
      <S.NotFoundContainer>
        <Icon name="warnIcon" size="50" />
        <S.Title $bold>존재하지 않는 페이지 입니다.</S.Title>
        <S.Message>주소가 맞는지 다시 한 번 확인해 주세요.</S.Message>
        <Link to="/">
          <S.HomeButton>홈으로 가기</S.HomeButton>
        </Link>
      </S.NotFoundContainer>
    </Container>
  );
}

export default NotFound;
