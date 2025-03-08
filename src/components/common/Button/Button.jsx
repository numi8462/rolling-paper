
import styled, { css } from "styled-components";
import { theme } from "../../../styles/theme";



export function Button({ type, w, h = 56 , children, ...rest}) {
  const Component = StyledButton[type] ?? StyledButton.p; 
  const width = ( w !== '' && w !== undefined ? `${w}px` : '100%');
  const childrenImg = children.length > 1 ? children[0].type : children.type ;
  
  return childrenImg !==  'img' ? (
    <Component height={h} width={width} {...rest}>
      {children}
    </Component>
    ) : (
    <Component height={h} width={width} {...rest}>
      <FlexBox height={Number(h)}>{children}</FlexBox>
    </Component>
  );
}
 
const FlexBox = styled.div` 
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ height }) => height > 40 ? '8px' : '4px'};
  img {
    width: 20px;
  };
  &:disabled {
  
  }
`;

// button default 
const buttonDefault = css`
  ${({ height }) => StyledButtonHeight[height] || StyledButtonHeight[56]};
  width:  ${({ width }) => `${width}` || "100%"};

  &:disabled {
    background-color: ${theme.colors.gray[300]};
    border:1px solid ${theme.colors.gray[300]};
    color: ${theme.colors.basic.white};
    img {
      width: 20px;
    )
  }
`;
// button color type
const StyledButton = {
  p: styled.button`
    background-color: ${theme.colors.purple[600]};
    border:1px solid ${theme.colors.purple[600]};
    color: ${theme.colors.basic.white};

    &:hover {
      background-color: ${theme.colors.purple[700]};
      border:1px solid ${theme.colors.purple[700]};
    }
    &:active,
    &:focus {
      background-color: ${theme.colors.purple[800]};
      border:1px solid ${theme.colors.purple[800]};
    }
    ${buttonDefault};
  `,    
  s: styled.button`
    background-color: ${theme.colors.basic.white};
    border:1px solid ${theme.colors.purple[600]};
    color: ${theme.colors.purple[700]};

    &:active,
    &:hover {
      background-color: ${theme.colors.purple[100]};
      border:1px solid ${theme.colors.purple[800]};
      color: ${theme.colors.purple[600]};
    }
    &:focus {
      background-color: ${theme.colors.basic.white};
      border:1px solid ${theme.colors.purple[800]};
      color: #9747FF;
    }
    ${buttonDefault};
  `,
  o: styled.button`
    background-color: ${theme.colors.basic.white};
    border:1px solid ${theme.colors.gray[300]};
    color: ${theme.colors.gray[900]};

    &:active,
    &:hover {
      background-color: ${theme.colors.gray[100]};
      border:1px solid ${theme.colors.gray[300]};
      color: ${theme.colors.gray[900]};
    }
    &:focus {
      background-color: ${theme.colors.basic.white};
      border:1px solid ${theme.colors.gray[500]};
      color:${theme.colors.gray[900]};
    }
    ${buttonDefault};
  `,
}

// button size
const StyledButtonHeight = {
  56: css`
    ${theme.fs.l};
    height: 56px;
    border-radius: 12px;
    font-weight: 700;
  `,
  40: css`
    ${theme.fs.m};
    height: 40px;
    border-radius: 6px;
  `,
  36: css`
    ${theme.fs.m};
    height: 36px;
    border-radius: 6px;
  `,
  28: css`
    ${theme.fs.xs};
    height: 28px;
    border-radius: 6px;
  `,
} 

