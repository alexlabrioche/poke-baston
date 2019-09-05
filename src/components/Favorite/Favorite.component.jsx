import React, { useContext } from 'react';
import Icon from '../core/Icon';
import getFrenchName from '../../utils/getFrenchName';
import StyledFavorite from './Favorite.wrapper.js';
import { LanguageCtx } from '../../contexts/Language.context';
import { FavoritesCtx } from '../../contexts/Favorites.context';
import { FightersCtx } from '../../contexts/Fighters.context';
import { REMOVE_FAVORITE } from '../../reducers/Favorite.reducer';
import { ADD_FIGHTER, REMOVE_FIGHTER } from '../../reducers/Fighters.reducer';

function Favorite({ name, url }) {
  const { language } = useContext(LanguageCtx);
  const { fighters } = useContext(FightersCtx);
  const { dispatchFavs } = useContext(FavoritesCtx);
  const { dispatchFighters } = useContext(FightersCtx);
  const removeFavorite = (url) => {
    dispatchFavs({ type: REMOVE_FAVORITE, url });
  };
  const handleFighter = (url) => {
    if (fighters.includes(url)) {
      dispatchFighters({ type: REMOVE_FIGHTER, url });
    }
    dispatchFighters({ type: ADD_FIGHTER, url });
  };
  return (
    <StyledFavorite>
      <div className="favorite-first__container" onClick={() => removeFavorite(url)}>
        <Icon heart isEmpty={false} />
        <span className="favorite-name">{language === 'ENG' ? name : getFrenchName(url)}</span>
      </div>
      <span className="favorite-action" onClick={() => handleFighter(url)}>
        Baston!
      </span>
    </StyledFavorite>
  );
}

export default Favorite;
