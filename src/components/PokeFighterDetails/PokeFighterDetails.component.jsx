import React, { useContext } from 'react';
import getIndex from '../../utils/getIndex';
import StyledPokeFighterDetails from './PokeFighterDetails.wrapper.js';
import { FightersCtx } from '../../contexts/Fighters.context';
import { REMOVE_FIGHTER } from '../../reducers/Fighters.reducer';

function PokeFighterDetails({ fighter, url }) {
  const index = getIndex(url);
  const { dispatchFighters } = useContext(FightersCtx);
  return (
    <StyledPokeFighterDetails>
      <div
        className="card-details__container"
        onClick={() => dispatchFighters({ type: REMOVE_FIGHTER, url })}
      >
        <img
          src={`${process.env.PUBLIC_URL}/images/pixel/${index}.png`}
          alt={`pokemon-img-index${index}`}
        />
        <p className="fighter-exp">{fighter.base_experience}</p>
      </div>
    </StyledPokeFighterDetails>
  );
}

export default PokeFighterDetails;
