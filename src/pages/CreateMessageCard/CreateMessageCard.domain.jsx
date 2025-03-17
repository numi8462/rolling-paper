// CreateMessageCard.domain.jsx
import recipientService from '../../api/services/recipients.services';

export async function createMessageAPI({
  team,
  recipientId,
  sender,
  profileImageURL,
  relationship,
  content,
  font,
}) {
  const payload = {
    team,
    recipientId,
    sender,
    profileImageURL,
    relationship,
    content,
    font,
  };

  try {
    const response = await recipientService.createMessage(recipientId, payload);
    return response.data;
  } catch (error) {
    throw error;
  }
}
