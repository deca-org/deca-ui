import { DecaUIProvider } from '@lib/Theme';
const { addDecorator } = require('@storybook/react');
const { withPropsTable } = require('storybook-addon-react-docgen');

export const parameters = {
  backgrounds: {
    values: [
      {
        name: 'dark',
        value: '#000000',
      },
    ],
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    // adds provider for stories that do not contain it
    // (only to see changes made to component by css reset)
    <DecaUIProvider root={false}>
      <Story />
    </DecaUIProvider>
  ),
];

addDecorator(withPropsTable);
