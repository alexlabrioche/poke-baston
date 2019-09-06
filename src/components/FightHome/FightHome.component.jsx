import React from 'react';
import StyledFightHome from './FightHome.wrapper';
import PokeFighterDetails from '../PokeFighterDetails';
import FightPower from './FightPower.component';
import Progress from '../core/Progress';
import Button from '../core/Button';
import getPower from '../../utils/getPower';
import getStupidAnswers from '../../utils/getStupidAnswers';
import { Grid } from '@material-ui/core';
import { POWER_LIMIT } from '../../helpers/config';
import useToggle from '../../hooks/useToggle';
import FightResults from '../FightResults';

function FightHome({ fighters }) {
  const [seeResults, toggleResults] = useToggle();
  const power = getPower(fighters);
  const launchFight = () => {
    toggleResults();
  };
  return seeResults ? (
    <FightResults fighters={fighters} toggleResults={toggleResults} />
  ) : (
    <StyledFightHome>
      <div className="progress__container">
        <Progress
          isSuccess
          isWarning={power >= (POWER_LIMIT * 90) / 100 ? true : false}
          isError={power > POWER_LIMIT ? true : false}
          value={power}
          max={POWER_LIMIT}
        />
        <FightPower power={power} max={POWER_LIMIT} />
      </div>
      <Grid container justify="center">
        {fighters.length > 0 &&
          fighters.map(({ data, config }) => (
            <PokeFighterDetails fighter={data} url={config.url} />
          ))}
      </Grid>
      <div className="button__container">
        <Button
          isLarge
          isSuccess={fighters.length === 4 && power <= POWER_LIMIT}
          isError={power > POWER_LIMIT}
          isDisabled={fighters.length !== 4 || power > POWER_LIMIT}
          onClick={() => launchFight(fighters)}
        >
          {getStupidAnswers(fighters.length, power, POWER_LIMIT)}
        </Button>
      </div>
    </StyledFightHome>
  );
}

export default FightHome;
