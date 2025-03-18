import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useDeleteRecipient from '../../components/common/hooks/recipients/useDeleteRecipient';
import RollingPaper from '../RollingPaper/RollingPaper.page';
import styled from 'styled-components';
import { Button } from '../../components/common/Button/Button';
import { Font, media } from '../../styles/theme';

function FilledButtonTemp({ w, h, children, ...rest }) {
  return (
    <Button type="primary" w={w} h={h} {...rest}>
      {children}
    </Button>
  );
}



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
      <RollingPaper /> {/* 기존 RollingPaper 그대로 사용 */}
      <EditContainer>
        <StyledFilledButton
          h="32"
          w="92"
          onClick={handleDelete}
          disabled={loading}
          size="16"
        >
          {loading ? '삭제 중...' : '삭제하기'}
        </StyledFilledButton>
        {error && <p style={{ color: 'red' }}>삭제 중 오류가 발생했습니다.</p>}
      </EditContainer>
    </>
  );
}


const EditContainer = styled.div`
  position: absolute;
  top: 196px;
  right: 360px;
`;

const StyledFilledButton = styled(FilledButtonTemp)`
  height: ${({ h }) => h}px;
  border-radius: 6px;
  ${({ size }) => Font[`f${size}`]}

  ${media.tablet`
    position: absolute;
    right: 24px;
    top: 196px;
    width: auto;
  `};
`;

export default RollingPaperEdit;
