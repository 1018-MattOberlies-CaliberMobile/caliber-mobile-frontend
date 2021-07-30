/// <reference types="cypress" />

context('weeks selection tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:19006/WeekNotes/');
  });

  it('has a scroll view for weeks', () => {
    cy.location('pathname').should('equal', '/WeekNotes');
    cy.contains(/Week [A-Z0-9]+/i);
  });

  it('should show week content when clicked', () => {
    cy.contains('Week 1').click();
    cy.get('[data-testid="studentCard"]').should('be.visible');
  });
});
