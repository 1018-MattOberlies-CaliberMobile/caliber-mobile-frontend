/// <reference types="cypress" />

describe('The Login Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:19006');
  });
  it('successfully rendered text', () => {
    cy.get('[data-testid=username-input-label]').contains('Username:');
    cy.get('[data-testid=password-input-label]').contains('Password:');
  });

  it('invalid login', () => {
    cy.intercept({ method: 'Post', url: 'https://cognito-idp.us-west-1.amazonaws.com/' }, (req) => {
      req.continue((res) => {
        expect(res.statusCode).to.equal(400);
      });
    }).as('t1');
    cy.get('[data-testid=username-input]').type('invalid user');
    cy.get('[data-testid=password-input]').type('wrong password');
    cy.get('[data-testid=login-button]').click();
    cy.wait('@t1');
  });

  it('valid login', () => {
    cy.intercept({ method: 'Post', url: 'https://cognito-idp.us-west-1.amazonaws.com/' }, (req) => {
      req.continue((res) => {
        expect(res.statusCode).to.equal(200);
      });
    }).as('t2');
    cy.get('[data-testid=username-input]').type('Trainer1');
    cy.get('[data-testid=password-input]').type('password');
    cy.get('[data-testid=login-button]').click();
    cy.wait('@t2');
  });
});
