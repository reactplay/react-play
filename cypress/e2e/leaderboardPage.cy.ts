// / <reference types="cypress" />

describe('Test leaderboard page', () => {
  beforeEach(() => {
    cy.visit('/leaderboard');
  });

  it('Header component should render properly', () => {
    cy.header();
  });
});
