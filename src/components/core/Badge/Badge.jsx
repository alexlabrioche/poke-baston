import React from 'react';
import classNames from 'classnames';
import StyledBadge from './Badge.wrapper';

function Badge({ children, onClick, isPrimary, isSuccess, isWarning, isError, isDisabled }) {
  const badgeClasses = classNames({
    'is-primary': isPrimary,
    'is-success': isSuccess,
    'is-warning': isWarning,
    'is-error': isError,
    'is-disabled': isDisabled,
  });
  return (
    <StyledBadge className="nes-badge" onClick={onClick}>
      <span className={badgeClasses}>{children}</span>
    </StyledBadge>
  );
}

export default Badge;
