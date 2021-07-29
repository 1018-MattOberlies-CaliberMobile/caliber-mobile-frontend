/// <reference types="cypress" />

context('Batch selection navigate test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:19006/BatchSelection');
    cy.fixture('../fixtures/batchData').then((json) => {
      cy.intercept('GET', '/batch/time/*', json).as('getMockData');
    });
  });
});

it('cy.go() - go forward to weeknotes page', () => {
  cy.contains('05132020 Cloud Native Matt').click();
  cy.location('pathname').should('include', 'WeekNotes');
  cy.window().its('store').invoke('getState').should('deep.equal', {
    batchID: '123123',
    batchTitle: '05132020 Cloud Native Matt',
    trainerID: 'Matt',
    startDate: '05/13/2020',
    associateList: [],
    notes: [],
  });
});
