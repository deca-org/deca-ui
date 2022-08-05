import Radio from '@lib/Radio';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import RadioGroup from './RadioGroup';

export default {
  title: 'RadioGroup',
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args) => (
  <RadioGroup {...args}>
    <Radio value="A" label="Option A" />
    <Radio value="B" label="Option B" />
    <Radio value="C" label="Option C" />
    <Radio value="D" label="Option D" />
  </RadioGroup>
);

export const Default = Template.bind({});
Default.args = {
  defaultValue: 'A',
  name: 'FormGroup-Radio',
  disabled: false,
  className: '',
  color: 'primary',
};

export const SingleDisabled = () => (
  <RadioGroup {...Default.args}>
    <Radio value="A" label="Option A" />
    <Radio value="B" label="Option B" />
    <Radio value="C" label="Option C" disabled />
    <Radio value="D" label="Option D" />
  </RadioGroup>
);
