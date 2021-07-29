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
    it('should reveal modal when status indicator is pressed', () => {
      cy.get('[data-testid="statusIndicator"]').click();
      cy.get('[data-testid="statusSelector"]').should('be.visible');
    });
    it('should dismiss modal when new status is chosen', () => {
      cy.get('[data-testid="statusSelector"]').should('be.visible');
      cy.get('[data-testid="statusSelector"]').find('[data-testid="superstar"]').click();
      cy.get('[data-testid="statusIndicator"]').invoke('prop', 'status')
        .then((status) => {
          expect(status).to.equal(4);
        });
    });
    it('notes visible', () => {
      cy.get('[data-testid="overallNotesInput"]').type('text');
      cy.get('[data-testid="overallNotesInput"]').invoke('val')
        .then((text) => {
          expect(text).to.equal('text');
        });
    });
  });
  context('create note functionality', () => {
    cy.get('[data-testid="overallNotesInput"]').type('this a note body');
    cy.get('[data-testid="submitNoteButton"]').click();
    cy.intercept('/api/v1/user', { hostname: 'mjmpub1ma3.execute-api.us-east-1.amazonaws.com' }, (req) => {
      /* do something with request and/or response */
      const { noteId, noteContent } = req.body;
      expect(noteId).to.equal('');
    });
  });
});
