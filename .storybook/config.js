import { configure } from '@storybook/react';

function loadStories() {
  require('../src/components/core/Button/Button.story');
  // You can require as many stories as you need.
}

configure(loadStories, module);
