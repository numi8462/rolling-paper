import { useEffect } from 'react';

function useKakaoShare(name, messageCount, totalCount) {
  useEffect(() => {
    const kakaoApiKey = import.meta.env.VITE_KAKAO_API_KEY;
    if (window.Kakao) {
      const Kakao = window.Kakao;
      if (!Kakao.isInitialized()) {
        try {
          Kakao.init(kakaoApiKey);
          console.log('Kakao SDK initialized successfully.');
        } catch (error) {
          console.error('Failed to initialize Kakao SDK:', error);
        }
      }
    } else {
      console.error(
        'Kakao SDK not found. Make sure to include it in your index.html'
      );
    }
  }, []);

  const shareKakao = () => {
    if (window.Kakao) {
      const Kakao = window.Kakao;
      try {
        Kakao.Share.sendDefault({
          objectType: 'feed',
          content: {
            title: `To. ${name}`,
            description: '#롤링페이퍼',
            imageUrl: 'https://i.ibb.co/4nWxMgXj/image.png',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
          social: {
            likeCount: totalCount || 0,
            commentCount: messageCount || 0,
          },
          buttons: [
            {
              title: '웹으로 보기',
              link: {
                mobileWebUrl: window.location.href,
                webUrl: window.location.href,
              },
            },
            {
              title: '앱으로 보기',
              link: {
                mobileWebUrl: window.location.href,
                webUrl: window.location.href,
              },
            },
          ],
        });
      } catch (error) {
        console.error('Failed to share via Kakao:', error);
      }
    }
  };

  return shareKakao;
}

export default useKakaoShare;
