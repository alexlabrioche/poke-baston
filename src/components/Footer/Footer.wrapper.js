import styled, { css } from 'styled-components';
import { colors } from '../../helpers/globalTheme';

const StyledFooter = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  color: ${colors.isLight.text};
  background: ${colors.isLight.background};
  border-top: solid 0.3rem ${colors.isLight.border};
  box-shadow: inset 2px 2px 0px 2px ${colors.isLight.shadow};
  ${(p) =>
    p.isDark &&
    css`
      background: ${colors.isDark.background};
      border-top: solid 0.3rem ${colors.isDark.border};
      box-shadow: inset 2px 2px 0px 2px ${colors.isDark.shadow};
      color: ${colors.isDark.text};
    `}
`;
export default StyledFooter;
