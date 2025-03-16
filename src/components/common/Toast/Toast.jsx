import React from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '../../../styles/theme';
import Icon from '../../../assets/Icons/Icons';

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
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  position: fixed;
  bottom: 20px;
  background-color: #000000cc;
  color: ${theme.colors.basic.white};
  ${theme.p[20][30]};
  border-radius: 8px;
  z-index: 9999;
  animation: ${fadeIn} 0.3s ease-out, ${fadeOut} 0.3s ease-in 2.7s forwards;

  @media (max-width: ${theme.breakpoints.m}) {
    width: 320px;
  }
`;

const Message = styled.div`
  width: 100%;
`;

const Close = styled.div`
  cursor: pointer;
`;

function Toast({ message, onClose }) {
  return (
    <ToastContainer>
      <Icon name="toastcompleted" alt="toast complete" />
      <Message>{message}</Message>
      <Close onClick={onClose}>
        <Icon name="toastcloseIcon" alt="close" />
      </Close>
    </ToastContainer>
  );
}

export default Toast;
