// CreateMessageCard.vaildation.jsx

// 메시지 전송 데이터에 대한 유효성 검증 함수
export function validateMessage(data) {
    const errors = {};
  
  
    // content: 필수, 최소 1글자
    if (!data.content || data.content.trim().length === 0) {
      errors.content = "내용은 필수입니다.";
    }
  

  
    return errors;
}
  