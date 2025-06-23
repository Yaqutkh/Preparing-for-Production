 /* global describe, it, cy, beforeEach */
/// <reference types="cypress" />

 describe('Navigation Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234');
  });

  it('navigates to Home page', () => {
    cy.get('[data-cy=menu-home]').click();
    cy.url().should('include', '/index.html');
    cy.contains('Welcome').should('exist');
  });

  it('navigates to About page', () => {
    cy.get('[data-cy=menu-about]').click();
    cy.get('#about-section').should('be.visible');
    cy.url().should('include', '/about.html');
    cy.contains('About Us').should('exist');
  });

  it('navigates to Card Sets page', () => {
    cy.get('[data-cy=menu-cardset]').click();
    cy.url().should('include', '/cardsets.html');
    cy.contains('Study Set Library').should('exist');
  });
});
