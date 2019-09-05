import React from 'react';
import { useSpring, animated, config } from 'react-spring';

function FadeContainer({ children, isFadingOut }) {
  console.info('isFadingOut', isFadingOut);
  const fadeInProps = useSpring({ config: config.wobbly, opacity: 1, from: { opacity: 0 } });
  const fadeOutProps = useSpring({ opacity: 0, from: { opacity: 1 } });
  return <animated.div style={isFadingOut ? fadeOutProps : fadeInProps}>{children}</animated.div>;
}

export default FadeContainer;
