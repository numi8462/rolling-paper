import { useCallback, useEffect, useState } from 'react';
import recipientService from '../../../../api/services/recipients.services';

function useRecipient(id) {
  const [rollingPaper, setRollingPaper] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLoad = async () => {
    setLoading(true);
    try {
      const res = await recipientService.getRecipient(id);
      // console.log('res', res);
      const data = res.data;
      setRollingPaper(data);
    } catch (error) {
      console.error('Error fetching recipients:', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);

  const refetch = useCallback(() => {
    handleLoad();
  }, []);

  return { rollingPaper, loading, error, refetch };
}

export default useRecipient;
