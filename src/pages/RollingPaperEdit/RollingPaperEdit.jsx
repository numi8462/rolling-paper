import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useDeleteRecipient from '../../components/common/hooks/recipients/useDeleteRecipient';
import RollingPaper from '../RollingPaper/RollingPaper.page';
import styled from 'styled-components';
import { Button } from '../../components/common/Button/Button';
import { Container, media } from '../../styles/theme';

const StyledFilledButton = styled.div`
  position: relative;
  top: 98px;
  max-width: 1200px;
  width: 100%;
  margin: -39px auto 0;
  text-align: right;

  button {
    width: auto;
    height: 39px;
    padding: 0 16px;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 300;
  }

  ${media.tablet`
    position:absolute;
    width:calc(100% - 48px);
    top:auto;
    bottom:24px;
    left:24px;
    z-index:999;
    
    button{
      height: 55px;
      font-size:18px;
      width:100%; 
    }
  `};
`;

const EditContainer = styled.div`
  position: relative;
  width: 100%;
`;

function RollingPaperEdit({ refetchPosts }) {
  const { id } = useParams(); // URL에서 ID 가져오기
  const navigate = useNavigate(); // 페이지 이동을 위한 네비게이트
  const { deleteRecipient, loading, error } = useDeleteRecipient(refetchPosts);

  const handleDelete = async () => {
    await deleteRecipient(id);
    navigate('/posts'); // 삭제 후 목록 페이지로 이동
  };

  return (
    <>
      <EditContainer>
        <RollingPaper>
          <StyledFilledButton>
            <Button onClick={handleDelete} disabled={loading}>
              {loading ? '삭제 중...' : '삭제하기'}
            </Button>
          </StyledFilledButton>
        </RollingPaper>{' '}
        {/* 기존 RollingPaper 그대로 사용 */}
        {error && <p style={{ color: 'red' }}>삭제 중 오류가 발생했습니다.</p>}
      </EditContainer>
    </>
  );
}

export default RollingPaperEdit;
