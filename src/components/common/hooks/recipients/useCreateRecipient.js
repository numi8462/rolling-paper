import { useCallback, useState } from 'react';
import recipientService from '../../../../api/services/recipients.services';

function useCreateRecipient(refetch) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createRecipient = useCallback(async (body) => {
    setLoading(true);
    try {
      const res = await recipientService.createRecipient(body);
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

  return { data, loading, error, createRecipient };
}

export default useCreateRecipient;
