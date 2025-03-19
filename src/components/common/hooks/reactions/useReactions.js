import { useCallback, useEffect, useState } from 'react';
import recipientService from '../../../../api/services/recipients.services';

function useReactions(id) {
  const [reactions, setReactions] = useState([]);
  const [totalCount, setTotalCount] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLoad = async () => {
    setLoading(true);
    try {
      const res = await recipientService.getReactions(id);
      const { results } = res.data;
      setReactions(results);
      calculateTotalCount(results);
    } catch (error) {
      console.error('Error fetching reactions:', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const calculateTotalCount = reactionsArray => {
    if (!reactionsArray) {
      setTotalCount(0); // Ensure total count is 0 if reactionsArray is undefined or null
      return;
    }
    let total = 0;
    reactionsArray.forEach(reaction => {
      if (reaction && typeof reaction.count === 'number') {
        total += reaction.count;
      }
    });

    setTotalCount(total);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  const refetch = useCallback(() => {
    handleLoad();
  }, []);

  return { reactions, totalCount, loading, error, refetch };
}

export default useReactions;
