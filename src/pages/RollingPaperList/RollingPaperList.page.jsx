import React, { useEffect } from 'react';
import useRecipients from '../../components/common/hooks/useRecipients';
import useDeleteRecipient from '../../components/common/hooks/useDeleteRecipient';
import useCreateRecipient from '../../components/common/hooks/useCreateRecipient';

function RollingPaperList() {
  const { rollingPapers, loading, error, refetch } = useRecipients();
  const { createRecipient } = useCreateRecipient(refetch);
  const { deleteRecipient } = useDeleteRecipient(refetch);

  if (rollingPapers) {
    console.log(rollingPapers);
  }

  const handleCreate = async () => {
    await createRecipient({
      team: '14-7',
      name: '코드잇',
      backgroundColor: 'beige',
      backgroundImageURL: null,
    });
  };

  const handleDelete = async () => {
    await deleteRecipient(10466);
  };

  return (
    <div>
      RollingPaperList
      <button onClick={handleDelete}>삭제</button>
      <button onClick={handleCreate}>만들기</button>
      <ul>
        {rollingPapers &&
          rollingPapers.map((rollingPaper) => {
            return (
              <li key={rollingPaper.id}>
                {rollingPaper.id}
                {rollingPaper.name}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default RollingPaperList;
