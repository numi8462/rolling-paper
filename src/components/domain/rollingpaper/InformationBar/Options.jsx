import styled from 'styled-components';
import { theme } from '../../../../styles/theme';

const S = {
  List: styled.ul`
    width: 140px;
    height: 120px;
    position: absolute;
    top: 41px;
    right: 0;
    background-color: ${theme.colors.basic.white};
    padding: 10px 1px;
    border-radius: 8px;
    border: 1px solid ${theme.colors.gray[300]};
  `,
  ListItem: styled.li`
    width: 138px;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 12px 16px;
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.gray[100]};
    }
  `,
};

function Options({ handleKakaoClick, handleShareUrlClick, optionsRef }) {
  return (
    <S.List ref={optionsRef}>
      <S.ListItem onClick={handleKakaoClick}>카카오톡 공유</S.ListItem>
      <S.ListItem onClick={handleShareUrlClick}>URL 공유</S.ListItem>
    </S.List>
  );
}

export default Options;
