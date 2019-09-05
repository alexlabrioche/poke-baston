import styled, { css } from 'styled-components';
import { fonts, colors } from '../../helpers/globalTheme';

const StyledApp = styled.div`
  font-family: ${fonts.primary};
  width: 100vw;
  height: 100vh;
  color: ${colors.isLight.text};
  background: ${colors.isLight.background};
  ${(p) =>
    p.isDark &&
    css`
      background: ${colors.isDark.background};
      color: ${colors.isDark.text};
    `}
`;

export default StyledApp;
