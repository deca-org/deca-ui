import { DecaUIProvider } from '@lib/Theme';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

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
  pill: false,
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
  pill: false,
};

export const WithTheme = Template.bind({});

WithTheme.args = { ...Outlined.args };
WithTheme.decorators = [
  (Story) => (
    <DecaUIProvider
      theme={{
        colors: {
          primary: '$green600',
        },
        radii: {
          sm: '15px',
        },
      }}
    >
      <Story />
    </DecaUIProvider>
  ),
];

export const DarkMode = Template.bind({});

DarkMode.args = { ...Outlined.args };
DarkMode.parameters = { backgrounds: { default: 'dark' } };

DarkMode.decorators = [
  (Story) => (
    <DecaUIProvider mode="dark">
      <Story />
    </DecaUIProvider>
  ),
];
