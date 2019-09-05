import React from 'react';

function Radio({ name, checked, children }) {
  return (
    <label>
      <input type="radio" className="nes-radio" name={name} checked={checked} />
      <span>{children}</span>
    </label>
  );
}

export default Radio;
