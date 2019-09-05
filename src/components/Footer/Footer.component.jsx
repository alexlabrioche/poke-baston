import React, { useContext } from 'react';
import StyledFooter from './Footer.wrapper';
import { ThemeCtx } from '../../contexts/Theme.context';
function Footer() {
  const { isDark } = useContext(ThemeCtx);
  return <StyledFooter isDark={isDark}>Footer</StyledFooter>;
}

export default Footer;
