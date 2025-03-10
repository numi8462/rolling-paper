import { useCallback, useState } from 'react';
import recipientService from '../../../../api/services/recipients.services';

function useDeleteRecipient(refetch) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteRecipient = useCallback(
    async (id) => {
      setLoading(true);
      try {
        await recipientService.deleteRecipient(id);
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

  return { deleteRecipient, loading, error };
}

export default useDeleteRecipient;
