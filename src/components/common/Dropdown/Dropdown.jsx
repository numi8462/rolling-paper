import styled from 'styled-components';
import { Font, theme } from '../../../styles/theme.jsx';

const gray_900 = theme.colors.gray[900];
const gray_700 = theme.colors.gray[700];
const gray_500 = theme.colors.gray[500];
const gray_400 = theme.colors.gray[400];
const gray_300 = theme.colors.gray[300];
const gray_200 = theme.colors.gray[200];
const gray_100 = theme.colors.gray[100];
const error_color = theme.colors.basic.Error;

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
`;

const ErrorMessage = styled.span`
  margin-top: 4px;
  font-size: 14px;
  color: ${error_color};
  /* show가 true일 때만 보이도록 */
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
`;

const StyleSelect = styled.select`
    width: 320px;
    height: 50px;
    /* padding: 12px 16px; */
    ${theme.p[12][16]}
    border: 1px solid ${({ error }) => {error ? error_color : gray_300}};
    border-radius: 8px;
    /* font */
    ${Font.f16}
    color: ${gray_500};
    background-color: ${theme.colors.basic.white};

    /* 기본 커스텀 수정 */
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: url(src/assets/Icons/downArrow.svg) no-repeat 95% 50%;
    background-size: 16px;

    /* animation */
    transition: border 0.2s ease-in-out;

    &:focus {
        border: 2px solid ${gray_500};
        color: ${gray_900};
    }

    &:active {
        outline: none;
        border: 2px solid ${gray_500};
        color: ${gray_900};
        background: url(src/assets/Icons/topArrow.svg) no-repeat 95% 50%;
    }

    &:hover {
        border: 1px solid ${gray_500};
    }
    
    &:disabled {
        border: 1px solid ${gray_300};
        background-color: ${gray_100};
        color: ${gray_400};
        background: url(src/assets/Icons/disabledArrow.svg) no-repeat 95% 50%;
        cursor: not-allowed;
    }
`;

function Dropdown (
    placeholder= 'PlaceHolder',
    disabled = false,
    isError = false
) {
    const [value, setValue] = useState('');
    const [localError, setLocalError] = useState(false);
  
    // blur 시, 값이 없으면 에러로 처리
    const handleBlur = () => {
      setLocalError(!value);
    };

    return (
        <DropdownContainer>
            <StyleSelect 
                // 에러 유무 판단: props.isError가 있으면 우선순위로, 
                // 없으면 내부 상태(localError) 사용
                $error={isError || localError}
                disabled={disabled}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onBlur={handleBlur}
            >
                <option value={hidden}>{placeholder}</option>

            </StyleSelect>
            <ErrorMessage show={error}>하나를 선택해주세요.</ErrorMessage>
        </DropdownContainer>
    );
}

export default Dropdown;
