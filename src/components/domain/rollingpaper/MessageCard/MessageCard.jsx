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

  let newFont;
  switch (font) {
    case 'Noto Sans':
      newFont = 'ns';
      break;
    case '나눔명조':
      newFont = 'nm';
      break;
    case '나눔손글씨 손편지체':
      newFont = 'np';
      break;
    case 'Pretendard':
      newFont = 'pd';
      break;
    default:
      newFont = 'pd';
  }

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
      <Card.MessageBox $font={newFont}>
        <Card.Message $limit dangerouslySetInnerHTML={{ __html :  content  }} />
      </Card.MessageBox>
      <Card.Date>{date}</Card.Date>
    </Card.Container>
  );
}

export default MessageCard;
