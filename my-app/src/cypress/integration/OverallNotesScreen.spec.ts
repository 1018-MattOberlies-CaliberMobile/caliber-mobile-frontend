// / <reference types="cypress" />

context('overall screen', () => {
  beforeEach(() => {
    cy.visit('http://localhost:19006/OverallNotes');
  });
  context('week navigation', () => {
    it('week navigation', () => {
      cy.contains(/week [0-9]+/i);
    });
  });
  context('overall week body', () => {
    it('status is visible', () => {
      cy.get('[data-testid="statusIndicator"]').click();
      cy.get('[data-testid="statusSelector"]').should('be.visible');
    });
    it('notes visible', () => {
      cy.get('[data-testid="overallNotesInput"]').type('text');
      cy.get('[data-testid="overallNotesInput"]').invoke('val')
        .then((text) => {
          expect(text).to.equal('text');
        });
    });
  });
});
