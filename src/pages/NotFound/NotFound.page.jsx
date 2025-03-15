import styled from 'styled-components';
import { Container } from '../../styles/theme';

const S = {
  NotFoundContainer: styled.div`
    display: flex;
  `,

  Image: styled.img``,

  Title: styled.h2``,
};

function NotFound() {
  return (
    <Container>
      <S.NotFoundContainer>
				<Image
			</S.NotFoundContainer>
    </Container>
  );
}

export default NotFound;
