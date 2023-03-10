import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'jw2m9i',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
    watchForFileChanges: false
  }
});
