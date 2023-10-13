// / <reference types="cypress" />

describe('Test play ideas page', () => {
  beforeEach(() => {
    cy.visit('/ideas');
  });

  it('Header component should render properly', () => {
    cy.header();
  });
});
