/// <reference types="cypress" />

describe("Test home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Header component should render properly", () => {
    cy.get('[data-testid="app-header"]').should("be.visible");
    cy.get('[data-testid="app-logo"]').should("be.visible");
    cy.get('[data-testid="plays-search-box-container"]').should("not.exist");
    cy.get('[data-testid="header-links-container"]').should("be.visible");
    cy.get('[data-testid="browse-btn"]').should("be.visible");
    cy.get('[data-testid="create-btn"]').should("be.visible");
    cy.get('[data-testid="ideas-btn"]').should("be.visible");
    cy.get('[data-testid="github-btn"]').should("be.visible");
    cy.get('[data-testid="twitter-btn"]').should("be.visible");
    cy.get('[data-testid="share-btn"]').should("be.visible");
  });
});
