import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArrowCircleDownOutline } from '@styled-icons/evaicons-outline/ArrowCircleDownOutline';
import { ArrowCircleRightOutline } from '@styled-icons/evaicons-outline/ArrowCircleRightOutline';
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
  icon: <ArrowCircleDownOutline />,
};

export const IconWithLabel = Template.bind({});
IconWithLabel.args = {
  ...Default.args,
  icon: <ArrowCircleDownOutline />,
};

export const RightSideIconWithLabel = Template.bind({});
RightSideIconWithLabel.args = {
  ...Default.args,
  iconRight: <ArrowCircleRightOutline />,
};
