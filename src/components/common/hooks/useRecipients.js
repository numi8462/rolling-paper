import { useEffect, useState } from 'react';
import recipientService from '../../../api/services/recipients.services';

function useRecipients() {
  const [rollingPapers, setRollingPapers] = useState();

  async function getRecipients() {
    const res = await recipientService.getRecipients();
    const { results } = res.data;
    return results;
  }

  useEffect(() => {
    const handleLoad = async () => {
      try {
        const results = await getRecipients();
        setRollingPapers(results);
      } catch (error) {
        console.error('Error fetching recipients:', error);
      }
    };
    handleLoad();
  }, []);

  return { rollingPapers };
}

export default useRecipients;
