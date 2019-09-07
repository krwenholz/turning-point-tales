describe('Adventure', () => {
  beforeEach(() => {
    cy.logIn();
    cy.contains('Continue...').click();
  });

  it('defaults to "start" for storyNode if not provided, and no local storage', () => {
    cy.url().should('match', /\/story\/[a-z0-9-]+\?storyNode=start/)
  });

  it('begins at specific story node when given in query', () => {
    cy.location().then((loc) => {
      cy.visit(loc.pathname + '?storyNode=file_a_formal_complaint')
        .url().should('match', /\/story\/[a-z0-9-]+\?storyNode=file_a_formal_complaint/);
    });
  });

  it('saves last storyNode from visited story', () => {
    cy.location().then((loc) => {
      cy.visit(loc.pathname + '?storyNode=file_a_formal_complaint')
        .visit('/')
        .contains('Continue...').click()
        .url().should('match', /\/story\/[a-z0-9-]+\?storyNode=file_a_formal_complaint/);
    });
  })

  it('does not save last storyNode if local storage cleared', () => {
    cy.location().then((loc) => {
      cy.visit(loc.pathname + '?storyNode=file_a_formal_complaint')
        .visit('/')
        .clearLocalStorage()
        .visit('/')
        .contains('Continue...').click()
        .url().should('match', /\/story\/[a-z0-9-]+\?storyNode=start/);
    });
  })
});
