import Button from '@lib/Button';
import Popover from '@lib/Popover';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

export default {
  title: 'Popover',
  component: Popover,
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
  <Popover {...args}>
    <Popover.Trigger>
      <Button>Open Popover</Button>
    </Popover.Trigger>
    <Popover.Content>This is the content of the popover.</Popover.Content>
  </Popover>
);

export const Default = Template.bind({});
Default.args = {
  placement: 'bottom',
  action: 'click',
};
