import styled from "styled-components";
import Input from "../components/common/Input/Input";
import Navbar from "../components/common/Navbar/NavbarCore";
import { Button } from "../components/common/Button/Button";
import { theme } from "../styles/theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${theme.g[8]};
  padding: ${theme.fs.xl};
`;

const RollingPaperMaking = () => {
  return (
    <Container>
      <Navbar />
      <Input />
    </Container>
  );
};

export default RollingPaperMaking;
