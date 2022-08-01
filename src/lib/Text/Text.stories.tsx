import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Text from './Text';

export default {
  title: 'Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const H1 = Template.bind({});

H1.args = {
  as: 'h1',
  children: 'Hello World',
};
