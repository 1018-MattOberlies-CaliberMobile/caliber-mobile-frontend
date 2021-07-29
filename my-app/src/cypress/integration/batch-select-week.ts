/// <reference types="cypress" />

context('year selection tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:19006/WeekNotes/');
  });

  it('has a nav-bar for weeks', () => {
    cy.contains('Week 1').click();
    cy.location('pathname').should('equal', '/one');
  });
  it('can navigate to other weeks', () => {
    cy.contains('Week 2').click();
    cy.location('pathname').should('equal', '/two');
  });
});
