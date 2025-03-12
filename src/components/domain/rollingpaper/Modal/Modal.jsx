import styled from 'styled-components';
import Card from '../../../../pages/RollingPaper/components/Card';
import { theme } from '../../../../styles/theme';

const S = {
  ModalBox: styled.div`
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #00000099;
    z-index: 999;
  `,

  Modal: styled.div`
    position: absolute;
    width: 600px;
    height: 476px;
    border-radius: 16px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.basic.white};
  `,
};

function Modal({ message }) {
  const {
    id,
    recipientId,
    sender,
    profileImageURL,
    relationship,
    content,
    font,
    createdAt,
  } = message;

  return (
    <S.ModalBox>
      <S.Modal>box</S.Modal>
    </S.ModalBox>
  );
}

export default Modal;
