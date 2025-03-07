import React from 'react';
import styled, { keyframes } from 'styled-components';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { IoMdClose } from 'react-icons/io';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(20px); }
`;

const ToastContainer = styled.div`
  width: 524px;
  position: fixed;
  bottom: 20px;
  background-color: #000000cc;
  color: white;
  padding: 20px 30px;
  border-radius: 8px;
  z-index: 9999;
  display: flex;
  align-items: center;
  animation: ${fadeIn} 0.3s ease-out, ${fadeOut} 0.3s ease-in 2.7s forwards;
`;

const CheckIcon = styled(RiCheckboxCircleFill)`
  font-size: 24px;
  margin-right: 10px;
  color: #4caf50;
`;

const CloseIcon = styled(IoMdClose)`
  font-size: 20px;
  margin-left: auto;
  cursor: pointer;
`;

function Toast({ message, onClose }) {
  return (
    <ToastContainer>
      <CheckIcon />
      <span>{message}</span>
      <CloseIcon onClick={onClose} />
    </ToastContainer>
  );
}

export default Toast;
