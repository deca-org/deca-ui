import Button from '@lib/Button';
import Input from '@lib/Input';
import Modal from '@lib/Modal';
import Text from '@lib/Text';
import { DecaUIProvider } from '@lib/Theme';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';

export default {
  title: 'Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal closeButton open={open} setOpen={setOpen} {...args}>
        <Modal.Header>
          <Text as="p" size="$h6" center>
            Welcome to <b>DecaUI</b>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input variant="outlined" placeholder="Email Address" size="lg" />
          <Input variant="outlined" placeholder="Password" size="lg" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="flat" color="error" onClick={() => setOpen(false)}>
            Close
          </Button>
          <Button>Sign Up</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  noPadding: false,
  autoGap: true,
  closeButton: true,
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
  (Story) => (
    <DecaUIProvider mode="dark">
      <Story />
    </DecaUIProvider>
  ),
];
