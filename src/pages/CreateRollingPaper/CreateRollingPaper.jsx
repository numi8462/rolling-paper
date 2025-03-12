import { useState, useEffect } from "react";
import styled from "styled-components";
import Input from "../../components/common/Input/Input";
import { theme } from "../../styles/theme";
import { ToggleButton } from "../../components/common/Button/ToggleButton";
import { FilledButton } from "../../components/common/Button/FilledButton";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 20px;
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

const ColorOption = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  cursor: pointer;
  background: ${(props) => props.color};
  border: 2px solid transparent;
  &:hover {
    border: 2px solid black;
  }
`;

const ImageOption = styled.img`
  width: 80px;
  height: 50px;
  border-radius: 8px;
  cursor: pointer;
  object-fit: cover;
  &:hover {
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
    <Container>
      <Label>To.</Label>
      <Input width="720px" maxWidth="1000px" />
      <h1>배경화면을 선택해 주세요.</h1>
      <ToggleButton
        tabs={["컬러", "이미지"]}
        activeTab={activeTab}
        onChange={(index) => setActiveTab(index)}
      />

      {activeTab === 0 ? (
        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          {colorOptions.map((color) => (
            <ColorOption
              key={color}
              color={color}
              onClick={() => {
                setBgColor(color);
                setBgImage(null);
              }}
            />
          ))}
        </div>
      ) : (
        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          {imageUrls.map((url) => (
            <ImageOption
              key={url}
              src={url}
              onClick={() => {
                setBgImage(url);
                setBgColor(null);
              }}
            />
          ))}
        </div>
      )}

      <FilledButton w="280">생성하기</FilledButton>
    </Container>
  );
};

export default CreateRollingPaper;
