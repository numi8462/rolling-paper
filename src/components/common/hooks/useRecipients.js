import { useEffect, useState } from 'react';
import recipientService from '../../../api/services/recipients.services';

function useRecipients() {
  const [rollingPapers, setRollingPapers] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleLoad = async () => {
      setLoading(true);
      try {
        const res = await recipientService.getRecipients();
        const { results } = res.data;
        setRollingPapers(results);
      } catch (error) {
        console.error('Error fetching recipients:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    handleLoad();
  }, []);

  return { rollingPapers, loading, error };
}

export default useRecipients;
