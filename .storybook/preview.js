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
