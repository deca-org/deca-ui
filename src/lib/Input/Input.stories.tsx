import Button from '@lib/Button/Button';
import { styled } from '@lib/Theme';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Input from './Input';

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  gap: '$2',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Email Address',
  size: 'lg',
  helperText: 'Please submit query',
};

export const ExampleTest = () => (
  <Container>
    <Input label="Email Address"></Input>
    <Button variant="outlined">Send</Button>
  </Container>
);
