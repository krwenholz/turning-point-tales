describe('Adventure', () => {
  beforeEach(() => {
    cy.fakeLogin();
  });

  it('defaults to "start" for storyNode if not provided, and no local storage', () => {
    cy.visit('/story/1')
      .url().should('match', /\/story\/1\?storyNode=start/);
  });

  it('begins at specific story node when given in query', () => {
    cy.visit('/story/1?storyNode=file_a_formal_complaint')
      .url().should('match', /\/story\/1\?storyNode=file_a_formal_complain/);
  });

  it('saves last storyNode from visited story', () => {
    cy.visit('/story/1?storyNode=file_a_formal_complaint')
      .visit('/')
      .visit('story/1')
      .url().should('match', /\/story\/1\?storyNode=file_a_formal_complain/);
  })

  it('does not save last storyNode if local storage cleared', () => {
    cy.visit('/story/1?storyNode=file_a_formal_complaint')
      .visit('/')
      .clearLocalStorage()
      .visit('/story/1')
      .url().should('match', /\/story\/1\?storyNode=start/);
  })
});
