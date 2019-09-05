import React from 'react';
import classNames from 'classnames';

function FightPower({ power, max }) {
  const powerClasses = classNames({
    'fight-power nes-text': true,
    'is-success': power > 0 && power < max ? true : false,
    'is-warning': power >= (max * 90) / 100 ? true : false,
    'is-error': power > max ? true : false,
  });
  return (
    <div className={powerClasses}>
      {power <= max ? `${power} sur ${max}` : `T'emballes pas gamin, c'est ${max} maximum`}
    </div>
  );
}

export default FightPower;
