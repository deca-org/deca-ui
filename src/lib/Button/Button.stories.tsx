import { DecaUIProvider } from '@lib/Theme';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PurchaseTagAlt } from '@styled-icons/boxicons-solid/PurchaseTagAlt';
import React from 'react';

import Button from './Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Button',
  color: 'primary',
  disabled: false,
  css: {},
  className: '',
  maxWidth: false,
  variant: 'solid',
  role: 'button',
  size: 'md',
  pill: false,
};

export const IconButton = Template.bind({});
IconButton.args = {
  ...Default.args,
  children: undefined,
  icon: <PurchaseTagAlt />,
};

export const IconWithLabel = Template.bind({});
IconWithLabel.args = {
  ...Default.args,
  icon: <PurchaseTagAlt />,
};

export const RightSideIconWithLabel = Template.bind({});
RightSideIconWithLabel.args = {
  ...Default.args,
  iconRight: <PurchaseTagAlt />,
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
          sm: '15px',
        },
      }}
    >
      <Story />
    </DecaUIProvider>
  ),
];

export const DarkMode = Template.bind({});

DarkMode.args = { ...Default.args };
DarkMode.parameters = { backgrounds: { default: 'dark' } };

DarkMode.decorators = [
  (Story) => {
    return (
      <DecaUIProvider mode="dark">
        <Story />
      </DecaUIProvider>
    );
  },
];
