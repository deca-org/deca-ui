import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';

import Input from './Input';

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Solid = Template.bind({});

Solid.args = {
  label: 'Email Address',
  size: 'lg',
  helperText: 'Please submit query',
  variant: 'solid',
  placeholder: 'e.g. johndoe@gmail.com',
  focusColor: 'primary',
  required: true,
  disabled: false,
  as: 'input',
  maxWidth: false,
  initialValue: '',
  className: '',
};

export const Outlined = Template.bind({});

Outlined.args = {
  label: 'Email Address',
  size: 'lg',
  helperText: 'Please submit query',
  variant: 'outlined',
  focusColor: 'primary',
  placeholder: 'e.g. johndoe@gmail.com',
  required: true,
  disabled: false,
  as: 'input',
  maxWidth: false,
  initialValue: '',
  className: '',
};

export const Controlled = () => {
  const [value, setValue] = useState<string>();
  return (
    <Input
      label="Controlled Input"
      size="lg"
      helperText="Please submit query"
      variant="solid"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
