import React from 'react';
import { useTransition, animated } from 'react-spring';

function SlideContainer({ children }) {
  // const [items, set] = useState([...])
  const transitions = useTransition((item) => item.key, {
    from: { transform: 'translate3d(0,-40px,0)' },
    enter: { transform: 'translate3d(0,0px,0)' },
    leave: { transform: 'translate3d(0,-40px,0)' },
  });
  return transitions.map(({ item, props, key }) => (
    <animated.div key={key} style={props}>
      {children}
    </animated.div>
  ));
}

export default SlideContainer;
