// / <reference types="cypress" />

import Batch from '../../models/batch';

context('overall screen', () => {
  let batch: Batch;

  beforeEach(() => {
    cy.visit('http://localhost:19006/OverallNotes');
    cy.fixture('batch.json').then((data) => {
      console.log(data);
      batch = data;
    });

    cy.wait(2 * 1000);
    cy.window().its('store').invoke('dispatch', {
      type: 'SET_BATCH',
      payload: batch,
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

    it('checking validity of the request', () => {
      cy.get('[data-testid="overallNotesInput"]').type('this a note body');
      cy.get('[data-testid="submitNoteButton"]').click();

      cy.intercept('/api/v1/note', {
        method: 'POST',
        hostname: 'mjmpub1ma3.execute-api.us-east-1.amazonaws.com',
      }, (req) => {
        const input = Object.keys(req.body);
        const expected = ['technicalScore', 'noteContent', 'weekNumber'];
        console.debug('No associate in request body');
        expect(input.includes('associate')).to.equal(false);

        console.debug('Request body contains all the expected attributes');
        expect(input.length).to.equal(expected.length);
        expect(input).to.deep.eq(expected);

        console.debug('Request matches inputted note body');
        expect(req.body.noteContent).to.be('this a note body');

        console.debug('Request matches selected technical score');
        expect(req.body.technicalScore).to.equal(4);
      });
    });
  });
});
