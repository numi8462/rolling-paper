import styled from 'styled-components';
import Card from '../../../../pages/RollingPaper/components/Card';
import { theme } from '../../../../styles/theme';
import { formatDate } from '../../../../utils/date';
import Badge from '../../../common/Badge/Badge';
import { Button } from '../../../common/Button/Button';

const S = {
  ModalContainer: styled.div`
    min-width: 360px;
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #00000099;
    z-index: 999;
  `,

  Modal: styled.div`
    width: 600px;
    height: 65vh;
    min-height: 320px;
    border-radius: 16px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${theme.colors.basic.white};

    @media (max-width: ${theme.breakpoints.t}) {
      margin: 0 84px;
    }

    @media (max-width: ${theme.breakpoints.m}) {
      margin: 0;
    }
  `,

  ConfirmButton: styled(Button)`
    min-height: 40px;
    ${theme.fonts.pd};
  `,
};

function Modal({ message, onClick }) {
  const { sender, profileImageURL, relationship, content, font, createdAt } =
    message;

  const date = formatDate(createdAt);

  let newFont;
  switch (font) {
    case 'Noto Sans':
      newFont = 'ns';
      break;
    case 'Nanum Myeongjo':
      newFont = 'nm';
      break;
    case 'Nanum Pen':
      newFont = 'np';
      break;
    case 'Pretendard':
      newFont = 'pd';
      break;
    default:
      newFont = 'pd';
  }

  return (
    <S.ModalContainer>
      <S.Modal>
        <Card.InfoBox>
          <Card.ProfileImg src={profileImageURL} alt="profile" />
          <Card.SenderInfoBox>
            <Card.Sender>
              From.
              <Card.Name $bold>{sender}</Card.Name>
            </Card.Sender>
            <Badge relationship={relationship} />
          </Card.SenderInfoBox>
          <Card.Date>{date}</Card.Date>
        </Card.InfoBox>
        <Card.MessageBox $modal $font={newFont}>
          <Card.Message dangerouslySetInnerHTML={{ __html :  content  }} />
        </Card.MessageBox>
        <S.ConfirmButton w="120" h="40" onClick={onClick}>
          확인
        </S.ConfirmButton>
      </S.Modal>
    </S.ModalContainer>
  );
}

export default Modal;
