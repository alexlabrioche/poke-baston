import React, { useEffect, useState } from 'react';
import StyledResults from './FightResults.wrapper';
import DetailsList from './DetailsList.component';
import { Container, Grid } from '@material-ui/core';
import Button from '../core/Button';
import { getResults } from '../../utils';
import getRandomInt from '../../utils/getRandomInt';
import { LAST_INDEX } from '../../helpers/config';

import axios from 'axios';

function FightResults({ fighters, toggleResults }) {
  const [isLoading, setLoading] = useState(true);
  const [opponentFighters, setFighters] = useState([]);
  useEffect(() => {
    const getDatas = async () => {
      let i = 0;
      let pokemonArray = [];
      do {
        const index = getRandomInt(LAST_INDEX);
        const url = `https://pokeapi.co/api/v2/pokemon/${index}`;
        const response = await axios.get(url);
        if (response.data.base_experience < 175) {
          pokemonArray.push(response);
          i++;
        }
      } while (i < 4);
      setFighters(pokemonArray);
      setLoading(false);
    };
    getDatas();
  }, []);
  const myResults = !isLoading && getResults(fighters);
  const opponentResults = !isLoading && getResults(opponentFighters);
  return (
    <StyledResults>
      {isLoading ? (
        <p>Attends la fin de la baston...</p>
      ) : (
        <Container>
          <Grid item>
            <h1>
              {myResults.total >= opponentResults.total ? "C'est gagné !!!" : 'Gros looser...'}
            </h1>
            <h3>
              Ton score : <span>{myResults.total}</span>
            </h3>
            {myResults.results.map((result) => (
              <DetailsList result={result} />
            ))}
          </Grid>
          <Grid item>
            <h3>
              Adversaire : <span>{opponentResults.total}</span>
            </h3>
            {opponentResults.results.map((result) => (
              <DetailsList result={result} />
            ))}
          </Grid>
          <Grid container justify="center">
            <Button onClick={toggleResults}>retour</Button>
          </Grid>
        </Container>
      )}
    </StyledResults>
  );
}

export default FightResults;
