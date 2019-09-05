import React, { useContext } from 'react';
import StyledNav from './Navigation.wrapper';
import navContent, { darkContent } from './Navigation.content';
import { LanguageCtx } from '../../contexts/Language.context';
import { ThemeCtx } from '../../contexts/Theme.context';
import Select from '../core/Select';
import Checkbox from '../core/Checkbox';

function Navigation() {
  const { language, changeLanguage } = useContext(LanguageCtx);
  const { isDark, toggleDark } = useContext(ThemeCtx);
  return (
    <StyledNav isDark={isDark}>
      <div className="app-icon">POKEBASTON</div>
      <div className="app-checkbox">
        <Checkbox onChange={toggleDark} isDark={isDark} checked={isDark}>
          {darkContent[language]}
        </Checkbox>
      </div>
      <div className="app-select">
        <Select
          isDark={isDark}
          onChange={(e) => changeLanguage(e)}
          id="choose-language"
          values={navContent}
          language={language}
        />
      </div>
    </StyledNav>
  );
}

export default Navigation;
