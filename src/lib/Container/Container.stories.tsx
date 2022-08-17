import Box from '@lib/Box';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Container from './Container';

export default {
  title: 'Container',
  component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args}>
    <Box
      css={{
        bg: '$indigo500',
        br: '$md',
        color: '$white',
        p: '$3',
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum
      justo, interdum eget lacus sit amet, consequat scelerisque lectus.
      Suspendisse vel tincidunt purus.
    </Box>
  </Container>
);

export const Responsive = Template.bind({});

Responsive.args = {
  responsive: true,
  px: 'sm',
  fluid: false,
};

export const Fluid = Template.bind({});

Fluid.args = {
  responsive: true,
  px: 'sm',
  fluid: true,
};
