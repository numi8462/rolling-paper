import { useEffect, useState } from 'react';
import recipientService from '../../../api/services/recipients.services';

function useRecipients() {
  const [rollingPapers, setRollingPapers] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getRecipients() {
    const res = await recipientService.getRecipients();
    const { results } = res.data;
    return results;
  }

  useEffect(() => {
    const handleLoad = async () => {
      setLoading(true);
      try {
        const results = await getRecipients();
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
