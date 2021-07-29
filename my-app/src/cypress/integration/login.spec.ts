/// <reference types="cypress" />

describe('The Login Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:19006/Root/Login');
  });
  it('successfully rendered text', () => {
    cy.visit('http://localhost:19006/Root/Login');
    cy.contains('Username:');
    cy.contains('Password:');
  });
});
