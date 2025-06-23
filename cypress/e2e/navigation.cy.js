/// <reference types="cypress" />
/* global describe, it, cy, beforeEach */

describe('Navigation Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234');
  });

  it('navigates to Home page', () => {
    cy.get('[data-cy=menu-home]').click();
    cy.get('[data-cy=header]').should('contain', 'Study Night');
  });

  it('navigates to About page', () => {
    cy.get('[data-cy=menu-about]').click();
    cy.get('body').should('contain', 'About'); 
  });

  it('navigates to Card Sets page', () => {
    cy.get('[data-cy=menu-cardset]').click();
    cy.get('[data-cy=create-set-form]').should('exist'); 
  });
});
