import requestor from '../client/requestor';

class RecipientService {
  // 모든 rolling paper 불러오기
  getRecipients(limit = 0, offset = 0) {
    return requestor.get(`/recipients/?limit=${limit}&offset=${offset}`);
  }
  // rolling paper 만들기
  createRecipient(body) {
    return requestor.post(`/recipients/`, body);
  }
  // rolling paper 불러오기
  getRecipient(id) {
    return requestor.get(`/recipients/${id}/`);
  }
  // rolling paper 삭제
  deleteRecipient(id) {
    return requestor.delete(`/recipients/${id}/`);
  }
  // rolling paper의 모든 메세지 불러오기
  getMessages(id, limit = 0, offset = 0) {
    return requestor.get(
      `/recipients/${id}/messages/?limit=${limit}&offset=${offset}`
    );
  }
  // rolling paper 만들기
  createMessage(id, body) {
    return requestor.post(`/recipients/${id}/messages/`, body);
  }
  // rolling paper의 모든 반응 불러오기
  getReactions(id) {
    return requestor.get(`/recipients/${id}/reactions/`);
  }
  // rolling paper 반응 만들기
  createReaction(id, body) {
    return requestor.post(`/recipients/${id}/reactions/`, body);
  }
}

const recipientService = new RecipientService();

export default recipientService;
