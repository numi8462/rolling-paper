import { useState, useEffect } from "react";
import styled from "styled-components";
import Input from "../../components/common/Input/Input";
import { theme } from "../../styles/theme";
import { ToggleButton } from "../../components/common/Button/ToggleButton";
import { FilledButton } from "../../components/common/Button/FilledButton";

const Wrapper = styled.div`
  display: flex;
  justify-content: center; /* 전체 페이지 기준 중앙 정렬 */
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 왼쪽 정렬 */
  gap: 16px;
  padding: 20px;
  width: 60%;
  max-width: 800px; /* 최대 너비 제한 */
`;

const Label = styled.label`
  font-size: ${theme.fs.l};
  margin-bottom: 8px;
`;

const BackgroundContainer = styled.div`
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
const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10px;
`;

const ColorOption = styled.div`
  width: 168px;
  height: 168px;
  border-radius: 8px;
  cursor: pointer;
  background: ${(props) => props.color};
  border: 2px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover,
  &.selected {
    border: 2px solid black;
  }
`;

const ImageOption = styled.img`
  width: 168px;
  height: 168px;
  border-radius: 8px;
  cursor: pointer;
  object-fit: cover;
  &:hover,
  &.selected {
    border: 2px solid black;
  }
`;

const CreateRollingPaper = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [bgColor, setBgColor] = useState("#FFD700"); // 기본 색상
  const [bgImage, setBgImage] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const colorOptions = ["#FFD700", "#FF4500", "#1E90FF", "#32CD32"]; // 임의의 색상들

  useEffect(() => {
    fetch("https://rolling-api.vercel.app/background-images/")
      .then((res) => res.json())
      .then((data) => setImageUrls(data.imageUrls))
      .catch((err) => console.error("이미지 불러오기 실패:", err));
  }, []);

  return (
    <Wrapper>
      <Container>
        <Label>To.</Label>
        <Input width="720px" maxWidth="1000px" />
        <h2>배경화면을 선택해 주세요.</h2>
        <p>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
        <ToggleButton
          tabs={["컬러", "이미지"]}
          activeTab={activeTab}
          onChange={(index) => setActiveTab(index)}
        />

        {activeTab === 0 ? (
          <OptionsContainer>
            {colorOptions.map((color) => (
              <ColorOption
                key={color}
                color={color}
                className={bgColor === color ? "selected" : ""}
                onClick={() => {
                  setBgColor(color);
                  setBgImage(null);
                }}
              />
            ))}
          </OptionsContainer>
        ) : (
          <OptionsContainer>
            {imageUrls.slice(0, 4).map((url) => (
              <ImageOption
                key={url}
                src={url}
                className={bgImage === url ? "selected" : ""}
                onClick={() => {
                  setBgImage(url);
                  setBgColor(null);
                }}
              />
            ))}
          </OptionsContainer>
        )}

        <FilledButton w="720">생성하기</FilledButton>
      </Container>
    </Wrapper>
  );
};

export default CreateRollingPaper;
