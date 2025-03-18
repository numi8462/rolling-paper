import styled from "styled-components";
import { media } from "../../../../styles/theme";
import { RollingPaperCard } from "../RollingPaperCard/RollingPaperCard";
import { Slider } from "../../../common/Slider/Slider";


export function PaperCardList({rollingPapers, refetch}){

  const sliderSetting = {
    total: rollingPapers.length,
    columnCount: 4, // 한 줄에 표시할 카드 수
    moveLength: 1, // 버튼 클릭 시 이동할 카드 수
    gap: 20, // 카드 간격
  };

  return (
      <Slider sliderSetting={sliderSetting}>
        <PaperCardListBox>
        {rollingPapers &&
          rollingPapers.map((rollingPaper) => {
            return <RollingPaperCard key={rollingPaper.id} rollingPaper={rollingPaper} refetch={refetch}/>;
          })}
        </PaperCardListBox>
      </Slider>
  )
}


const PaperCardListBox = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  gap: 20px;

  ${media.tablet`
    padding: 0 24px;
    overflow: auto;
  `}
  ${media.mobile`
    padding: 0 20px;
  `}
> li {
  min-width:calc( 25% - 15px);
  width:calc( 25% - 15px);
  
  ${media.tablet`
    min-width:calc( 37% - 15px);
    width:calc( 37% - 15px);
  `}

  ${media.mobile`
    min-width:calc( 77% - 15px);
    width:calc( 77% - 15px);
  `}
}
`