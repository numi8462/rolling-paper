import styled from 'styled-components';
import { theme } from '../../../../styles/theme';
import Card from '../../../../pages/RollingPaper/components/Card';
import Badge from '../../../common/Badge/Badge';
import { formatDate } from '../../../../utils/date';

function MessageCard({ message, onClick }) {
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

  const date = formatDate(createdAt);

  return (
    <Card.Container onClick={onClick}>
      <Card.InfoBox>
        <Card.ProfileImg src={profileImageURL} alt="profile" />
        <Card.SenderInfoBox>
          <Card.Sender>
            From.
            <Card.Name $bold>{sender}</Card.Name>
          </Card.Sender>
          <Badge relationship={relationship} />
        </Card.SenderInfoBox>
      </Card.InfoBox>
      <Card.MessageBox>
        <Card.Message>{content}</Card.Message>
      </Card.MessageBox>
      <Card.Date>{date}</Card.Date>
    </Card.Container>
  );
}

export default MessageCard;
