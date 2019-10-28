describe('Subscriber', () => {
  beforeEach(() => {
    cy.logIn();
  });

  it('displays the super cool things', () => {
    cy.url().should('contain', '/');
    cy.contains('Subscribers only before').should('exist');
    cy.contains('Become a full adventurer to unlock access').should('not.exist');
    cy.get('.story-previews').find('button').should('have.length', 2);
  });
});