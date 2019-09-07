describe('unauthenticated redirects', () => {
  it('redirects to landing', () => {
    cy.visit('/')
    cy.url().should('match', /\/landing/);
  });

  it('allows direct navigation to the landing page', () => {
    cy.visit('/landing')
    cy.url().should('match', /\/landing/);
  });

  it('redirects to landing when visiting auth-only content', () => {
    cy.visit('/story/1')
    cy.url().should('match',  /\/landing/);
  });
});

describe('authenticated', () => {
  it('redirects to root after login', () => {
    cy.logIn().url().should('contain', '/');
    cy.get('#user_name').should('contain', 'Jeff');
  });

  it('should be able to access auth-only pages', () => {
    cy.logIn();
    cy.contains('Continue...').click();
    cy.url().should('match', /\/story\/[a-z0-9-]+\?storyNode=start/)
  })
});

describe('content', () => {
  it('visits teaser story', () => {
    cy.visit('/landing')
    cy.contains('A day in the life of Mr. Banks', {timeout: 7000}).click();
    cy.url().should('match',  /\/teaser-story\?storyNode=banks/);
  });
});
