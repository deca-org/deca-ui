import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Box from '../Box';

import Checkbox from './Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  size: 'md',
  color: 'primary',
  disabled: false,
  css: {},
  className: '',
  initialCheck: true,
  required: false,
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  ...Default.args,
  label: '',
};
