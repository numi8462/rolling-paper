import Input from "../../components/common/Input/Input";
import { theme, Font, Container, media } from "../../styles/theme";
import styled from 'styled-components';
import { FilledButton } from "../../components/common/Button/FilledButton";
import { Link } from "react-router-dom";
import Dropdown from "../../components/common/Dropdown/Dropdown";
import { useState } from "react";

const S = {
    CreateMessageCard: styled.div`
        /* width: 100%; */
        ${theme.center}
        flex-direction: column;
        margin-top: 50px;
    `,

    MessageContainer: styled.form`
        display: flex;
        flex-direction: column;
        justify-content: left;
        width: 720px;
        gap: 50px;

        ${media.mobile`
            width: 100%;
        `}
    `,

    ContentWrapper: styled.div`
        display: flex;
        flex-direction: column;
        gap: 12px;

    `,

    Label: styled.h1`
        ${Font.f24};
    `,

    ButtonContainer: styled.div`
        width: 280px;
        margin-top: 48px;
    `,
};

export default function CreateMessageCard() {
    const [selectItem, setSelectItem] = useState('');

    const realations = [
        {value: '지인', label: '지인'},
        {value: '동료', label: '동료'},
        {value: '가족', label: '가족'},
        {value: '친구', label: '친구'},
    ];

    const handleSelectChange = (value) => setSelectItem(value);

    return (
        <Container>
            <S.CreateMessageCard>
                <S.MessageContainer>
                    <S.ContentWrapper>
                        <S.Label $bold>From.</S.Label>
                        <Input
                            placeholder='이름을 입력해 주세요.'
                            width={720}
                            maxWidth={720}
                        />
                    </S.ContentWrapper>
                    <S.ContentWrapper>
                        <S.Label $bold>프로필 이미지</S.Label>
                    </S.ContentWrapper>
                    <S.ContentWrapper>
                        <S.Label $bold>상대와의 관계</S.Label>
                        <Dropdown 
                            placeholder="지인"
                            options={realations}
                            disabled={false}
                            onChange={handleSelectChange}
                            errorMessage="하나를 선택해주세요."
                        />
                    </S.ContentWrapper>
                    <S.ContentWrapper>
                        <S.Label $bold>내용을 입력해주세요</S.Label>
                    </S.ContentWrapper>
                    <S.ContentWrapper>
                        <S.Label $bold>폰트 선택</S.Label>
                
                    </S.ContentWrapper>
                </S.MessageContainer>
                <S.ButtonContainer>
                    <Link to="/list">
                        <FilledButton>생성하기</FilledButton>
                    </Link>
                </S.ButtonContainer>
            </S.CreateMessageCard>
        </Container>
    );
}
