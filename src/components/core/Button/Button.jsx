import React from 'react';
import classNames from 'classnames';
import StyledButton from './Button.wrapper';

function Button({
  children,
  onClick,
  isPrimary,
  isSuccess,
  isWarning,
  isError,
  isDisabled,
  isLarge,
}) {
  const btnClasses = classNames({
    'nes-btn': true,
    'is-primary': isPrimary,
    'is-success': isSuccess,
    'is-warning': isWarning,
    'is-error': isError,
    'is-disabled': isDisabled,
  });
  return (
    <StyledButton isLarge={isLarge} onClick={isDisabled ? null : onClick} className={btnClasses}>
      {children}
    </StyledButton>
  );
}

export default Button;
