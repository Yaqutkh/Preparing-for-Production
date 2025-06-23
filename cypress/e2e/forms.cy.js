/// <reference types="cypress" />

/* global describe, it, cy, beforeEach */



describe('Form Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234');
    cy.get('[data-cy=menu-cardset]').click();
  });

  it('shows error on empty Create Set form submission', () => {
    cy.get('[data-cy=create-set-submit]').click();
    cy.contains('error').should('exist');
  });

  it('submits Create Set form with valid input', () => {
    cy.get('#create-set-section').should('be.visible'); 
    cy.get('[data-cy=create-set-input]').type('Biology');
    cy.get('[data-cy=create-set-submit]').click();
    cy.contains('Biology').should('exist');
  });
});
