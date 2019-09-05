import React, { useContext, useState } from 'react';
import Icon from '../core/Icon';
import getFrenchName from '../../utils/getFrenchName';
import StyledFavorite from './Favorite.wrapper.js';
import { LanguageCtx } from '../../contexts/Language.context';
import { DispatchFavoritesCtx } from '../../contexts/Favorites.context';
import { REMOVE_FAVORITE } from '../../reducers/Favorite.reducer';
import FadeContainer from '../Animated/Fade.container';

function Favorite({ name, url }) {
  const { language } = useContext(LanguageCtx);
  const dispatch = useContext(DispatchFavoritesCtx);
  const removeFavoriteItem = (url) => {
    dispatch({ type: REMOVE_FAVORITE, url });
  };
  return (
    <FadeContainer>
      <StyledFavorite onClick={() => removeFavoriteItem(url)}>
        <Icon isSmall heart isEmpty={false} />
        <span className="favorite-title">{language === 'ENG' ? name : getFrenchName(url)}</span>
      </StyledFavorite>
    </FadeContainer>
  );
}

export default Favorite;
