import requestor from '../client/requestor';

class RecipientService {
  // 모든 rollingpaper 불러오기
  getRecipients(limit = 0, offset = 0) {
    return requestor.get(`/recipients/?limit=${limit}&offset=${offset}`);
  }
  // rollingpaper 만들기
  createRecipient(body) {
    return requestor.post(`/recipients/`, {
      data: body,
    });
  }
  // rollingpaper 불러오기
  getRecipient(id) {
    return requestor.get(`/recipients/${id}`);
  }
  // rollingpaper 삭제
  deleteRecipient(id) {
    return requestor.delete(`/recipients/${id}`);
  }
  // rollingpaper의 모든 메세지 불러오기
  getMessages(id, limit = 0, offset = 0) {
    return requestor.get(
      `/recipients/${id}/messages/?limit=${limit}&offset=${offset}`
    );
  }
  // rollingpaper 만들기
  createMessage(id, body) {
    return requestor.post(`/recipients/${id}/messages`, {
      data: body,
    });
  }
  // rollingpaper의 모든 반응 불러오기
  getReactions(id) {
    return requestor.get(`/recipients/${id}/reactions`);
  }
  // rollingpaper 반응 만들기
  createReaction(id, body) {
    return requestor.post(`/recipients/${id}/reactions`, {
      data: body,
    });
  }
}

const recipientService = new RecipientService();

export default recipientService;
