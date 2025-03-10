import { useEffect, useState } from 'react';
import profileImageService from '../../../../api/services/profile-images.services';

function useProfileImages() {
  const [imgUrls, setImgUrls] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLoad = async () => {
    setLoading(true);
    try {
      const res = await profileImageService.getProfileImages();
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

export default useProfileImages;
