import styled, { css } from 'styled-components';
import { fonts, colors } from '../../helpers/globalTheme';

const StyledPokeCard = styled.div`
  width: 15rem;
  height: 7rem;
  padding: 0.6rem;

  .card-container {
    top: -2rem;
    width: 100%;
    height: 100%;
    display: flex;
    border: solid 0.25rem ${colors.isLight.border};
    &:hover {
      box-shadow: inset -2px -2px 0px 2px ${colors.isLight.shadow};
      ${(p) =>
        p.isDark &&
        css`
          box-shadow: inset -2px -2px 0px 2px ${colors.isDark.shadow};
        `}
    }
    ${(p) =>
      p.isDark &&
      css`
        border: solid 0.25rem ${colors.isDark.border};
      `}
  }
  .card-img__container {
    padding: 0.6rem;
    width: 50%;
    height: 100%;
    img {
      height: 100%;
      object-fit: cover;
    }
  }
  .card-content__container {
    padding: 0.8rem;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .title {
    background: ${colors.isLight.background};
    font-family: ${fonts.secondary};
    font-size: 1rem;
    position: relative;
    top: 1rem;
    margin: 0 0.8rem;
    padding: 0 0.6rem;
    ${(p) =>
      p.isDark &&
      css`
        background: ${colors.isDark.background};
        color: ${colors.isDark.text};
      `}
  }
`;
export default StyledPokeCard;
