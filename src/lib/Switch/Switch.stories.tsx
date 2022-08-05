import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Switch from './Switch';

export default {
  title: 'Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  size: 'md',
  color: 'primary',
  disabled: false,
  css: {},
  className: '',
  initialToggle: true,
  required: false,
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  ...Default.args,
  label: '',
};
