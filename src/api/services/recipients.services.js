import requestor from '../client/requestor';

class RecipientService {
  getRecipients(limit = 0, offset = 0) {
    return requestor.get(`/recipients/?limit=${limit}&offset=${offset}`);
  }

  postRecipients(body) {
    return requestor.post(`/recipients/`, {
      data: body,
    });
  }
}

const recipientService = new RecipientService();

export default recipientService;
