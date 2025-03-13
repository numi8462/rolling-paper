import Input from "../../components/common/Input/Input";
import { theme, Font, Container, media } from "../../styles/theme";
import styled, { css } from 'styled-components';
import { FilledButton } from "../../components/common/Button/FilledButton";
import { Link } from "react-router-dom";

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
    return (
        <Container>
            <S.CreateMessageCard>
                <S.MessageContainer>
                    <S.ContentWrapper>
                        <S.Label $bold>From.</S.Label>
                        {/* input media 설정 해야함 */}
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
