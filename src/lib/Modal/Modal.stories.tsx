import Box from '@lib/Box';
import Input from '@lib/Input';
import Text from '@lib/Text';
import Button from '@lib/Button';
import Modal from '@lib/Modal';
import { ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';

export default {
  title: 'Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

export const Default = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal closeButton open={open} setOpen={setOpen}>
        <Text as="p" size="$h6" center>
          Welcome to <b>DecaUI</b>
        </Text>
        <Box
          css={{
            display: 'flex',
            flexDirection: 'column',
            my: '$4',
            gap: '$2',
          }}
        >
          <Input variant="outlined" placeholder="Email Address" size="lg" />
          <Input variant="outlined" placeholder="Password" size="lg" />
        </Box>
        <Box css={{ display: 'flex', gap: '$2', justifyContent: 'flex-end' }}>
          <Button variant="flat" color="error" onClick={() => setOpen(false)}>
            Close
          </Button>
          <Button>Sign Up</Button>
        </Box>
      </Modal>
    </>
  );
};
