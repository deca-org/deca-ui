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
      <Modal open={open} setOpen={setOpen}>
        <div>Modal</div>
      </Modal>
    </>
  );
};
