import Checkbox from '@lib/Checkbox';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

export default {
  title: 'CheckboxGroup',
  component: Checkbox.Group,
} as ComponentMeta<typeof Checkbox.Group>;

const Template: ComponentStory<typeof Checkbox.Group> = (args) => (
  <Checkbox.Group {...args}>
    <Checkbox value="A" label="Option A" />
    <Checkbox value="B" label="Option B" />
    <Checkbox value="C" label="Option C" />
    <Checkbox value="D" label="Option D" />
  </Checkbox.Group>
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
  <Checkbox.Group {...Default.args}>
    <Checkbox value="A" label="Option A" />
    <Checkbox value="B" label="Option B" />
    <Checkbox value="C" label="Option C" disabled />
    <Checkbox value="D" label="Option D" />
  </Checkbox.Group>
);
