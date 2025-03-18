import styled from 'styled-components';
import { media, theme } from '../../../styles/theme';
import { FilledButton } from '../../../components/common/Button/FilledButton';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 720px;
  margin: 0 auto;

  ${media.mobile`
    max-width: 320px;
  `}
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

export const Toh1 = styled.h1`
  ${theme.fs.xxl};
  ${theme.fonts.pd}
  font-weight: 700;
  line-height: 42px;
  letter-spacing: -1%;
  margin: 0px 0px 12px;
`;

export const CustomP = styled.p`
  font-weight: 400;
  font-size: 16px;
  letter-spacing: -1%;
  color: ${theme.colors.gray[500]};
`;

export const BackgroundContainer = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props =>
    props.bgImage ? `url(${props.bgImage})` : props.bgColor};
  background-size: cover;
  background-position: center;
`;
export const OptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  justify-content: center;
  margin: 45px 0;

  ${media.tablet`
    margin-bottom: 150px;
  `}

  ${media.mobile`
    grid-template-columns: repeat(2, 1fr);
    gap: 12px; 
  `};
`;

export const ColorOption = styled.div`
  width: 100%;
  height: 168px;
  border-radius: 16px;
  border: 1px solid #00000014;
  cursor: pointer;
  background: ${props => props.color};
  display: flex;
  position: relative;
  &:hover {
    border: 2px solid black;
  }
  &.selected {
    border: none;
  }
  ${media.mobile`
      width: 154px;
      height: 154px;
      `}
`;

export const ImageOption = styled.img`
  width: 168px;
  height: 168px;
  border-radius: 8px;
  cursor: pointer;
  object-fit: cover;

  &:hover {
    border: 2px solid black;
  }

  &.selected {
    border: none;
  }

  &.selected {
    filter: brightness(0.5);
    opacity: 0.6;
  }
  ${media.mobile`
      width: 154px;
      height: 154px;
      `}
`;

export const ImageOptionContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const SelectContainer = styled.div`
  margin: 0px;
  margin-bottom: 24px;
`;

export const ToInputContainer = styled.div`
  margin-top: 57px;
  margin-bottom: 50px;
`;

export const ButtonContainer = styled.div`
  margin: 24px;
`;

export const CreateButton = styled(FilledButton)`
  z-index: 999;
  @media (min-width: ${theme.breakpoints.t}) {
    margin-bottom: 100px;
  }
`;
