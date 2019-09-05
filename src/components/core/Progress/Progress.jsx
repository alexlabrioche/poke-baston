import React from 'react';
import classNames from 'classnames';

function Progress({ isPattern, isSuccess, isWarning, isError, value, max }) {
  const ProgressClasses = classNames({
    'nes-progress': true,
    'is-pattern': isPattern,
    'is-success': isSuccess,
    'is-warning': isWarning,
    'is-error': isError,
  });
  return (
    <div style={{ paddingRight: '0.5rem' }}>
      <progress className={ProgressClasses} value={value} max={max} />
    </div>
  );
}

export default Progress;
