/// <reference types="cypress" />

context('year selection tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:19006/WeekNotes/');
  });

  it('has a nav-bar for weeks', () => {
    cy.contains(/Week [A-Z0-9]+/i);
  });
});
