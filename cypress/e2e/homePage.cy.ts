// / <reference types="cypress" />

import { CONTRIBUTORS_COUNT, TESTIMONIALS_COUNT } from '../support/constant';

describe('Test home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Header component should render properly', () => {
    cy.header();
  });

  it('Testitomonials section should render and navigation must be clickable', () => {
    cy.get('[data-testid="testimonials-section"]').scrollIntoView().should('be.visible');
    cy.get('[data-testid="testimonials-swiper"]').scrollIntoView().should('be.visible');
  });

  it('Testitomonials should have a number of slides', () => {
    cy.get('[data-testid="testimonials-swiper"]').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.get('.swiper-slide').should('have.length', TESTIMONIALS_COUNT);
  });

  it('Contributors section should render with all contributors', () => {
    cy.get('[data-testid="contributors-section"]').scrollIntoView().should('be.visible');
    cy.get('[data-testid="contributors-section"] [data-testid*="contributor-"]').should(
      'have.length',
      CONTRIBUTORS_COUNT
    );
  });
});
