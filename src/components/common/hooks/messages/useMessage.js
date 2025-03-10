import { useCallback, useEffect, useState } from 'react';
import messageService from '../../../../api/services/messages.services';

function useMessage(id) {
  const [message, setMessage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLoad = async () => {
    setLoading(true);
    try {
      const res = await messageService.getMessage(id);
      console.log('res', res);
      const data = res.data;
      setMessage(data);
    } catch (error) {
      console.error('Error fetching message:', error);
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

  return { message, loading, error, refetch };
}

export default useMessage;
