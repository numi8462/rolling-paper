import Logo from '../../../assets/icons/🎨 Icon Color.svg';
import { useNavigate, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Button } from '../Button/Button';
import { Container } from '../../../styles/theme';
import { useEffect, useState } from 'react';

const BREAK_POINT = {
  mobile: 360, // 변경된 부분
  tablet: 1248,
};

const NavbarWrapper = styled.header`
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  padding: 11px 0px;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;

  div {
    display: flex;
    justify-content: space-between;
  }
  align-items: center;
  padding: 11px 0px;

  background-color: white;
  border-bottom: 1px solid #ededed;

  @media (max-width: ${BREAK_POINT.tablet}px) {
    padding: 11px 0;
    margin: 0;
  }

  ${props =>
    props.hideOnMobile &&
    css`
      display: none;
    `}

  @media (max-width: ${BREAK_POINT.mobile}px) {
    ${props =>
      !props.showOnMobile &&
      css`
        display: none;
      `}
  }
`;

const RollingLogo = styled.div`
  box-sizing: border-box;
  width: 106px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const LogoText = styled.span`
  font-family: 'Poppins', sans-serif;
  font-size: 19.97px;
  font-weight: 700;
  line-height: 29.96px;
  text-align: center;
  margin-left: 8px;
  color: #4A494F;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: ${BREAK_POINT.tablet}px) {
    gap: 12px;
  }

  @media (max-width: ${BREAK_POINT.mobile}px) {
    gap: 8px;
  }
`;

const RollingHeader = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <RollingLogo onClick={handleLogoClick}>
      <img
        src={Logo}
        alt="Logo"
        style={{ width: '27.82px', height: '27.66px' }}
      />
      <LogoText>Rolling</LogoText>
    </RollingLogo>
  );
};

const MakingRollingPaper = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleMakingClick = () => navigate('post');

  if (!['/', '/list'].includes(location.pathname)) {
    return null;
  }

  return (
    <ButtonContainer onClick={handleMakingClick}>
      <Button type="outlined" w="157" h="40">
        롤링 페이퍼 만들기
      </Button>
    </ButtonContainer>
  );
};

export default function Navbar() {
  const location = useLocation();
  const [showOnMobile, setShowOnMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowOnMobile(
        !window.location.pathname.includes('/post/') &&
          !window.location.pathname.includes('/edit/') &&
          !window.location.pathname.includes('/post')
      );
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [location.pathname]);

  const hideOnMobile =
    window.innerWidth <= BREAK_POINT.mobile &&
    !['/', '/list'].includes(location.pathname);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= BREAK_POINT.mobile);
//   const [currentPath, setCurrentPath] = useState(location.pathname);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= BREAK_POINT.mobile);
//     };

//     const handleLocationChange = () => {
//       setCurrentPath(location.pathname);
//     };

//     // 화면 크기 변경 시 감지
//     window.addEventListener('resize', handleResize);

//     // 페이지 경로 변경 시 감지
//     window.addEventListener('popstate', handleLocationChange); // 페이지 뒤로가기, 앞으로가기

//     // 초기 경로 설정
//     setCurrentPath(location.pathname);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//       window.removeEventListener('popstate', handleLocationChange);
//     };
//   }, []);

//   // 모바일 크기일 때 '/post' 경로가 포함되면 Navbar 숨기기
//   if (isMobile && currentPath.includes('/post')) {
//     return null;
//   }

  return (
    <NavbarWrapper showOnMobile={showOnMobile} hideOnMobile={hideOnMobile}>
      <Container>
        <RollingHeader />
        <MakingRollingPaper />
      </Container>
    </NavbarWrapper>
  );
}
