// / <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

// methods
Cypress.Commands.add('header', () => {
  cy.get('[data-testid="app-header"]').should('be.visible');
  cy.get('[data-testid="app-logo"]').should('be.visible');
  cy.get('[data-testid="plays-search-box-container"]').should('not.exist');
  cy.get('[data-testid="header-links-container"]').should('be.visible');
  cy.get('[data-testid="browse-btn"]').should('be.visible').as('browseBtn');
  cy.get('[data-testid="create-btn"]').should('be.visible');
  cy.get('[data-testid="ideas-btn"]').should('be.visible');
  cy.get('[data-testid="github-btn"]').should('be.visible');
  cy.get('[data-testid="twitter-btn"]').should('be.visible');
  cy.get('[data-testid="share-btn"]').should('be.visible');
  cy.get('[data-testid="leaderboard-btn"]').should('be.visible');
  cy.get('@browseBtn').click();
  cy.get('[data-testid="plays-search-box-container"]').should('be.visible');
});
