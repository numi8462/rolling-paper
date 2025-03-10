import { useCallback, useEffect, useState } from 'react';
import recipientService from '../../../../api/services/recipients.services';

function useReactions(id) {
  const [reactions, setReactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLoad = async () => {
    setLoading(true);
    try {
      const res = await recipientService.getReactions(id);
      const { results } = res.data;
      setReactions(results);
    } catch (error) {
      console.error('Error fetching reactions:', error);
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

  return { reactions, loading, error, refetch };
}

export default useReactions;
