import { useState, useEffect } from "react";
import Input from "../../components/common/Input/Input";
import { theme } from "../../styles/theme";
import { ToggleButton } from "../../components/common/Button/ToggleButton";
import { FilledButton } from "../../components/common/Button/FilledButton";
import Icon from "../../assets/Icons/Icons";
import {
  Wrapper,
  IconWrapper,
  ToInputContainer,
  Container,
  Toh1,
  CustomP,
  OptionsContainer,
  ColorOption,
  ImageOption,
  ImageOptionContainer,
} from "./components/CreateRollingPageStyleComponents";
const CreateRollingPaper = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [bgColor, setBgColor] = useState(theme.colors.beige[200]); // 기본 색상
  const [bgImage, setBgImage] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const colorOptions = [
    theme.colors.beige[200],
    theme.colors.purple[200],
    theme.colors.blue[200],
    theme.colors.green[200],
  ]; // 임의의 색상들

  useEffect(() => {
    fetch("https://rolling-api.vercel.app/background-images/")
      .then((res) => res.json())
      .then((data) => setImageUrls(data.imageUrls))
      .catch((err) => console.error("이미지 불러오기 실패:", err));
  }, []);

  return (
    <Wrapper>
      <Container>
        <ToInputContainer>
          <Toh1>To.</Toh1>
          <Input width="720px" maxWidth="1000px" />
        </ToInputContainer>
        <h2>배경화면을 선택해 주세요.</h2>
        <CustomP>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</CustomP>
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
              >
                {bgColor === color && (
                  <IconWrapper>
                    <Icon name="checkIcon" size="44px" />
                  </IconWrapper>
                )}
              </ColorOption>
            ))}
          </OptionsContainer>
        ) : (
          <OptionsContainer>
            {imageUrls.map((url) => (
              <ImageOptionContainer key={url}>
                <ImageOption
                  src={url}
                  className={bgImage === url ? "selected" : ""}
                  onClick={() => {
                    setBgImage(url);
                    setBgColor(null);
                  }}
                />
                {bgImage === url && (
                  <IconWrapper>
                    <Icon name="checkIcon" size="44px" />
                  </IconWrapper>
                )}
              </ImageOptionContainer>
            ))}
          </OptionsContainer>
        )}

        <FilledButton w="720">생성하기</FilledButton>
      </Container>
    </Wrapper>
  );
};

export default CreateRollingPaper;
