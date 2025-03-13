import { useState, useEffect } from "react";
import Input from "../../components/common/Input/Input";
import { theme } from "../../styles/theme";
import { ToggleButton } from "../../components/common/Button/ToggleButton";
import { FilledButton } from "../../components/common/Button/FilledButton";
import Icon from "../../assets/Icons/Icons";
import { Link } from "react-router-dom";
import useCreateRecipient from "../../components/common/hooks/recipients/useCreateRecipient";
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
  SelectContainer,
} from "./components/CreateRollingPageStyleComponents";

const colorOptions = [
  theme.colors.beige[200],
  theme.colors.purple[200],
  theme.colors.blue[200],
  theme.colors.green[200],
];

const CreateRollingPaper = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [bgColor, setBgColor] = useState(colorOptions[0]);
  const [bgImage, setBgImage] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [toValue, setToValue] = useState("");
  const { data, createRecipient } = useCreateRecipient();

  useEffect(() => {
    fetch("https://rolling-api.vercel.app/background-images/")
      .then((res) => res.json())
      .then((data) => {
        setImageUrls(data.imageUrls);
      })
      .catch((err) => console.error("이미지 불러오기 실패:", err));
  }, []);

  useEffect(() => {
    if (activeTab === 0) {
      setBgColor(colorOptions[0]);
      setBgImage(null);
    } else if (activeTab === 1 && imageUrls.length > 0) {
      setBgImage(imageUrls[0]);
      setBgColor(null);
    }
  }, [activeTab, imageUrls]);

  const handleCreate = async () => {
    if (!toValue.trim()) return;

    const body = {
      recipient: toValue,
      backgroundColor: bgColor,
      backgroundImage: bgImage,
    };

    await createRecipient(body);
  };

  return (
    <Wrapper>
      <Container>
        <ToInputContainer>
          <Toh1>To.</Toh1>
          <Input
            width="720px"
            maxWidth="1000px"
            placeholder="받는 사람 이름을 입력해 주세요"
            value={toValue}
            onChange={(e) => setToValue(e.target.value)}
          />
        </ToInputContainer>

        <SelectContainer>
          <h2>배경화면을 선택해 주세요.</h2>
          <CustomP>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</CustomP>
        </SelectContainer>

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

        {data?.id ? (
          <Link to={`/post/${data.id}`}>
            <FilledButton w="720">생성하기</FilledButton>
          </Link>
        ) : (
          <FilledButton
            w="720"
            onClick={handleCreate}
            disabled={!toValue.trim()}
          >
            생성하기
          </FilledButton>
        )}
      </Container>
    </Wrapper>
  );
};

export default CreateRollingPaper;
