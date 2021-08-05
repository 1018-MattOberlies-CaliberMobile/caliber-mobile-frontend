/// <reference types="cypress" />

describe('The Login Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:19006/Login');
  });
  it('successfully rendered text', () => {
    cy.get('[data-testid=username-input-label]').contains('Username:');
    cy.get('[data-testid=password-input-label]').contains('Password:');
  });
  it('invalid login', () => {
    let failed = false;
    cy.intercept({ method: 'Post' }, (req) => {
      req.continue((res) => {
        if (res.statusCode >= 300) {
          failed = true;
        }
      });
    });
    cy.get('[data-testid=username-input]').type('invalid user');
    cy.get('[data-testid=password-input]').type('wrong password');
    cy.get('[data-testid=login-button]').click();
    cy.wait(4000);
    expect(failed);
  });
  it('valid login', () => {
    cy.intercept({ method: 'Post' }, (req) => {
      req.continue((res) => {
        if (res.statusCode >= 300) {
          expect(2).to.equal(1);
        }
      });
    });
    cy.get('[data-testid=username-input]').type('valid user');
    cy.get('[data-testid=password-input]').type('password is correct');
    cy.get('[data-testid=login-button]').click();
  });
});
