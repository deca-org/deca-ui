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
};

export const Icon = Template.bind({});
Icon.args = {
  ...Default.args,
  icon: <ArrowCircleDownOutline />,
};

export const RightSideIcon = Template.bind({});
RightSideIcon.args = {
  ...Default.args,
  iconRight: <ArrowCircleRightOutline />,
};
