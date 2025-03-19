import styled from 'styled-components';
import MessageCard from '../MessageCard/MessageCard';
import { Container, theme } from '../../../../styles/theme';
import useMessages from '../../../common/hooks/messages/useMessages';
import useDeleteMessage from '../../../common/hooks/messages/useDeleteMessage';
import Card from '../../../../pages/RollingPaper/components/Card';
import Icon from '../../../../assets/Icons/Icons';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Modal from '../Modal/Modal';

const S = {
  ListContainer: styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    padding: 9% 0;
    gap: 24px;
    z-index: 1;

    @media (max-width: ${theme.breakpoints.t}) {
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
      margin-bottom: 20px;
    }

    @media (max-width: ${theme.breakpoints.m}) {
      grid-template-columns: repeat(1, 1fr);
      gap: 16px;
      margin-bottom: 100px;
    }
  `,

  AddIcon: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};

function MessageCardList({ postId }) {
  const { messages, loading, error, refetch } = useMessages(postId);
  const [message, setMessage] = useState();
  const { deleteMessage } = useDeleteMessage(refetch);
  const location = useLocation();

  const handleClick = message => {
    setMessage(message);
  };

  const handleConfirm = () => {
    setMessage(null);
  };

  // 🛠 메시지 삭제 핸들러 추가
  const handleDelete = async id => {
    await deleteMessage(id);
  };

  return (
    <Container style={{ backgroundColor: 'transparent' }}>
      <S.ListContainer>
        {location.pathname !== `/post/${postId}/edit` && (
          <Link to={`/post/${postId}/message`}>
            <Card.Container>
              <S.AddIcon>
                <Icon name="addIcon" alt="add" size="56" />
              </S.AddIcon>
            </Card.Container>
          </Link>
        )}

        {messages?.map(message => (
          <MessageCard
            key={message.id}
            message={message}
            onClick={() => handleClick(message)}
            onDelete={handleDelete}
          />
        ))}
      </S.ListContainer>
      {message && <Modal message={message} onClick={() => handleConfirm()} />}
    </Container>
  );
}

export default MessageCardList;
