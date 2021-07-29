import user from '../fixtures/user.json';

describe('example to-do app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:19006/Root/HomeDrawer/QualityAudit/NoteNavigation/');
  });

  context('fetching data and searching', () => {
    it('loads the mock data', () => {
      cy.fixture('../fixtures/batchData').then((json) => {
        cy.intercept('GET', '/batch/time/*', json).as('getMockData');
      });
      cy.await('@getMockData').then(({ request }) => {
        expect(request.body).to.eq(json);
      });
    });
    it('do a succesful search test', () => {
      cy.get('[data-testid="search-bar"]').type('123123');
      cy.get('[data-testid="query-btn"]').should('contain', 'Button').click();
      cy.get('[data-testid="flat-list-batches"]').invoke('prop', 'batchData')
        .then((batchData) => {
          expect(batchData.batchTitle.to.equal('05132020 Cloud Native Matt'));
        });
    });
    it('do a unsuccessful search test', () => {
      cy.get('[data-testid="search-bar"]').type('fasdf');
      cy.get('[data-testid="query-btn"]').should('contain', 'Button').click();
      cy.get('[data-testid="flat-list-batches"]').should('be.empty');
    });
  });
});
