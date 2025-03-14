import styled from "styled-components";
import { media } from "../../../../styles/theme";
import { RollingPaperCard } from "../RollingPaperCard/RollingPaperCard";
import { useRef, useState } from "react";
import ArrowButton from "../../../common/Button/ArrowButton";


export function PaperCardList({rollingPapers}){
  
  const [currentIndex, setCurrentIndex] = useState(0); 
  const sliderRef = useRef(null); 

  const sliderSetting = {
    total:rollingPapers.length,
    columnCount: 4,
    moveLength: 1,
    gap:20,
  }
  
  const handleArrowClick = (direction) => {
    const newIndex = direction === 'left' 
      ? Math.max(currentIndex - sliderSetting.moveLength, 0)
      : Math.min(currentIndex + sliderSetting.moveLength, sliderSetting.total - sliderSetting.columnCount);
    
    setCurrentIndex(newIndex);
    sliderRef.current.scrollLeft = newIndex * (sliderRef.current.offsetWidth / sliderSetting.columnCount + sliderSetting.gap / 4 );
  };

  return (
    <PaperCardListBox>
      <SliderWrapper ref={sliderRef}>
        {rollingPapers &&
          rollingPapers.map((rollingPaper) => {
            return <RollingPaperCard key={rollingPaper.id} rollingPaper={rollingPaper} />;
          })}
      </SliderWrapper>
      { sliderSetting.total === 0 ? null : 
        <ArrowButtonWrap>
          { currentIndex === 0 ?  null 
          : 
          <ArrowButton 
            direction="left" 
            style={{left: '-20px'}} 
            onClick={() => handleArrowClick('left')} 
          />}
          { currentIndex === sliderSetting.total - sliderSetting.columnCount ?  null 
          :
            <ArrowButton 
              direction="right" 
              style={{right: '-20px'}} 
              onClick={() => handleArrowClick('right')} 
            />
          }
        </ArrowButtonWrap>
      }
    </PaperCardListBox>
  )
}


const PaperCardListBox = styled.div`
  width: 100%;
  position: relative;
  
`
const SliderWrapper = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  overflow: hidden;  
  gap:20px;
  scroll-behavior: smooth;
  
  ${media.tablet`
    padding:0 24px;
    overflow: auto;
  `}
  ${media.mobile`
    padding:0 20px;
  `}

  > li {
    min-width:calc( 25% - 15px);
    width:calc( 25% - 15px);
    
    ${media.tablet`
      min-width:calc( 37% - 15px);
      width:calc( 37% - 15px);
    `}

    ${media.mobile`
      min-width:calc( 60% - 15px);
      width:calc( 60% - 15px);
    `}
  }
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
      display:none;
    `}
  }

`;