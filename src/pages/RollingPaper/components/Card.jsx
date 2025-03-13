import styled, { css } from 'styled-components';
import { Font, theme } from '../../../styles/theme';

const Card = {
  Container: styled.div`
    width: 100%;
    height: 280px;
    display: flex;
    align-items: start;
    flex-direction: column;
    background-color: ${theme.colors.basic.white};
    padding: 24px;
    border-radius: 16px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }

    @media (max-width: ${theme.breakpoints.m}) {
      max-height: 230px;
    }
  `,
  InfoBox: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 14px;
    padding-bottom: 15px;
    border-bottom: 1px solid ${theme.colors.gray[200]};
  `,
  ProfileImg: styled.img`
    width: 56px;
    height: 56px;
    border-radius: 100px;
    border: 1px solid ${theme.colors.gray[200]};
  `,
  SenderInfoBox: styled.div`
    height: 56px;
    min-width: 110px;
    display: flex;
    flex: 1 1 auto;
    align-items: start;
    flex-direction: column;
    gap: 6px;
  `,
  Sender: styled.div`
    ${Font.f20};
  `,
  Name: styled.h2`
    ${Font.f20};
    margin-left: 6px;
  `,
  MessageBox: styled.div`
    width: 100%;
    height: ${(props) => (props.$modal ? '256px' : '110px')};
    flex: 1 1 auto;
    margin: 16px 0;
    ${Font.f18};
    color: ${theme.colors.gray[600]};
    ${(props) => theme.fonts[props.$font]};

    @media (max-width: ${theme.breakpoints.m}) {
      height: 56px;
    }

    ${(props) =>
      props.$modal &&
      css`
        overflow-y: scroll;
        scrollbar-width: thin;
        scrollbar-color: ${theme.colors.gray[200]} #fff;
      `}
  `,
  Message: styled.p`
    ${(props) =>
      props.$limit &&
      css`
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;

        @media (max-width: ${theme.breakpoints.m}) {
          -webkit-line-clamp: 2;
        }
      `}
  `,
  Date: styled.span`
    ${Font.f12};
    color: ${theme.colors.gray[400]};
  `,
};

export default Card;
