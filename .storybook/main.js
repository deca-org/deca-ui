const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  core: {
    builder: '@storybook/builder-webpack5',
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  typescript: {
    reactDocgen: 'none',
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.plugins = [new TsconfigPathsPlugin()];
    return config;
  },
};
