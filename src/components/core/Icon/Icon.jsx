import React from 'react';
import classNames from 'classnames';

function Icon({ isSmall, isMedium, isLarge, heart, star, isEmpty, onClick }) {
  const iconClasses = classNames({
    'nes-icon': true,
    'is-small': isSmall,
    'is-medium': isMedium,
    'is-large': isLarge,
    'heart ': heart,
    'star ': star,
    'is-empty': isEmpty,
  });
  return (
    <div onClick={onClick}>
      <i className={iconClasses} />
    </div>
  );
}

export default Icon;
