import React from 'react';
import classNames from 'classnames';

function Select({ id, values, onChange, language, isDark }) {
  const selecClasses = classNames({
    'nes-select': true,
    'is-dark': isDark,
  });
  return (
    <div>
      <div className={selecClasses}>
        <select required id={id} onChange={onChange}>
          {values.map(({ VALUE, LABEL }) => (
            <option key={VALUE} value={VALUE}>
              {LABEL[language]}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Select;
