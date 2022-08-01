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
