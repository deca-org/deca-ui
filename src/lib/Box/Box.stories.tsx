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
    bg: '$primary',
  },
};
