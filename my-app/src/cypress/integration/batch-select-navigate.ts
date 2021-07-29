/// <reference types="cypress" />

context('Batch selection navigate test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:19006/BatchSelection');
    cy.get('[data-testid="batchName"]').click();
  });
});

it('cy.go() - go forward to weeknotes page', () => {
  cy.location('pathname').should('include', 'WeekNotes');
});
