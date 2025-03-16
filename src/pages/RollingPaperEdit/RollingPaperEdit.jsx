import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useDeleteRecipient from '../../components/common/hooks/recipients/useDeleteRecipient';
import { FilledButton } from '../../components/common/Button/FilledButton';
import RollingPaper from '../RollingPaper/RollingPaper.page';
import styled from 'styled-components';

const EditContainer = styled.div`
  position: absolute;
  top: 196px;
  right: 360px;
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
      <RollingPaper /> {/* 기존 RollingPaper 그대로 사용 */}
      <EditContainer>
        <FilledButton w="92" h="32" onClick={handleDelete} disabled={loading}>
          {loading ? '삭제 중...' : '삭제하기'}
        </FilledButton>
        {error && <p style={{ color: 'red' }}>삭제 중 오류가 발생했습니다.</p>}
      </EditContainer>
    </>
  );
}

export default RollingPaperEdit;
