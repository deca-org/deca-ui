import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Text from '../Text';

import Box from './Box';

export default {
  title: 'Box',
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

const showcaseText = 'Almost before we knew it, we had left the ground.';

export const Default = Template.bind({});

Default.args = {
  css: {
    br: '$lg',
    size: '$25',
    linearGradient: '20deg, $pink900, $red500',
  },
};

export const WithChildren = () => (
  <Box
    css={{
      fontFamily: '$normal',
      bg: '$primary',
      color: '$white',
      width: '$35',
      p: '$4',
      br: '$lg',
      linearGradient: '20deg, $blue900, $blue500',
    }}
  >
    <Text as="h4" css={{ mb: '$2' }}>
      {showcaseText}
    </Text>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend
      rhoncus ligula, eget porta enim aliquam nec. Suspendisse ultrices lorem
      lobortis feugiat tempor.
    </Text>
  </Box>
);
