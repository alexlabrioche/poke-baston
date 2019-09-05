import React, { useContext, useEffect } from 'react';
import useToggle from '../../hooks/useToggle';
import PokecardComponent from './Pokecard.component';
import Modal from '../Modal';
import { DispatchFavoritesCtx } from '../../contexts/Favorites.context';
import { REMOVE_FAVORITE, ADD_FAVORITE } from '../../reducers/Favorite.reducer';

function PokecardContainer({ name, url, isFavorite }) {
  const [isModalVisible, toggleModal] = useToggle();
  const dispatch = useContext(DispatchFavoritesCtx);
  const setFavoriteItem = (isFavorite, url, name) => {
    if (isFavorite) {
      dispatch({ type: REMOVE_FAVORITE, url });
    }
    if (!isFavorite) {
      dispatch({ type: ADD_FAVORITE, url, name });
    }
  };
  return (
    <div>
      <PokecardComponent
        name={name}
        url={url}
        isFavorite={isFavorite}
        toggleModal={toggleModal}
        setFavoriteItem={setFavoriteItem}
      />
      {isModalVisible ? <Modal url={url} toggleModal={toggleModal} /> : null}
    </div>
  );
}

export default PokecardContainer;
