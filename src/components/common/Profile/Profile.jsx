import styled from 'styled-components';
import { theme, Font } from '../../../styles/theme';
import useProfileImages from '../hooks/images/useProfileImages';

const ProfileContainer = styled.div`
    display: flex;
    gap: 32px;
    align-items: center;
`;
const ProfileImg = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 100px;
`;
const ProfileSelectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    ${theme.g[12]};
`;
const ProfileText = styled.span`
    color: ${theme.colors.gray[500]};
    ${Font.f16};
`;
const ProfileSelectImgs = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    overflow: auto;

    @media (max-width: ${theme.breakpoints.m}) {   
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2px;
    }
`;
const ProfileSelectImg = styled.img`
    width: 56px;
    height: 56px;
    border-radius: 100px;
    border: 1px solid ${theme.colors.gray[200]};

    @media (max-width: ${theme.breakpoints.m}) {
        width: 40px;
        height: 40px;    
    }
`;

export default function Profile () {
    const { imgUrls, loading, error } = useProfileImages();

    // 로딩 중인 경우
    if (loading) {
      return <div>프로필 이미지를 불러오는 중입니다...</div>;
    }
  
    // 에러가 발생한 경우
    if (error) {
      return <div>이미지를 불러오는 데 실패했습니다.</div>;
    }

    // 첫 번째 이미지와 나머지 이미지 분리
    const mainImgUrl = imgUrls.length > 0 ? imgUrls[0] : null;
    const otherImgUrls = imgUrls.length > 1 ? imgUrls.slice(1) : [];

    return (
        <ProfileContainer>
            {mainImgUrl && (
                <ProfileImg
                    src={mainImgUrl}
                    alt="main-profile"
                    style={{ objectFit: 'cover' }}
                />
            )}
            <ProfileSelectWrapper>
                <ProfileText>프로필 이미지를 선택해 주세요!</ProfileText>
                <ProfileSelectImgs>
                    {otherImgUrls.map((imgUrl, index) => (
                        <ProfileSelectImg 
                            key={index}
                            src={imgUrl} 
                            alt={`profile-${index}`} 
                            style={{ objectFit: 'cover' }} 
                        >
                        </ProfileSelectImg>
                    ))}
                </ProfileSelectImgs>
            </ProfileSelectWrapper>
        </ProfileContainer>
    );
};