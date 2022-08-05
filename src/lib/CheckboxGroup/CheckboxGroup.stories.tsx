import Checkbox from '@lib/Checkbox';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import CheckboxGroup from './CheckboxGroup';

export default {
  title: 'CheckboxGroup',
  component: CheckboxGroup,
} as ComponentMeta<typeof CheckboxGroup>;

const Template: ComponentStory<typeof CheckboxGroup> = (args) => (
  <CheckboxGroup {...args}>
    <Checkbox value="A" label="Option A" />
    <Checkbox value="B" label="Option B" />
    <Checkbox value="C" label="Option C" />
    <Checkbox value="D" label="Option D" />
  </CheckboxGroup>
);

export const Default = Template.bind({});
Default.args = {
  defaultValue: ['A', 'B'],
  name: 'FormGroup-Checkbox',
  disabled: false,
  className: '',
  color: 'primary',
};

export const SingleDisabled = () => (
  <CheckboxGroup {...Default.args}>
    <Checkbox value="A" label="Option A" />
    <Checkbox value="B" label="Option B" />
    <Checkbox value="C" label="Option C" disabled />
    <Checkbox value="D" label="Option D" />
  </CheckboxGroup>
);
