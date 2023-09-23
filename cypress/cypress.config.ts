import { defineConfig } from 'cypress';
import vitePreprocessor from 'cypress-vite';

export default defineConfig({
  e2e: {
    setupNodeEvents(on) {
      on('file:preprocessor', vitePreprocessor());
    },
    baseUrl: 'http://localhost:3000',
    watchForFileChanges: false,
    pageLoadTimeout = 100000,
    responseTimeout = 100000
  }
});
