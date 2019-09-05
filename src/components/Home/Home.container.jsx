import React, { useEffect, useState } from 'react';
import axios from 'axios';
import pokeapi from '../../helpers/pokeapi';
import HomeComponent from './Home.component';
import Loader from '../Loader';

function HomeContainer() {
  const [loading, setLoading] = useState(true);
  const [pokeList, setPokeList] = useState({});
  const [offset, setOffset] = useState(0);
  let url = `${pokeapi.uri}/pokemon/?offset=${offset}&limit=${pokeapi.LIMIT}`;
  useEffect(() => {
    const getPokeList = async () => {
      const response = await axios.get(url);
      return response;
    };
    setLoading(false);
    getPokeList().then((res) => setPokeList(res));
  }, [url]);

  return pokeList.status === 200 && loading === false ? (
    <HomeComponent pokeList={pokeList} offset={offset} setOffset={setOffset} />
  ) : (
    <Loader />
  );
}

export default HomeContainer;
