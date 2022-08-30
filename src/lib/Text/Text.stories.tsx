import { DecaUIProvider } from '@lib/Theme';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Text from './Text';

export default {
  title: 'Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

const showcaseText = 'Almost before we knew it, we had left the ground.';

export const Header = Template.bind({});

Header.args = {
  as: 'h1',
  children: showcaseText,
  size: 'h1',
};

export const Typescale = () => {
  return (
    <>
      <Text as="h1">{showcaseText}</Text>
      <Text as="h2">{showcaseText}</Text>
      <Text as="h3">{showcaseText}</Text>
      <Text as="h4">{showcaseText}</Text>
      <Text as="h5">{showcaseText}</Text>
      <Text as="h6">{showcaseText}</Text>
      <Text as="p" size="body">
        {showcaseText}
      </Text>
      <Text as="p">{showcaseText}</Text>
      <Text as="small">{showcaseText}</Text>
    </>
  );
};

export const WithTheme = Template.bind({});

WithTheme.args = { ...Header.args };
WithTheme.decorators = [
  (Story) => (
    <DecaUIProvider
      theme={{
        fonts: {
          normal: 'Times New Roman',
        },
      }}
    >
      <Story />
    </DecaUIProvider>
  ),
];

export const DarkMode = Template.bind({});

DarkMode.args = { ...Header.args };
DarkMode.parameters = { backgrounds: { default: 'dark' } };

DarkMode.decorators = [
  (Story) => (
    <DecaUIProvider mode="dark">
      <Story />
    </DecaUIProvider>
  ),
];
