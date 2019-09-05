import pokeapi from '../helpers/pokeapi';

const getIndex = (url) => {
  const index = url.replace(`${pokeapi.uri}/pokemon/`, '').replace('/', '');
  return index;
};

export default getIndex;
