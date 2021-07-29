// / <reference types="cypress" />

import Batch from '../../models/Batch';
import Note from '../../models/Note';

context('overall screen', () => {
  let batch: Batch;

  beforeEach(() => {
    cy.visit('http://localhost:19006/OverallNotes');
    cy.fixture('batch.json').then((data) => {
      console.log(data);
      batch = data;
    });
  });

  context('week navigation', () => {
    it('week navigation', () => {
      cy.contains(/week [0-9]+/i);
    });

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

    cy.get('[data-testid="overallNotesInput"]').type('this a note body');
    cy.get('[data-testid="submitNoteButton"]').click();
    cy.intercept('/api/v1/note', {
      method: 'POST',
      hostname: 'mjmpub1ma3.execute-api.us-east-1.amazonaws.com',
    }, (req) => {
      const input = Object.keys(req.body);
      const expected = ['technicalScore', 'noteContent', 'weekNumber'];
      expect(input).to.deep.eq(expected);
    });
  });
});
