/// <reference types="cypress" />

describe('The Login Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:19006/Login');
  });
  it('successfully rendered text', () => {
    cy.get('[data-testid=username-input-label]').contains('Username:');
    cy.get('[data-testid=password-input-label]').contains('Password:');
  });
});
