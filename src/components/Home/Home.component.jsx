import React, { useContext } from 'react';
import PokeCard from '../Pokecard';
import Paginate from '../Paginate';
import Favorite from '../Favorite';
import HomeComponentWrapper from './Home.wrapper';
import { Grid } from '@material-ui/core';
import { FavoritesCtx } from '../../contexts/Favorites.context';
import useToggle from '../../hooks/useToggle';
import { FightersCtx } from '../../contexts/Fighters.context';

function HomeComponent({ offset, pokeList, setOffset }) {
  const { favorites } = useContext(FavoritesCtx);
  const { fighters } = useContext(FightersCtx);
  const [showFavoritesList, toggleFavoritesList] = useToggle();
  return (
    <HomeComponentWrapper>
      <div className="toggle-favorites" onClick={() => toggleFavoritesList()}>
        {showFavoritesList ? 'retourner à la liste' : 'voir les favoris'}
      </div>
      {showFavoritesList ? (
        favorites.map((favorite) => <Favorite {...favorite} />)
      ) : (
        <>
          <Grid container justify="center" alignItems="center">
            {pokeList.data.results.map(({ name, url }) => {
              return (
                <PokeCard
                  key={url}
                  name={name}
                  url={url}
                  isFavorite={favorites.map((favorite) => favorite.url).includes(url)}
                  isFighting={fighters.includes(url)}
                />
              );
            })}
          </Grid>
          <Paginate data={pokeList} offset={offset} setOffset={setOffset} />
          <div
            style={{ paddingBottom: '5rem' }}
            className="toggle-favorites"
            onClick={() => toggleFavoritesList()}
          >
            {showFavoritesList ? 'retourner à la liste' : 'voir les favoris'}
          </div>
        </>
      )}
    </HomeComponentWrapper>
  );
}

export default HomeComponent;
