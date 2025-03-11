import styled from "styled-components";
import Input from "../../components/common/Input/Input";
import { theme } from "../../styles/theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${theme.g[8]};
  padding: ${theme.fs.xl};
`;

const CreateRollingPaper = () => {
  return (
    <Container>
      <label>To.</label>
      <Input width="720px" maxWidth="1000px" />
      배경화면을 선택해 주세요
    </Container>
  );
};

export default CreateRollingPaper;
