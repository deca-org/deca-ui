import Radio from '@lib/Radio';
import { DecaUIProvider } from '@lib/Theme';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

export default {
  title: 'RadioGroup',
  component: Radio.Group,
} as ComponentMeta<typeof Radio.Group>;

const Template: ComponentStory<typeof Radio.Group> = (args) => (
  <Radio.Group {...args}>
    <Radio value="A" label="Option A" />
    <Radio value="B" label="Option B" />
    <Radio value="C" label="Option C" />
    <Radio value="D" label="Option D" />
  </Radio.Group>
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
  <Radio.Group {...Default.args}>
    <Radio value="A" label="Option A" />
    <Radio value="B" label="Option B" />
    <Radio value="C" label="Option C" disabled />
    <Radio value="D" label="Option D" />
  </Radio.Group>
);

export const WithTheme = Template.bind({});

WithTheme.args = { ...Default.args };
WithTheme.decorators = [
  (Story) => (
    <DecaUIProvider
      theme={{
        colors: {
          primary: '$green600',
        },
      }}
    >
      <Story />
    </DecaUIProvider>
  ),
];
