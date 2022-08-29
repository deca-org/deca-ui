import Box from '@lib/Box';
import Grid from '@lib/Grid';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import GridRuler from './GridRuler';

export default {
  title: 'Grid',
  component: Grid,
  argTypes: {
    justifyContent: {
      description: 'JustifyContent css prop',
      table: {
        type: {
          summary:
            'flex-start | center | flex-end | space-between | space-around | space-evenly',
        },
      },
      control: {
        type: 'select',
        options: [
          'center',
          'flex-start',
          'flex-end',
          'space-between',
          'space-around',
          'space-evenly',
        ],
      },
    },
    alignItems: {
      description: 'AlignItems css prop',
      table: {
        type: {
          summary: 'flex-start | center | flex-end',
        },
      },
      control: {
        type: 'radio',
        options: ['flex-start', 'center', 'flex-end'],
      },
    },
    spacing: {
      description: 'How much spacing there should be between columns.',
      table: {
        type: {
          summary: 'none | sm | md | lg',
        },
      },
      control: {
        type: 'radio',
        options: ['none', 'sm', 'md', 'lg'],
      },
    },
  },
} as ComponentMeta<typeof Grid>;

const ExampleBox = ({ children }: { children: React.ReactNode }) => (
  <Box
    css={{
      bg: '$indigo600',
      p: '$3',
      color: '$white',
      textAlign: 'center',
      fontWeight: '$bold',
      border: '$indigo700 solid 1px',
      m: '$n',
      dflex: 'center',
    }}
  >
    {children}
  </Box>
);

const Template: ComponentStory<typeof Grid> = (args: any) => (
  <Box css={{ overflow: 'hidden' }}>
    <Grid.Container
      justifyContent={args.justifyContent}
      alignItems={args.alignItems}
      n={args.n}
      xs={args.xs}
      sm={args.sm}
      md={args.md}
      lg={args.lg}
      xl={args.xl}
      {...args}
    >
      <Grid>
        <ExampleBox>1</ExampleBox>
      </Grid>
      <Grid>
        <ExampleBox>2</ExampleBox>
      </Grid>
      <Grid>
        <ExampleBox>3</ExampleBox>
      </Grid>
      <Grid>
        <ExampleBox>4</ExampleBox>
      </Grid>
    </Grid.Container>
  </Box>
);

export const Default = Template.bind({});
(Default.args as any) = {
  justifyContent: 'center',
  alignItems: 'flex-start',
  spacing: 'sm',
  n: 12,
  xs: 12,
  sm: 6,
  md: 4,
  lg: 3,
  xl: 2,
};

export const WithGridRuler = Template.bind({});
WithGridRuler.args = { ...Default.args };

WithGridRuler.decorators = [
  (Story, context) => (
    <Box css={{ position: 'relative' }}>
      <Story />
      <GridRuler spacing={context.args.spacing} />
    </Box>
  ),
];
