import React, { useContext } from 'react';
import PokeCard from '../Pokecard';
import Paginate from '../Paginate';
import Favorite from '../Favorite';
import HomeComponentWrapper from './Home.wrapper';
import FadeContainer from '../Animated/Fade.container';
import { Grid } from '@material-ui/core';
import { FavoritesCtx } from '../../contexts/Favorites.context';
import useToggle from '../../hooks/useToggle';
import SlideContainer from '../Animated/Slide.container';

function HomeComponent({ offset, pokeList, setOffset }) {
  const favorites = useContext(FavoritesCtx);
  const [showFavoritesList, toggleFavoritesList] = useToggle();
  console.info('@favorites', favorites);

  return (
    <HomeComponentWrapper>
      <div className="toggle-favorites" onClick={() => toggleFavoritesList()}>
        {showFavoritesList ? 'retourner à la liste complète' : 'voir les favoris'}
      </div>
      {showFavoritesList ? (
        favorites.map((favorite) => <Favorite {...favorite} />)
      ) : (
        <>
          <SlideContainer>
            <Grid container justify="center" alignItems="center">
              {pokeList.data.results.map(({ name, url }) => {
                return (
                  <PokeCard
                    key={url}
                    name={name}
                    url={url}
                    isFavorite={favorites.map((favorite) => favorite.url).includes(url)}
                  />
                );
              })}
            </Grid>
          </SlideContainer>

          <Paginate data={pokeList} offset={offset} setOffset={setOffset} />
        </>
      )}
    </HomeComponentWrapper>
  );
}

export default HomeComponent;
