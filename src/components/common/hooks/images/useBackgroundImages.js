import { useEffect, useState } from 'react';
import backgroundImageService from '../../../../api/services/background-images.services';

function useBackgroundImages() {
  const [imgUrls, setImgUrls] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLoad = async () => {
    setLoading(true);
    try {
      const res = await backgroundImageService.getBackgroundImages();
      const data = res.data.imageUrls;
      setImgUrls(data);
    } catch (error) {
      console.error('Error fetching profile images:', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return { imgUrls, loading, error };
}

export default useBackgroundImages;
