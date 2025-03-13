import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

export const ToInputContainer = styled.div`
  margin: 57px 0px 50px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 60%;
  max-width: 800px;
  ${theme.fonts.pd}
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
  background: ${(props) =>
    props.bgImage ? `url(${props.bgImage})` : props.bgColor};
  background-size: cover;
  background-position: center;
`;
export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10px;
`;

export const ColorOption = styled.div`
  width: 168px;
  height: 168px;
  border-radius: 8px;
  cursor: pointer;
  background: ${(props) => props.color};
  border: 2px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &:hover,
  &.selected {
    border: 2px solid black;
  }
`;

export const ImageOption = styled.img`
  width: 168px;
  height: 168px;
  border-radius: 8px;
  cursor: pointer;
  object-fit: cover;
  position: relative;
  transition: all 0.3s ease-in-out;

  &:hover,
  &.selected {
    border: 2px solid black;
  }

  &.selected {
    filter: brightness(0.5);
    opacity: 0.6;
  }
`;

export const ImageOptionContainer = styled.div`
  position: relative;
  display: inline-block;
`;
