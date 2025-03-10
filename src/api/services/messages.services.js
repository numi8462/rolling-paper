import requestor from '../client/requestor';

class MessageService {
  getRecipients(limit = 0, offset = 0) {
    return requestor.get(`/recipients/?limit=${limit}&offset=${offset}`);
  }

  createRecipient(body) {
    return requestor.post(`/recipients/`, {
      data: body,
    });
  }

  getRecipient(id) {
    return requestor.get(`/recipients/${id}`);
  }

  deleteRecipient(id) {
    return requestor.delete(`/recipients/${id}`);
  }
}

const messageService = new MessageService();

export default messageService;
