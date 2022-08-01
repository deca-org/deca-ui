import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Box from './Box';

export default {
  title: 'Box',
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Default = Template.bind({});

Default.args = {
  css: {
    br: '$xs',
    size: '$25',
    bg: '$blue500',
  },
};

export const WithChildren = Template.bind({});

WithChildren.args = {
  children: (
    <Box
      css={{
        color: '$white',
        dflex: 'center',
        textAlign: 'center',
        fontFamily: '$normal',
      }}
    >
      <h2>Hello World</h2>
    </Box>
  ),
  css: {
    br: '$xs',
    size: '$25',
    bg: '$blue500',
  },
};
