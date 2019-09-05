import styled, { css } from 'styled-components';
import { fonts, colors } from '../../helpers/globalTheme';

const StyledNav = styled.div`
  position: fixed;
  background: ${colors.isLight.background};
  width: 100vw;
  z-index: 100;
  height: 10vh;
  display: flex;
  align-items: center;
  border-bottom: solid 0.3rem ${colors.isLight.border};
  box-shadow: inset -2px -2px 0px 2px ${colors.isLight.shadow};
  ${(p) =>
    p.isDark &&
    css`
      background: ${colors.isDark.background};
      border-bottom: solid 0.3rem ${colors.isDark.border};
      box-shadow: inset -2px -2px 0px 2px ${colors.isDark.shadow};
    `}
  .app-icon {
    padding-left: 1rem;
    height: 100%;
    display: flex;
    flex-grow: 3;
    align-items: center;
    justify-content: flex-start;
    font-family: ${fonts.secondary};
    font-size: 1.6rem;
    color: ${colors.primary};
    text-shadow: -4px -4px 0px ${colors.secondary};
  }
  .app-select {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 1rem;
  }
  .app-checkbox {
    height: 100%;
    flex-grow: 1;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding-right: 1rem;
    font-family: ${fonts.secondary};
    font-size: 0.8rem;
  }
`;
export default StyledNav;
