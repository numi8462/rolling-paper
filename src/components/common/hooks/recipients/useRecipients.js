import { useCallback, useEffect, useState } from 'react';
import recipientService from '../../../../api/services/recipients.services';

function useRecipients( limit = 10000, offset = 0) {
  const [rollingPapers, setRollingPapers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLoad = async () => {
    setLoading(true);
    try {
      const res = await recipientService.getRecipients(limit, offset);
      const { results } = res.data;
      setRollingPapers(results);
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

  return { rollingPapers, loading, error, refetch };
}

export default useRecipients;
