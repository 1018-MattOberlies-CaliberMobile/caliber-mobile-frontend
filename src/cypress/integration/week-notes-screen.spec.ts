/// <reference types="cypress" />

context('weeks selection screen tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:19006/WeekNotes/');
    cy.intercept('https://k9ussq7588.execute-api.us-east-1.amazonaws.com/dev/api/v1/note/associate/0', {
      body: {
        batchId: '123', noteContent: 'hello world', technicalScore: 0, weekNumber: 1,
      },
    }).as('noteRequest');
  });

  it('has a scroll view for weeks', () => {
    cy.location('pathname').should('equal', '/WeekNotes');
    cy.contains(/Week [A-Z0-9]+/i);
  });

  it('should show associate cards when clicked', () => {
    cy.contains('Week 1').click();
    cy.get('[data-testid="associateCard0"]').should('be.visible');
  });

  it('associate card should expand when clicked', () => {
    cy.get('[data-testid="associateCard0"]').click();
    cy.wait(1000);
    cy.get('[data-testid="noteSave0"]').should('be.visible');
    cy.get('[data-testid="noteInput0"]').should('be.visible');
  });

  it('should contain an editable text input', () => {
    cy.get('[data-testid="associateCard0"]').click();
    cy.wait(1000);
    cy.get('[data-testid="noteInput0"]').click().type('testing editable text input');
    cy.contains('editable').should('be.visible');
  });

  it('should send a request when save is clicked', () => {
    cy.get('[data-testid="noteSave0"]');
    cy.wait('@noteRequest');
  });
});
