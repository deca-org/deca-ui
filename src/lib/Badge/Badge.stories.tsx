import { DecaUIProvider } from '@lib/Theme';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Badge from './Badge';

export default {
  title: 'Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Hello',
  size: 'md',
  color: 'primary',
  pill: false,
  css: {},
  className: '',
};

export const WithTheme = Template.bind({});

WithTheme.args = { ...Default.args };
WithTheme.decorators = [
  (Story) => (
    <DecaUIProvider
      theme={{
        colors: {
          primary: '$green600',
        },
        radii: {
          sm: '10px',
        },
      }}
    >
      <Story />
    </DecaUIProvider>
  ),
];
