import Button from '@lib/Button';
import Popover from '@lib/Popover';
import { ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';

export default {
  title: 'Popover',
  component: Popover,
} as ComponentMeta<typeof Popover>;

export const Default = () => {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onClose={() => setOpen(false)}>
      <Popover.Trigger>
        <Button variant="outlined" onClick={() => setOpen((prev) => !prev)}>
          Hello World
        </Button>
      </Popover.Trigger>
      <Popover.Content>Hello</Popover.Content>
    </Popover>
  );
};
