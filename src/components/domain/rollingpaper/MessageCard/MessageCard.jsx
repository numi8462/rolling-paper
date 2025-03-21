import Card from '../../../../pages/RollingPaper/components/Card';
import Badge from '../../../common/Badge/Badge';
import { formatDate } from '../../../../utils/date';
import { useLocation } from 'react-router-dom';
import { DeleteButton } from '../../../common/Button/DeleteButton';
import styled from 'styled-components';

const StyledDeleteButton = styled(DeleteButton)`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  right: 5px;
  z-index: 1;
`;

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

  // 삭제 확인 핸들러
  const handleDelete = event => {
    event.stopPropagation();
    const confirmDelete = window.confirm('정말 메시지를 삭제하시겠습니까?');
    if (confirmDelete) {
      onDelete(id);
    }
  };

  return (
    <Card.Container onClick={onClick} style={{ position: 'relative' }}>
      <Card.InfoBox>
        <Card.ProfileImg src={profileImageURL} alt="profile" />
        <Card.SenderInfoBox style={{ position: 'relative' }}>
          <Card.Sender>
            From.
            <Card.Name $bold>{sender}</Card.Name>
          </Card.Sender>
          <Badge relationship={relationship} />
          {isEditPage && <StyledDeleteButton onClick={handleDelete} />}
        </Card.SenderInfoBox>
      </Card.InfoBox>
      <Card.MessageBox $font={newFont}>
        <Card.Message $limit dangerouslySetInnerHTML={{ __html: content }} />
      </Card.MessageBox>
      <Card.Date>{date}</Card.Date>
    </Card.Container>
  );
}

export default MessageCard;
