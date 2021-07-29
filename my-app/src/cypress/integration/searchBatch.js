describe('example to-do app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:19006/Root/HomeDrawer/QualityAudit/NoteNavigation/');
  });
  it('type into a DOM element', () => {
    cy.get('.search-bar').type('210524');
    cy.get('#query-btn').should('contain', 'Button').click();
    cy.get('.flat-list-batches').should('have.value', '210524 Cloud React Native Matt O');
  });
});
