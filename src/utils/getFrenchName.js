import frenchName from '../assets/french';
import getIndex from './getIndex';

const getFrenchName = (url) => {
  const index = getIndex(url) - 1;
  return frenchName[index];
};

export default getFrenchName;
