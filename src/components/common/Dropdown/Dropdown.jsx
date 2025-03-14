import React, { useState, useRef, useEffect } from 'react';

function Dropdown({
  placeholder = 'PlaceHolder', // 기본 플레이스홀더
  options = [],                // 옵션 리스트
  disabled = false,            // 비활성화
  isError = false,             // 외부에서 에러 상태
  onChange,                    // 선택 시 부모에 넘겨줄 콜백
  errorMessage = '하나를 선택해주세요', // 에러 메세지
}) {
  const [isopen, setIsopen] = useState(false);   // 드롭다운 열림/닫힘 상태
  const [value, setValue] = useState('');        // 선택된 값
  const [localError, setLocalError] = useState(false);

  const dropdownRef = useRef(null);

  // 버튼 클릭 시 토글
  const handleToggle = () => {
    if (disabled) return; // 비활성화 시 클릭 막기
    setIsopen((prev) => !prev);
  };

  // 옵션 클릭 시
  const handleOptionClick = (option) => {
    setValue(option.value);
    onChange && onChange(option.value);
    setIsopen(false); // 목록 닫기
    setLocalError(false); // 선택이 되면 에러 해제
  };

  // blur 시, 값이 없으면 에러
  const handleBlur = () => {
    if (!value) {
      setLocalError(true);
    }
  };

  // 클릭이 바깥으로 나가면 닫기
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsopen(false);
      }
    }
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // 에러는 부모에서 내려준 isError가 우선, 없다면 로컬상태 localError
  const showError = isError || localError;

  /** ▼ 현재 보여줄 텍스트 (값이 있으면 해당 라벨, 없으면 placeholder) */
  const buttonText = value
    ? options.find((opt) => opt.value === value)?.label || ''
    : placeholder;

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton
        type="button"
        onClick={handleToggle}
        onBlur={handleBlur}
        $error={showError}
        disabled={disabled}
        $isOpen={isopen}
        $hasValue={!!value}
      >
        {buttonText}
      </DropdownButton>

      {/* ▼ 드롭다운 옵션 목록 */}
      {isopen && !disabled && (
        <OptionsList>
          {options.map((option, idx) => (
            <OptionItem
              key={idx}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </OptionItem>
          ))}
        </OptionsList>
      )}

      {/* ▼ 에러 메시지 */}
      <ErrorMessage show={showError}>{errorMessage}</ErrorMessage>
    </DropdownContainer>
  );
}

export default Dropdown;
