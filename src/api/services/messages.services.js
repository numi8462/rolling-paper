import requestor from '../client/requestor';

class MessageService {
  // 메세지 불러오기
  getMessage(id) {
    return requestor.get(`/messages/${id}`);
  }
  // 메세지의 전체 내용을 body의 내용으로 업데이트
  putMessages(id, body) {
    return requestor.put(`/messages/${id}`, body);
  }
  // 메세지의 일부 정보 업데이트
  patchMessages(id, body) {
    return requestor.patch(`/messages/${id}`, body);
  }
  // 메세지 삭제
  deleteMessages(id) {
    return requestor.delete(`/messages/${id}`);
  }
}

const messageService = new MessageService();

export default messageService;
