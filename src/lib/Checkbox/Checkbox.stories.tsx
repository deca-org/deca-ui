import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Checkbox from './Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

export const Default = () => <Checkbox label="Hello world" size="sm" />;
