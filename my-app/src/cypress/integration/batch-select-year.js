/// <reference types="cypress" />

context('year selection tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:19006/BatchSelection');
    cy.fixture('../fixtures/batchData').then((json) => {
      cy.intercept('GET', '/batch/time/*', json).as('getMockData');
    });
  });

  it('Before a year is selected, display batches for the current year', () => {
    expect(cy.get('[data-testid="batch-list"]')).to.contain('05132021 Cloud Native Matt');
    expect(cy.get('[data-testid="batch-list"]')).to.not.contain('04162020 DevOps Tim');
  });

  it('Selecting a year shows a list of batches for that year', () => {
    cy.get('[data-testid="year-selector"]').find('2020').click();
    expect(cy.get('[data-testid="batch-list"]')).to.contain('04162020 DevOps Tim');
    expect(cy.get('[data-testid="batch-list"]')).to.not.contain('05132021 Cloud Native Matt');
  });
});
