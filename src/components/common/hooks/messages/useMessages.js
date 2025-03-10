import { useCallback, useEffect, useState } from 'react';
import recipientService from '../../../../api/services/recipients.services';

function useMessages(id) {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLoad = async () => {
    setLoading(true);
    try {
      const res = await recipientService.getMessages(id);
      const { results } = res.data;
      setMessages(results);
    } catch (error) {
      console.error('Error fetching messages:', error);
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

  return { messages, loading, error, refetch };
}

export default useMessages;
