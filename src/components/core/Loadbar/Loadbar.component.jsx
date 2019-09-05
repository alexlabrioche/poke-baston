import React from 'react';
import classNames from 'classnames';

function Loadbar({ isPattern, isSuccess, isWarning, isError, value }) {
  const LoadbarClasses = classNames({
    'nes-progress': true,
    'is-pattern': isPattern,
    'is-success': isSuccess,
    'is-warning': isWarning,
    'is-error': isError,
  });
  return (
    <div>
      <progress className={LoadbarClasses} value={value} max="100" />
    </div>
  );
}

export default Loadbar;
