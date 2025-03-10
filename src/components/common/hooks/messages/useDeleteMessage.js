import { useCallback, useState } from 'react';
import messageService from '../../../../api/services/messages.services';

function useDeleteMessage(refetch) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteMessage = useCallback(
    async (id) => {
      setLoading(true);
      try {
        await messageService.deleteMessage(id);
        if (refetch) {
          refetch();
        }
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    },
    [refetch]
  );

  return { deleteMessage, loading, error };
}

export default useDeleteMessage;
