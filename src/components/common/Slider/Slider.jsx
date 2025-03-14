import styled from "styled-components";
import ArrowButton from "../Button/ArrowButton";
import { media } from "../../../styles/theme";
import { useSlider } from "../hooks/slider/useSlider";

export function Slider({ sliderSetting, children }) {
  // 커스텀 훅에서 슬라이더 로직 가져오기
  const { sliderRef, currentIndex, handleArrowClick } = useSlider(sliderSetting);

  return (
    <SliderBox>
      <SliderWrapper ref={sliderRef}>
        {children}
      </SliderWrapper>

      {sliderSetting.total === 0 ? null : (
        <ArrowButtonWrap>
          {currentIndex === 0 ? null : (
            <ArrowButton
              direction="left"
              style={{ left: "-20px" }}
              onClick={() => handleArrowClick("left")}
            />
          )}
          {currentIndex === sliderSetting.total - sliderSetting.columnCount ? null : (
            <ArrowButton
              direction="right"
              style={{ right: "-20px" }}
              onClick={() => handleArrowClick("right")}
            />
          )}
        </ArrowButtonWrap>
      )}
    </SliderBox>
  );
}

const SliderBox = styled.div`
  width: 100%;
  position: relative;
`;

const SliderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  overflow: hidden;
  scroll-behavior: smooth;
`;

const ArrowButtonWrap = styled.div`
  width: 100%;
  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 3;
    ${media.tablet`
      display: none;
    `}
  }
`;
