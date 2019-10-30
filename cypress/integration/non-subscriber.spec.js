describe('NonSubscriber', () => {
  beforeEach(() => {
    cy.logInNonSubscriber();
  });

  it('displays ads', () => {
    cy.contains('Continue...').click()
      .get('#ad-options button:first').click();
    cy.contains('Now back to the regularly scheduled programming....').click()
      .url().should('match', /\/story\/[a-z0-9-]+\?storyNode=start/);
  });

  it('blocks early content', () => {
    cy.contains('Subscribers only before ').should('exist');
    cy.contains('Become a full adventurer now to unlock access.').should('exist');
    cy.get('.story-previews').find('button').should('have.length', 1);
  });
});