import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
      // @ts-ignore
      viteConfig: './cypress/vite.config',
    },
  },
});
