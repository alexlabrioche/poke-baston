import React, { useContext } from 'react';
import PokecardComponent from './Pokecard.component';
import { FightersCtx } from '../../contexts/Fighters.context';
import { FavoritesCtx } from '../../contexts/Favorites.context';
import { REMOVE_FAVORITE, ADD_FAVORITE } from '../../reducers/Favorite.reducer';
import { REMOVE_FIGHTER, ADD_FIGHTER } from '../../reducers/Fighters.reducer';

function PokecardContainer({ name, url, isFavorite, isFighting }) {
  const { dispatchFavs } = useContext(FavoritesCtx);
  const { dispatchFighters } = useContext(FightersCtx);

  const setFavorite = (isFavorite, url, name) => {
    if (!isFavorite) {
      return dispatchFavs({ type: ADD_FAVORITE, url, name });
    }
    return dispatchFavs({ type: REMOVE_FAVORITE, url });
  };
  const setFighter = (isFighting, url) => {
    if (!isFighting) {
      return dispatchFighters({ type: ADD_FIGHTER, url });
    }
    return dispatchFighters({ type: REMOVE_FIGHTER, url });
  };
  return (
    <div>
      <PokecardComponent
        name={name}
        url={url}
        isFavorite={isFavorite}
        isFighting={isFighting}
        setFavorite={setFavorite}
        setFighter={setFighter}
      />
    </div>
  );
}

export default PokecardContainer;
