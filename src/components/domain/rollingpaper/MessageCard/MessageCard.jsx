import Card from '../../../../pages/RollingPaper/components/Card';
import Badge from '../../../common/Badge/Badge';
import { formatDate } from '../../../../utils/date';
import { useLocation } from 'react-router-dom';
import { DeleteButton } from '../../../common/Button/DeleteButton';

function MessageCard({ message, onClick, onDelete }) {
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

  const location = useLocation(); // 현재 경로 가져오기
  const isEditPage = location.pathname.includes('/edit'); // 편집 페이지인지 확인

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
        <Card.Message $limit>{content}</Card.Message>
      </Card.MessageBox>
      <Card.Date>{date}</Card.Date>

      {/* 편집 페이지에서만 삭제 버튼 표시 */}
      {isEditPage && <DeleteButton onClick={() => onDelete(id)} />}
    </Card.Container>
  );
}

export default MessageCard;
