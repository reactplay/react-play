## Purpose 

To test and provide good quality to react-play users. Making sure all of the basic path are functional and does not break user flow.

test-case written for

- home 
- /plays
- /ideas

Tests written followed simple page object rules, to keep the locaters segreggated and all the relevant reusable methods in the page files described at playwright docs, read more at: https://playwright.dev/docs/pom


### To run the test-cases use

```
yarn e2e
```

OR

```
npm run e2e
```

to debug test-cases use

```
yarn playwright test <test-file.spec.ts> --debug
```