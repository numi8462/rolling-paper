import Input from "../../components/common/Input/Input";
import { theme, Font, Container, media } from "../../styles/theme";
import styled from 'styled-components';
import { FilledButton } from "../../components/common/Button/FilledButton";
import { Link, useParams } from "react-router-dom";
import Dropdown from "../../components/common/Dropdown/Dropdown";
import { useState } from "react";
import Profile from "../../components/common/Profile/Profile";
import TextEditor from "../../components/common/TextEditor/TextEditor";

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
    const {id} = useParams();
    const [selectItem, setSelectItem] = useState('');
    const [messageCardFormData, setMessageCardFormData] = useState({
        recipientId: id,
        sender: "string",
        profileImageURL: "string",
        relationship: "친구",
        content: "string",
        font: "Noto Sans"
      });
    
    const relations = [
        {value: '지인', label: '지인'},
        {value: '동료', label: '동료'},
        {value: '가족', label: '가족'},
        {value: '친구', label: '친구'},
    ];

    const Fonts = [
        {value: 'Noto Sans', label: 'Noto Sans'},
        {value: 'Pretendard', label: 'Pretendard'},
        {value: 'Nanum Myeongjo', label: '나눔 명조'},
        {value: 'Nanum Pen', label: '나눔 손글씨 손편지체'},
    ];
    console.log(selectItem);

    const handleChangeFormData = (key, value) => {
        return setMessageCardFormData(prev => ({
            ...prev,
            [key]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // setErrors
        console.log("Form Data: ",messageCardFormData);
    }

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
                      onChange={e => handleChangeFormData('sender', e.target.value)}
                    />
                  </S.ContentWrapper>
                  <S.ContentWrapper>
                    <S.Label $bold>프로필 이미지</S.Label>
                    <Profile 
                        value={messageCardFormData.profileImageURL}
                        onChange={e => handleChangeFormData('profileImageURL', e.target.value)}
                    />
                  </S.ContentWrapper>
                  <S.ContentWrapper>
                    <S.Label $bold>상대와의 관계</S.Label>
                    <div>
                        <Dropdown
                          options={relations}
                          errorMessage="관계를 선택해주세요."
                          setSelectItem={setSelectItem}
                          value={messageCardFormData.relationship}
                          onChange={e => handleChangeFormData('relationship', e.target.value)}
                        />
                    </div>
                  </S.ContentWrapper>
                  <S.ContentWrapper>
                    <S.Label $bold>내용을 입력해주세요</S.Label>
                    <TextEditor 
                        value={messageCardFormData.content}
                        onChange={e => handleChangeFormData('content', e.target.value)}
                    />
                  </S.ContentWrapper>
                  <S.ContentWrapper>
                    <S.Label $bold>폰트 선택</S.Label>
                    <div>
                        <Dropdown
                          options={Fonts}
                          errorMessage="폰트를 선택해 주세요."
                          setSelectItem={setSelectItem}
                          value={messageCardFormData.font}
                          onChange={e => handleChangeFormData('font', e.target.value)}
                        />
                    </div>
                  </S.ContentWrapper>
                </S.MessageContainer>
                <S.ButtonContainer>
                    <FilledButton w="720" onClick={handleSubmit} >생성하기</FilledButton>
                </S.ButtonContainer>
            </S.CreateMessageCard>
        </Container>
    );
}
