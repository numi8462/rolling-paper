import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
  }

  body {
    min-width: ${theme.breakpoints.min};
    font-size: 16px;
    line-height: 1.5;
    word-spacing: -1px;
    color: ${theme.colors.gray[900]};
    font-family: 'Pretendard-Regular';

    -webkit-font-smoothing: antialiased; 
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility; 
  }

  ol, ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  @font-face {
      font-family: 'Pretendard-Regular';
      src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
        format('woff');
      font-weight: 400;
      font-style: normal;
    }
`;
