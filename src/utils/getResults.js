import getFrenchName from '../utils/getFrenchName';
import getRandomInt from './getRandomInt';
import getIndex from './getIndex';

const getSuccessRate = (power, effort) => {
  const SUCCESS_BASE_CHANCE = 80;
  if (power > 70 && effort === 0) {
    return Math.ceil(SUCCESS_BASE_CHANCE / 1.05);
  }
  if (effort > 0) {
    return Math.ceil(SUCCESS_BASE_CHANCE / (effort + 0.2));
  }
  return SUCCESS_BASE_CHANCE;
};

const getPercentageChance = (rate) => {
  const rdm = getRandomInt(100);

  if (rdm < rate) {
    return true;
  } else {
    return false;
  }
};

const getTotal = (array) => {
  return array.map(({ move }) => (move.isSucced ? move.power : 0)).reduce((a, b) => a + b);
};

const getResults = (data) => {
  if (!data.some(({ status }) => status === 200)) {
    return alert("Oups... y'a un problème");
  }
  let results = data.map(({ data, config }) => {
    const randomIndex = getRandomInt(data.stats.length);
    const frenchname = getFrenchName(config.url);
    const power = data.stats[randomIndex].base_stat;
    const effort = data.stats[randomIndex].effort;
    const successRate = getSuccessRate(power, effort);
    const isSucced = getPercentageChance(successRate);
    const pokeIndex = getIndex(config.url);
    return {
      name: {
        FR: frenchname,
        ENG: data.name,
        pokeIndex,
      },
      move: {
        movename: data.stats[randomIndex].stat.name,
        power,
        effort,
        successRate,
        isSucced,
      },
    };
  });
  const total = getTotal(results);
  return { results, total };
};

export default getResults;
