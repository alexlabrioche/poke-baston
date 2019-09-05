import React from 'react';
import classNames from 'classnames';

function Checkbox({ checked, children, onChange, isDark }) {
  const checkboxClasses = classNames({
    'nes-checkbox': true,
    'is-dark': isDark,
  });
  return (
    <label onChange={onChange}>
      <input type="checkbox" className={checkboxClasses} checked={checked} />
      <span>{children}</span>
    </label>
  );
}

export default Checkbox;
