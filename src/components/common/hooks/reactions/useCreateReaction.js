import { useCallback, useState } from 'react';
import recipientService from '../../../../api/services/recipients.services';

function useCreateReaction(refetch) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createReaction = useCallback(async (id, body) => {
    setLoading(true);
    try {
      const res = await recipientService.createReaction(id, body);
      setData(res.data);
      console.log('res', res);
      if (refetch) {
        refetch();
      }
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, createReaction };
}

export default useCreateReaction;
