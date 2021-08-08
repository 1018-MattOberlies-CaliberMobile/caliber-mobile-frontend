/// <reference types="cypress" />

context('weeks selection screen tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:19006/WeekNotes/');
    cy.intercept('https://k9ussq7588.execute-api.us-east-1.amazonaws.com/dev/api/v1/', { body: ['2021', '2020', '2019'] }).as('years');
  });

  it('has a scroll view for weeks', () => {
    cy.location('pathname').should('equal', '/WeekNotes');
    cy.contains(/Week [A-Z0-9]+/i);
  });

  it('should show associate cards when clicked', () => {
    cy.contains('Week 1').click();
    cy.get('[data-testid="associateCard"]').should('be.visible');
  });

  it('associate card should expand when clicked', () => {
    cy.get('[data-testid="associateCard"]').click();
    cy.contains('Save').should('be.visible');
    cy.get('[data-testid="noteInput"]').should('be.visible');
  });

  it('should contain an editable text input', () => {
    cy.get('[data-testid="noteInput"]').click();
    cy.type('testing editable text input');
    cy.contains('editable').should('be.visible');
  });

  it('should send and request when save is clicked', () => {
    cy.contains('Save').click();
  });
});
