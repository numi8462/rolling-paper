import Input from "../../components/common/Input/Input";
import { theme, Font, Container, media } from "../../styles/theme";
import styled from 'styled-components';
import { FilledButton } from "../../components/common/Button/FilledButton";
import { Link } from "react-router-dom";
import Dropdown from "../../components/common/Dropdown/Dropdown";
import { useState } from "react";
import Profile from "../../components/common/Profile/Profile";

const S = {
    CreateMessageCard: styled.div`
        /* width: 100%; */
        ${theme.center}
        flex-direction: column;
        margin: 50px 0 ;
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
        margin-top: 48px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    `,
};


export default function CreateMessageCard() {
    const [selectItem, setSelectItem] = useState('');

    const relationship = [
        {value: '지인', label: '지인'},
        {value: '동료', label: '동료'},
        {value: '가족', label: '가족'},
        {value: '친구', label: '친구'},
    ];

    const Fonts = [
        {value: 'Noto Sans', label: 'Noto Sans'},
        {value: 'Pretendard', label: 'Pretendard'},
        {value: '나눔 명조', label: '나눔 명조'},
        {value: '나눔 손글씨 손편지체', label: '나눔 손글씨 손편지체'},
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
                        <Profile />
                    </S.ContentWrapper>
                    <S.ContentWrapper>
                        <S.Label $bold>상대와의 관계</S.Label>
                        <Dropdown 
                            placeholder={relationship[0].label}
                            options={relationship}
                            disabled={false}
                            onChange={handleSelectChange}
                            errorMessage="관계를 선택해주세요."
                        />
                    </S.ContentWrapper>
                    <S.ContentWrapper>
                        <S.Label $bold>내용을 입력해주세요</S.Label>
                    </S.ContentWrapper>
                    <S.ContentWrapper>
                        <S.Label $bold>폰트 선택</S.Label>
                        <Dropdown 
                            placeholder={Fonts[0].label}
                            options={Fonts}
                            disabled={false}
                            onChange={handleSelectChange}
                            errorMessage="폰트를 선택해 주세요."
                        />
                    </S.ContentWrapper>
                </S.MessageContainer>
                <S.ButtonContainer>
                    <Link to="/list">
                        <FilledButton w="720" >생성하기</FilledButton>
                    </Link>
                </S.ButtonContainer>
            </S.CreateMessageCard>
        </Container>
    );
}
