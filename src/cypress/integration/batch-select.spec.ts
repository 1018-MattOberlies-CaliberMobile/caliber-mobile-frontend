/// <reference types="cypress" />

context('batch selection tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:19006/BatchSelection');
    cy.intercept('/dev/api/v1/batch/year/*', { fixture: 'batchData2021.json' }).as('getBatches2021');
    cy.intercept('/dev/api/v1/batch/year', { fixture: 'batchYears.json' }).as('years');
  });

  context('year selection tests', () => {
    it('Before a year is selected, display batches for the current year', () => {
      cy.wait('@years');
      cy.wait('@getBatches2021');
      cy.contains('05132021 Cloud Native Matt').should('be.visible');
      cy.contains('04162020 DevOps Tim').should('not.exist');
    });
    it('Selecting a year shows a list of batches for that year', () => {
      cy.wait('@years');
      cy.wait('@getBatches2021');
      cy.contains('2020').click();
      cy.contains('04162020 DevOps Tim').should('be.visible');
      cy.contains('05132021 Cloud Native Matt').should('not.exist');
    });
  });

  context('navigation tests', () => {
    it('cy.go() - go forward to weeknotes page', () => {
      cy.wait('@years');
      cy.wait('@getBatches2020');

      cy.contains('05132021 Cloud Native Matt').click();
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
  });

  context('search bar tests', () => {
    it('do a succesful search test', () => {
      cy.wait('@years');
      cy.wait('@getBatches2020');


      cy.get('[data-testid="search-bar"]').type('123123', { force: true });
      cy.contains('Search').click({ force: true });
      cy.contains('05132021 Cloud Native Matt').should('be.visible');
      cy.contains('05132021 Java Trevor').should('not.exist');
    });
    it('do a unsuccessful search test', () => {
      cy.wait('@years');
      cy.wait('@getBatches2020');


      cy.get('[data-testid="search-bar"]').type('fasdfasfd', { force: true });
      cy.contains('Search').click({ force: true });
      cy.get('[data-testid="batch-list"]').should('not.have.value');
    });
  });
});
