import React from 'react';
import { Container, Font, theme } from '../../styles/theme';
import styled, { css } from 'styled-components';
import Point1Img from '../../assets/Images/point1.png';
import Point2Img from '../../assets/Images/point2.png';
import { FilledButton } from '../../components/common/Button/FilledButton';
import { Link } from 'react-router-dom';

const S = {
  Homepage: styled.div`
    width: 100%;
    ${theme.center};
    flex-direction: column;
    padding: 30px 0 152px;
  `,

  Section: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: ${theme.colors.purple[100]};
    border-radius: 16px;
    margin-top: 30px;
    padding: 60px 0;

    @media (max-width: ${theme.breakpoints.m}) {
      flex-direction: column;
      padding: 40px 0;
      ${(props) =>
        props.$reverse &&
        css`
          flex-direction: column-reverse;
        `}
    }

    @media (max-width: ${theme.breakpoints.min}) {
      flex-direction: column;
      padding: 24px 0;
      ${(props) =>
        props.$reverse &&
        css`
          flex-direction: column-reverse;
        `}
    }
  `,

  InfoBox: styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    padding-left: 60px;
    ${(props) =>
      props.$right &&
      css`
        padding-left: 0;
        padding-right: 60px;
      `}

    @media (max-width: ${theme.breakpoints.m}) {
      width: 100%;
      padding: 0 40px;
      margin-bottom: 36px;
    }

    @media (max-width: ${theme.breakpoints.min}) {
      padding: 0 24px;
      margin-bottom: 50px;
    }
  `,

  Point: styled.div`
    width: 82px;
    color: ${theme.colors.basic.white};
    background-color: ${theme.colors.purple[500]};
    ${theme.p[6][12]};
    border-radius: 50px;
    font-weight: 700;
    ${theme.fs.xs};
    margin-bottom: 16px;
  `,

  Title: styled.h2`
    ${theme.fs.xxl};
    font-weight: 700;
    line-height: 36px;
    letter-spacing: -1%;
    color: ${theme.colors.gray[900]};
  `,

  Break: styled.br`
    @media (max-width: ${theme.breakpoints.m}) {
      display: none;
    }
  `,

  Description: styled.p`
    font-weight: 400;
    ${Font.f18};
    color: ${theme.colors.gray[500]};
  `,

  ImageContainer: styled.div`
    flex: 0 1 auto;
  `,

  Image: styled.img`
    width: 100%;
    height: auto;
    max-width: 720px;
  `,

  ButtonContainer: styled.div`
    width: 280px;
    margin-top: 48px;
  `,
};

function Homepage() {
  return (
    <Container>
      <S.Homepage>
        <S.Section>
          <S.InfoBox>
            <S.Point>Point. 01</S.Point>
            <S.Title>
              누구나 손쉽게, 온라인 <S.Break /> 롤링 페이퍼를 만들 수 있어요
            </S.Title>
            <S.Description>로그인 없이 자유롭게 만들어요.</S.Description>
          </S.InfoBox>
          <S.ImageContainer>
            <S.Image src={Point1Img} alt="cards image" />
          </S.ImageContainer>
        </S.Section>

        <S.Section $reverse={true}>
          <S.ImageContainer>
            <S.Image src={Point2Img} alt="cards image" />
          </S.ImageContainer>
          <S.InfoBox $right={true}>
            <S.Point>Point. 02</S.Point>
            <S.Title>
              서로에게 이모지로 감정을 <S.Break /> 표현해보세요
            </S.Title>
            <S.Description>
              롤링 페이퍼에 이모지를 추가할 수 있어요.
            </S.Description>
          </S.InfoBox>
        </S.Section>

        <S.ButtonContainer>
          <Link to="/list">
            <FilledButton>구경해보기</FilledButton>
          </Link>
        </S.ButtonContainer>
      </S.Homepage>
    </Container>
  );
}

export default Homepage;
