import { useEffect } from 'react';
import logo from '../../../../assets/Images/logo.png';

function useKakaoShare(name) {
  useEffect(() => {
    const kakaoApiKey = import.meta.env.VITE_KAKAO_API_KEY; // 환경 변수 이름 수정
    if (window.Kakao) {
      console.log('window');
      const Kakao = window.Kakao;
      if (!Kakao.isInitialized()) {
        Kakao.init(kakaoApiKey);
      }
    }
  }, []);

  const shareKakao = () => {
    if (window.Kakao) {
      const Kakao = window.Kakao;
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
          likeCount: 286,
          commentCount: 45,
          sharedCount: 845,
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
    }
  };

  return shareKakao;
}

export default useKakaoShare;
