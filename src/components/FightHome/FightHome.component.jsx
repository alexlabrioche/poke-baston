import React from 'react';
import StyledFightHome from './FightHome.wrapper';
import PokeFighterDetails from '../PokeFighterDetails';
import FightPower from './FightPower.component';
import Progress from '../core/Progress';
import Button from '../core/Button';
import getPower from '../../utils/getPower';
import getStupidAnswers from '../../utils/getStupidAnswers';
import { Grid } from '@material-ui/core';

const POWER_LIMIT = 600;

function FightHome({ fighters }) {
  const power = getPower(fighters);
  return (
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
          isError={fighters.length === 4 && power > POWER_LIMIT}
          isDisabled={fighters.length !== 4}
        >
          {getStupidAnswers(fighters.length, power, POWER_LIMIT)}
          {/* {fighters.length !== 4
    ? `encore ${4 - fighters.length} pour la baston`
    : "C'est la Bagarre !!!"}
  {fighters.length === 4 && power > POWER_LIMIT && `t'as vu trop gros`} */}
        </Button>
      </div>
    </StyledFightHome>
  );
}

export default FightHome;
