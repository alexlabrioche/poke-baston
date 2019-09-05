import React, { useContext } from 'react';
import { LanguageCtx } from '../../contexts/Language.context';
import { ThemeCtx } from '../../contexts/Theme.context';
import getFrenchName from '../../utils/getFrenchName';
import getIndex from '../../utils/getIndex';
import Icon from '../core/Icon';
import StyledPokecard from './Pokecard.wrapper';
import pokeapi from '../../helpers/pokeapi';

function PokeCardComponent({ url, name, isFavorite, setFavoriteItem }) {
  const { language } = useContext(LanguageCtx);
  const { isDark } = useContext(ThemeCtx);
  const index = getIndex(url);
  return index <= pokeapi.LAST_INDEX ? (
    <StyledPokecard isDark={isDark}>
      <span className="title">{language === 'ENG' ? name : getFrenchName(url)}</span>
      <div className="card-container">
        <div className="card-img__container">
          <img src={`/images/pixel/${index}.png`} alt={`pokemon-img-index${index}`} />
        </div>
        <div className="card-content__container">
          <Icon
            heart
            isEmpty={!isFavorite}
            onClick={() => setFavoriteItem(isFavorite, url, name)}
          />
        </div>
      </div>
    </StyledPokecard>
  ) : null;
}

export default PokeCardComponent;
