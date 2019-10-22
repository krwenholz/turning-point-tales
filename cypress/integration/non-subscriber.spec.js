describe('Adventure', () => {
  beforeEach(() => {
    cy.logInNonSubscriber();
  });

  it('displays ads', () => {
    cy.contains('Continue...').click()
      .get('#ad-options button:first').click();
    cy.contains('Now back to the regularly scheduled programming....').click()
      .url().should('match', /\/story\/[a-z0-9-]+\?storyNode=start/);
  });
});
