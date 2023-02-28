/// <reference types="cypress" />

import { CONTRIBUTORS_COUNT, TWEET_COUNT } from '../support/constant';

describe('Test home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Header component should render properly', () => {
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

  it('Tweet section should render with all tweets', () => {
    cy.intercept('GET', 'https://cdn.syndication.twimg.com/*').as('tweets');
    cy.wait('@tweets');
    cy.get('[data-testid="tweet-container"]').scrollIntoView().should('be.visible');
    cy.get('[data-testid="tweet-container"] [id*="twitter-widget"]').should(
      'have.length',
      TWEET_COUNT
    );
    cy.get('[data-testid="watch-svg"]').should('not.exist');
  });

  it('Contributors section should render with all contributors', () => {
    cy.get('[data-testid="contributors-section"]').scrollIntoView().should('be.visible');
    cy.get('[data-testid="contributors-section"] [data-testid*="contributor-"]').should(
      'have.length',
      CONTRIBUTORS_COUNT
    );
  });
});
