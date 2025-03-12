import styled from 'styled-components';
import MessageCard from '../MessageCard/MessageCard';
import { Container, theme } from '../../../../styles/theme';
import useMessages from '../../../common/hooks/messages/useMessages';
import Card from '../../../../pages/RollingPaper/components/Card';
import Icon from '../../../../assets/Icons/Icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Modal from '../Modal/Modal';
const S = {
  ListContainer: styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    padding: 9% 0;
    gap: 24px;

    @media (max-width: ${theme.breakpoints.t}) {
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }

    @media (max-width: ${theme.breakpoints.m}) {
      grid-template-columns: repeat(1, 1fr);
      gap: 16px;
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

  const handleClick = (message) => {
    console.log('clicked', message.id);
    setMessage(message);
  };

  return (
    <Container style={{ backgroundColor: 'transparent' }}>
      <S.ListContainer>
        <Link to={`/post/${postId}/message`}>
          <Card.Container>
            <S.AddIcon>
              <Icon name="addIcon" alt="add" size="56" />
            </S.AddIcon>
          </Card.Container>
        </Link>

        {messages?.map((message) => (
          <MessageCard
            key={message.id}
            message={message}
            onClick={() => handleClick(message)}
          />
        ))}
      </S.ListContainer>
      {message && <Modal message={message} />}
    </Container>
  );
}

export default MessageCardList;
