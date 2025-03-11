import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Input from "../components/common/Input/Input";
import Navbar from "../components/common/Navbar/NavbarCore";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => (props.disabled ? "#ccc" : "#007bff")};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const ColorPicker = styled.select`
  padding: 10px;
  border-radius: 5px;
`;

const FileInput = styled.input``;

const RollingPaperForm = () => {
  const handleSubmit = () => {
    if (recipient.trim()) {
      const id = Math.floor(Math.random() * 1000);
      navigate(`/post/${id}`);
    }
  };

  return (
    <Container>
      <Navbar />
      <Input />

      <ColorPicker onChange={(e) => setColor(e.target.value)}>
        <option value="#ffffff">화이트</option>
        <option value="#ffcccb">핑크</option>
        <option value="#add8e6">블루</option>
      </ColorPicker>

      <FileInput
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <Button onClick={handleSubmit} disabled={!recipient.trim()}>
        생성하기
      </Button>
    </Container>
  );
};

export default RollingPaperForm;
