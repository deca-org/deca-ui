import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'udbcua',
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});
