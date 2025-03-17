// CreateMessageCard.vaildation.jsx

// 메시지 전송 데이터에 대한 유효성 검증 함수
export function validateMessage(data) {
    const errors = {};
  
    // sender: 필수, 최소 1글자, 최대 40글자
    if (!data.sender || data.sender.trim().length === 0) {
      errors.sender = "보낸 사람 이름은 필수입니다.";
    } else if (data.sender.trim().length > 40) {
      errors.sender = "보낸 사람 이름은 40자 이내여야 합니다.";
    }
  
    // recipientId: 필수, 숫자여야 함
    if (data.recipientId === undefined || data.recipientId === null) {
      errors.recipientId = "받는 사람 ID는 필수입니다.";
    } else if (typeof data.recipientId !== "number") {
      errors.recipientId = "받는 사람 ID는 숫자여야 합니다.";
    }
  
    // content: 필수, 최소 1글자
    if (!data.content || data.content.trim().length === 0) {
      errors.content = "내용은 필수입니다.";
    }
  

  
    return errors;
  }
  