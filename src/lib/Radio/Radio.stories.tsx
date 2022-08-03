import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Radio from './Radio';

export default {
  title: 'Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  size: 'md',
  color: 'primary',
  disabled: false,
  css: {},
  className: '',
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  ...Default.args,
  label: '',
};
