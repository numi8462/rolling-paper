import styled from "styled-components";
import Input from "../../components/common/Input/Input";
import { theme } from "../../styles/theme";
import { Button } from "../../components/common/Button/Button";

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

const CreateRollingPaper = () => {
  return (
    <Container>
      <Label>To.</Label>
      <Input width="720px" maxWidth="1000px" />
      <h1>배경화면을 선택해 주세요.</h1>
      컬러를 선택하거나, 이미지를 선택할 수 있습니다.
      <button> 컬러/이미지</button>
      이미지 선택기능
      <Button />
    </Container>
  );
};

export default CreateRollingPaper;
